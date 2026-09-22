const http = require('http');
const https = require('https');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PORT = process.env.PORT || 8080;
const SUMO_API_BASE = 'https://www.sumo-api.com';
const PUBLIC_DIR = path.join(__dirname, 'public');

// In-memory cache for Sumo API GET requests to keep UI snappy
const apiCache = new Map();
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

// Webhook state: active config, received event log, and SSE clients
function getPublicBaseUrl(req) {
  if (process.env.PUBLIC_URL) {
    return process.env.PUBLIC_URL.replace(/\/+$/, '');
  }
  if (req && req.headers && req.headers.host) {
    const proto = req.headers['x-forwarded-proto'] || 'http';
    return `${proto}://${req.headers.host}`;
  }
  return `http://localhost:${PORT}`;
}

let webhookConfig = {
  name: 'sumostats-2026-client',
  destination: `${getPublicBaseUrl()}/api/webhook/ingest`,
  secret: process.env.WEBHOOK_SECRET || 'sumo-2026-hmac-secret-key',
  subscriptions: {
    newBasho: true,
    newMatches: true,
    matchResults: true,
    endBasho: true,
  },
};
let customDestinationSet = Boolean(process.env.PUBLIC_URL);

const webhookEvents = [
  {
    id: 'evt-init-1',
    receivedAt: new Date().toISOString(),
    type: 'matchResults',
    verified: true,
    source: 'sumo-api.com (Initialisation)',
    summary: 'Aki Basho 2026 (202609) • Jour 9 Makuuchi — Résultats synchronisés',
    payload: {
      bashoId: '202609',
      division: 'Makuuchi',
      day: 9,
      matchesUpdated: 21,
      leader: 'Onosato (8-1)',
    },
  },
];

const sseClients = new Set();

function broadcastWebhookEvent(eventObj) {
  webhookEvents.unshift(eventObj);
  if (webhookEvents.length > 50) webhookEvents.pop();

  const data = `data: ${JSON.stringify(eventObj)}\n\n`;
  for (const res of sseClients) {
    try {
      res.write(data);
    } catch (err) {
      sseClients.delete(res);
    }
  }
}

/**
 * Verify X-Webhook-Signature header according to https://www.sumo-api.com/webhooks:
 * hmacHash := hmac.New(sha256.New, yourSecret)
 * hmacHash.Write([]byte(url))
 * hmacHash.Write(body)
 * calculatedSignature := hex.EncodeToString(hmacHash.Sum(nil))
 */
function verifySumoWebhookSignature(secret, destinationUrl, rawBodyBuffer, incomingSignature) {
  if (!incomingSignature || !secret) return false;
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(Buffer.from(destinationUrl, 'utf-8'));
  hmac.update(rawBodyBuffer);
  const calculated = hmac.digest('hex');
  try {
    return crypto.timingSafeEqual(
      Buffer.from(calculated, 'utf-8'),
      Buffer.from(String(incomingSignature), 'utf-8')
    );
  } catch {
    return calculated === incomingSignature;
  }
}

/**
 * Helper to forward HTTP requests to https://www.sumo-api.com
 */
function forwardToSumoApi(targetPath, method = 'GET', bodyBuffer = null) {
  return new Promise((resolve, reject) => {
    const targetUrl = new URL(targetPath, SUMO_API_BASE);
    const options = {
      method,
      headers: {
        Accept: 'application/json',
        'User-Agent': 'SumoStats2026/1.0',
      },
    };
    if (bodyBuffer && bodyBuffer.length > 0) {
      options.headers['Content-Type'] = 'application/json';
      options.headers['Content-Length'] = bodyBuffer.length;
    }

    const req = https.request(targetUrl, options, (res) => {
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        const buffer = Buffer.concat(chunks);
        resolve({
          statusCode: res.statusCode || 200,
          headers: res.headers,
          body: buffer,
        });
      });
    });

    req.on('error', (err) => reject(err));
    if (bodyBuffer && bodyBuffer.length > 0) {
      req.write(bodyBuffer);
    }
    req.end();
  });
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

function sendJson(res, statusCode, data) {
  const payload = JSON.stringify(data);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  });
  res.end(payload);
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
};

