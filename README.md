# 🏮 SumoStats 2026 — Grand Sumo Live Torikumi, Banzuke, Hoshitori & Webhooks

*[🇬🇧 English](#-english-documentation) | [🇫🇷 Français](#-documentation-française)*

---

## 🇬🇧 English Documentation

Bilingual (**English 🇬🇧 / French 🇫🇷**) web application and **Progressive Web App (PWA)** dedicated to tracking the 6 official Grand Sumo tournaments (*Honbasho*) of the **2026** season in real time, powered by [sumo-api.com](https://www.sumo-api.com) and inspired by [sumostats.com](https://sumostats.com).

### ✨ Key Features

- **Full 2026 Calendar (6 Honbasho)**: Hatsu (January), Haru (March), Natsu (May), Nagoya (July), Aki (September), and Kyushu (November), with day-by-day navigation (**Days 1 to 15 / Senshuraku**).
- **Analytical Views & Smart Anti-Spoiler Mode**:
  1. **Daily Bouts (Torikumi)**: East vs. West balance, winning techniques (*Kimarite*), historical Head-to-Head (*H2H*) matchups, **Kachi-koshi yellow highlight** (8+ wins in *Makuuchi*/*Jūryō*, 4+ in lower divisions), and **Make-koshi red highlight** (8+ losses/absences in *Makuuchi*/*Jūryō*, 4+ in lower divisions).
  2. **Smart Anti-Spoiler Mode (`Spoilers: Hidden`)**:
     - Masks today's bout winners and *kimarite* while displaying each rikishi's **previous day (Day $N-1$) record** and **15-day Hoshitori progression dots** from Day 1 up to Day $N-1$.
     - Filters the **Head-to-Head (H2H)** modal to only display and tally official bouts up to **tournament $N-1$**, preventing any spoiler from the current tournament.
     - Highlights in yellow the names of rikishis who have already secured their **Kachi-koshi**, and in red those with **Make-koshi** (both when spoilers are shown and when masked).
  3. **Cumulative Tournament Standings (Yūshō Race)**: Live top-3 podium, filters (*Yūshō Race / Sanyaku / Kachi-koshi / Make-koshi*), win percentages, and 15-day progression strip.
- **Sumo-API Webhooks Center (`HMAC-SHA256` + Live SSE Stream)**:
  - Official `POST /api/webhook/ingest` receiver verifying the cryptographic `X-Webhook-Signature` header.
  - Instant real-time push updates to connected browsers via **Server-Sent Events (`GET /api/webhook/stream`)**.
- **Native iPhone / iOS Support (PWA)**:
  - Installable on the iPhone Home Screen (*"Add to Home Screen"*) in full-screen `standalone` mode with Dynamic Island support (`viewport-fit=cover`) and built-in QR Code sharing.

### 🚀 Local Execution

No heavy external dependencies required (high-performance native Node.js server):

```bash
npm start
# Server available at http://localhost:8080
```

### ☁️ Google Cloud Run Deployment

```bash
gcloud run deploy sumostats \
  --source . \
  --region europe-west9 \
  --allow-unauthenticated \
  --min-instances 1 \
  --max-instances 3 \
  --port 8080
```

---

## 🇫🇷 Documentation Française

Application web bilingue (**Français 🇫🇷 / Anglais 🇬🇧**) et **Progressive Web App (PWA)** dédiée au suivi en temps réel des 6 tournois officiels de Grand Sumo (*Honbasho*) de la saison **2026**, propulsée par [sumo-api.com](https://www.sumo-api.com) et inspirée de [sumostats.com](https://sumostats.com).

### ✨ Fonctionnalités Principales

- **Calendrier 2026 Complet (6 Honbasho)** : Hatsu (Janvier), Haru (Mars), Natsu (Mai), Nagoya (Juillet), Aki (Septembre) et Kyushu (Novembre), avec navigation jour par jour (**Jours 1 à 15 / Senshuraku**) et calcul dynamique du jour en cours et des résultats disponibles.
- **Vues Analytiques & Mode Anti-Spoiler Intelligent** :
  1. **Combats du Jour (Torikumi)** : Résultats Est vs Ouest, techniques victorieuses (*Kimarite*), face-à-face historique (*Head-to-Head*), **surlignage en jaune des rikishis en Kachi-koshi** ($\ge 8$ victoires en *Makuuchi*/*Jūryō*, $\ge 4$ dans les autres divisions) et **surlignage en rouge des rikishis en Make-koshi** ($\ge 8$ défaites/absences en *Makuuchi*/*Jūryō*, $\ge 4$ dans les autres divisions).
  2. **Mode Anti-Spoiler (`Spoilers : Masqués`)** :
     - Masque les vainqueurs et *kimarite* du jour tout en affichant pour chaque rikishi **la situation de la veille (Jour $N-1$)** : son bilan `(V-D)` ainsi que la ligne de ronds (*Hoshitori*) indiquant sa progression depuis le Jour 1 jusqu'au Jour $N-1$.
     - Dans la fenêtre **Face-à-Face (H2H)**, exclut les résultats du tournoi en cours et n'affiche que les confrontations jusqu'au **tournoi $N-1$** (avec recalcul automatique du bilan de carrière).
     - Surligne en jaune le nom des rikishis ayant obtenu leur **Kachi-koshi** et en rouge ceux en **Make-koshi** (dans tous les cas, que les spoilers soient affichés ou masqués).
  3. **Classement Cumulé du Tournoi (Course au Yūshō)** : Podium en temps réel, filtres *Course au Yūshō / Sanyaku / Kachi-koshi / Make-koshi*, pourcentage de victoires et frise de progression des 15 jours.
- **Centre Webhooks Sumo-API (`HMAC-SHA256` + Flux SSE)** :
  - Récepteur officiel `POST /api/webhook/ingest` vérifiant la signature cryptographique `X-Webhook-Signature`.
  - Diffusion instantanée aux navigateurs connectés via **Server-Sent Events (`GET /api/webhook/stream`)**.
- **Support iPhone / iOS Natif (PWA)** :
  - Installable sur l'écran d'accueil iPhone (*"Sur l'écran d'accueil"*) en mode plein écran (`standalone`) avec prise en charge de la Dynamic Island (`viewport-fit=cover`) et QR Code intégré.

### 🚀 Exécution Locale

Aucune dépendance externe lourde n'est requise (serveur Node.js natif haute performance) :

```bash
npm start
# Serveur disponible sur http://localhost:8080
```

### ☁️ Déploiement sur Google Cloud Run

```bash
gcloud run deploy sumostats \
  --source . \
  --region europe-west9 \
  --allow-unauthenticated \
  --min-instances 1 \
  --max-instances 3 \
  --port 8080
```