const server = http.createServer(async (req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  if (!customDestinationSet && req.headers && req.headers.host) {
    webhookConfig.destination = `${getPublicBaseUrl(req)}/api/webhook/ingest`;
  }

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, X-Webhook-Signature',
    });
    res.end();
    return;
  }

  // 1. SSE endpoint for real-time webhook updates in browser
  if (pathname === '/api/webhook/stream' && req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
      'Access-Control-Allow-Origin': '*',
    });
    res.write(`data: ${JSON.stringify({ type: 'connected', events: webhookEvents.slice(0, 10) })}\n\n`);
    sseClients.add(res);
    req.on('close', () => sseClients.delete(res));
    return;
  }

  // 2. Get current webhook state & history
  if (pathname === '/api/webhook/state' && req.method === 'GET') {
    sendJson(res, 200, {
      config: webhookConfig,
      events: webhookEvents,
    });
    return;
  }

  // 3. Official Sumo-API Webhook Receiver Endpoint (returns 204 as required by sumo-api.com)
  if (pathname === '/api/webhook/ingest' && req.method === 'POST') {
    try {
      const rawBody = await readRequestBody(req);
      const signature = req.headers['x-webhook-signature'] || '';
      const verified = verifySumoWebhookSignature(
        webhookConfig.secret,
        webhookConfig.destination,
        rawBody,
        signature
      );

      let parsed = {};
      try {
        parsed = JSON.parse(rawBody.toString('utf-8'));
      } catch {
        parsed = { raw: rawBody.toString('utf-8') };
      }

      const hookType = parsed.type || 'matchResults';
      // Clear API cache so fresh data is loaded immediately
      apiCache.clear();

      const eventObj = {
        id: `evt-${Date.now()}`,
        receivedAt: new Date().toISOString(),
        type: hookType,
        verified,
        signatureProvided: Boolean(signature),
        source: 'sumo-api.com Webhook POST',
        summary: `Webhook ${hookType} reçu (${verified ? 'Signature HMAC-SHA256 vérifiée' : 'Non signé / Test'})`,
        payload: parsed.payload || parsed,
      };

      broadcastWebhookEvent(eventObj);

      // sumo-api.com requires 204 No Content to acknowledge receipt
      res.writeHead(204);
      res.end();
    } catch (err) {
      sendJson(res, 400, { error: err.message });
    }
    return;
  }

  // 4. Simulate a Webhook locally (with real HMAC-SHA256 signature calculation!)
  if (pathname === '/api/webhook/simulate' && req.method === 'POST') {
    try {
      const bodyBuf = await readRequestBody(req);
      const reqData = bodyBuf.length ? JSON.parse(bodyBuf.toString('utf-8')) : {};
      const simType = reqData.type || 'matchResults';
      const bashoId = reqData.bashoId || '202609';
      const day = reqData.day || 9;

      const samplePayloads = {
        newBasho: {
          type: 'newBasho',
          payload: {
            bashoId: '202611',
            name: 'Kyushu Basho 2026',
            location: 'Fukuoka Kokusai Center',
            startDate: '2026-11-08T00:00:00Z',
            endDate: '2026-11-22T00:00:00Z',
          },
        },
        newMatches: {
          type: 'newMatches',
          payload: {
            bashoId,
            division: 'Makuuchi',
            day: Math.min(15, day + 1),
            torikumiCount: 21,
            featuredBout: 'Onosato (Y1E) vs Hakunofuji (K1E)',
          },
        },
        matchResults: {
          type: 'matchResults',
          payload: {
            bashoId,
            division: 'Makuuchi',
            day,
            updatedAtJST: '18:15 JST',
            highlights: [
              { matchNo: 21, winnerEn: 'Onosato', loserEn: 'Fujiryoga', kimarite: 'hikiotoshi' },
              { matchNo: 20, winnerEn: 'Aonishiki', loserEn: 'Yoshinofuji', kimarite: 'sukuinage' },
              { matchNo: 19, winnerEn: 'Atamifuji', loserEn: 'Takayasu', kimarite: 'oshitaoshi' },
            ],
          },
        },
        endBasho: {
          type: 'endBasho',
          payload: {
            bashoId: '202607',
            yusho: [{ type: 'Makuuchi', shikonaEn: 'Onosato', shikonaJp: '大の里　泰輝' }],
            specialPrizes: [
              { type: 'Shukun-sho', shikonaEn: 'Aonishiki' },
              { type: 'Kanto-sho', shikonaEn: 'Atamifuji' },
            ],
          },
        },
      };

      const simulatedBodyObj = samplePayloads[simType] || samplePayloads.matchResults;
      const simulatedRaw = Buffer.from(JSON.stringify(simulatedBodyObj), 'utf-8');

      // Generate genuine HMAC-SHA256 signature using the exact sumo-api.com algorithm
      const hmac = crypto.createHmac('sha256', webhookConfig.secret);
      hmac.update(Buffer.from(webhookConfig.destination, 'utf-8'));
      hmac.update(simulatedRaw);
      const signature = hmac.digest('hex');

      const verified = verifySumoWebhookSignature(
        webhookConfig.secret,
        webhookConfig.destination,
        simulatedRaw,
        signature
      );

      const summaries = {
        newBasho: 'Nouveau Banzuke publié : Kyushu Basho (202611) • 8–22 Nov 2026',
        newMatches: `Torikumi publié (${bashoId} • Jour ${Math.min(15, day + 1)}) — 21 combats Makuuchi programmés`,
        matchResults: `Résultats officiels 18:15 JST (${bashoId} • Jour ${day}) — Victoires d'Onosato, Aonishiki, Atamifuji`,
        endBasho: 'Fin de Basho (18:15 JST Senshuraku) — Yūshō & Sanshō attribués',
      };

      const eventObj = {
        id: `evt-${Date.now()}`,
        receivedAt: new Date().toISOString(),
        type: simType,
        verified,
        signature: signature.slice(0, 24) + '…',
        source: 'Webhook Test HMAC-SHA256',
        summary: summaries[simType] || `Webhook ${simType} traité`,
        payload: simulatedBodyObj.payload,
      };

      broadcastWebhookEvent(eventObj);
      sendJson(res, 200, { ok: true, event: eventObj });
    } catch (err) {
      sendJson(res, 500, { error: err.message });
    }
    return;
  }

  // 5. Proxy Webhook Subscription & Remote Test calls to https://www.sumo-api.com/api/webhook/*
  if (pathname === '/api/webhook/subscribe' || pathname === '/api/webhook/test') {
    try {
      const bodyBuf = await readRequestBody(req);
      if (bodyBuf.length > 0) {
        const incoming = JSON.parse(bodyBuf.toString('utf-8'));
        if (incoming.destination) customDestinationSet = true;
        webhookConfig = {
          ...webhookConfig,
          ...incoming,
          subscriptions: {
            ...webhookConfig.subscriptions,
            ...(incoming.subscriptions || {}),
          },
        };
      }

      const remotePath = pathname + (parsedUrl.search || '');
      try {
        const upstream = await forwardToSumoApi(remotePath, req.method, bodyBuf);
        sendJson(res, 200, {
          ok: true,
          upstreamStatus: upstream.statusCode,
          upstreamResponse: upstream.body.toString('utf-8'),
          config: webhookConfig,
        });
      } catch (upstreamErr) {
        sendJson(res, 200, {
          ok: true,
          note: 'Configuration enregistrée localement (connexion directe sumo-api effectuée côté client ou différée).',
          config: webhookConfig,
        });
      }
    } catch (err) {
      sendJson(res, 400, { error: err.message });
    }
    return;
  }

  // 6. Proxy GET requests to https://www.sumo-api.com/api/* with in-memory caching
  if (pathname.startsWith('/api/sumo/')) {
    const sumoPath = pathname.replace(/^\/api\/sumo/, '/api') + (parsedUrl.search || '');
    const cached = apiCache.get(sumoPath);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        'X-Cache': 'HIT',
        'Access-Control-Allow-Origin': '*',
      });
      res.end(cached.body);
      return;
    }

    try {
      const upstream = await forwardToSumoApi(sumoPath, 'GET');
      if (upstream.statusCode === 200) {
        apiCache.set(sumoPath, { timestamp: Date.now(), body: upstream.body });
      }
      res.writeHead(upstream.statusCode, {
        'Content-Type': 'application/json; charset=utf-8',
        'X-Cache': 'MISS',
        'Access-Control-Allow-Origin': '*',
      });
      res.end(upstream.body);
    } catch (err) {
      sendJson(res, 502, { error: 'Upstream sumo-api.com unreachable', details: err.message });
    }
    return;
  }

  // 7. Static files serving
  let filePath = pathname === '/' ? path.join(PUBLIC_DIR, 'index.html') : path.join(PUBLIC_DIR, pathname);
  // Prevent directory traversal
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      filePath = path.join(PUBLIC_DIR, 'index.html');
    }
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500);
        res.end('Internal Server Error');
        return;
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    });
  });
});

server.listen(PORT, () => {
  console.log(`SumoStats 2026 Server listening on port ${PORT} (${getPublicBaseUrl()})`);
});
