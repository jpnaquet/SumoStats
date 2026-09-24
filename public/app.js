/**
 * SumoStats 2026 — Client Application (FR / EN Bilingual)
 * Uses https://www.sumo-api.com REST APIs & Webhooks
 * Inspired by https://sumostats.com
 */

const I18N = {
  fr: {
    docTitle: 'SumoStats 2026 — Résultats & Statistiques des Tournois Grand Sumo (Sumo-API)',
    brandSubtitle: 'Base de données Grand Sumo • Torikumi & Webhooks Live',
    spoilerShown: 'Spoilers : Affichés',
    spoilerHidden: 'Spoilers : Masqués',
    spoilerBtnTitle: 'Masquer ou afficher les vainqueurs des combats',
    webhookBtnLabel: 'Webhooks Sumo-API',
    webhookBtnTitle: 'Gérer et tester les Webhooks Sumo-API',
    themeBtnTitle: 'Basculer le thème Sombre / Papier Washi',
    calendarKicker: 'CALENDRIER OFFICIEL HONBASHO 2026 • SUMO-API.COM',
    calendarTitle: "Tournois de l'année 2026 & Sélection par Jour (1 à 15)",
    calendarDesc:
      'Cliquez sur un numéro de jour (<strong>1</strong> <em>Shonichi</em> à <strong>15</strong> <em>Senshuraku</em>) sur la ligne d’un tournoi pour charger instantanément tous les combats et statistiques du jour.',
    legendSelected: 'Jour sélectionné',
    legendAvailable: 'Résultats disponibles',
    legendSpecial: 'J1 / J8 / J15',
    prevDayBtn: '← Jour préc.',
    prevDayTitle: 'Jour précédent (Flèche gauche)',
    nextDayBtn: 'Jour suiv. →',
    nextDayTitle: 'Jour suivant (Flèche droite)',
    kpiBoutsLabel: 'Combats du jour',
    kpiBalanceLabel: 'Balance Est (東) vs Ouest (西)',
    kpiKimariteLabel: 'Kimarite (Techniques) dominants',
    kpiLeaderLabel: 'En tête du Basho (Makuuchi)',
    searchPlaceholder: 'Filtrer par lutteur (ex: Onosato, Kirishima) ou kimarite…',
    sortBtnTitle: "Inverser l'ordre d'affichage des combats",
    sortOrderTopFirst: 'Ordre : Musubi no Ichiban ↓',
    sortOrderBoutOneFirst: 'Ordre : Combat #1 ↑',
    headerEastTag: '東 EST (HIGASHI)',
    headerEastHint: 'Hoshitori 15j • Bilan • Rang & Shikona',
    headerCenterTag: 'COMBAT & KIMARITE',
    headerWestHint: 'Rang & Shikona • Bilan • Hoshitori 15j',
    headerWestTag: '西 OUEST (NISHI)',
    // Standings Section (Section 3)
    standingsKicker: 'CLASSEMENT CUMULÉ DU TOURNOI • COURSE AU YŪSHŌ',
    standingsDesc:
      'Classement établi selon le nombre de victoires cumulées depuis le Jour 1 du tournoi jusqu’au jour sélectionné (départage par défaites puis rang Banzuke officiel).',
    standingsTitleDynamic: (bashoName, month, div, day) =>
      `Classement des Rikishis (${div}) — ${bashoName} (${month}) • Jour 1 → Jour ${day}`,
    stFilterAll: 'Tous les Rikishis',
    stFilterTop10: '🏆 Course au Yūshō (Top 10)',
    stFilterKk: 'Kachi-koshi (Majorité V)',
    stFilterMk: 'Make-koshi (Majorité D)',
    stFilterSanyaku: 'Sanyaku (Y / O / S / K)',
    stColPos: 'Pos.',
    stColRikishi: 'Rikishi (Lutteur)',
    stColRank: 'Rang Banzuke',
    stColRecord: 'Bilan (V - D)',
    stColStatus: 'Statut',
    stColWinrate: '% Victoires',
    stColHoshitori: 'Progression Jour 1 → Jour sélectionné (Hoshitori)',
    stColKimarite: 'Kimarite favori',
    stLeaderBadge: '🏆 Leader Yūshō',
    stCoLeaderBadge: '🏆 Co-Leader',
    stKkBadge: '✓ Kachi-koshi',
    stMkBadge: '✗ Make-koshi',
    stInPlayBadge: 'En course',
    stNoStandings: 'Aucune donnée de classement disponible pour ce tournoi/jour.',
    stWinsLabel: 'victoires',
    // Modals & Webhooks
    h2hModalKicker: 'FACE-À-FACE HISTORIQUE • SUMO-API',
    whModalKicker: 'TEMPS RÉEL & SIGNATURES HMAC-SHA256',
    whModalTitle: 'Centre Webhooks Sumo-API.com',
    whExplainer:
      "L'API <strong>sumo-api.com</strong> permet de s'abonner à 4 événements push (<code>newBasho</code>, <code>newMatches</code>, <code>matchResults</code> à 18h15 JST, et <code>endBasho</code>). Notre serveur vérifie l'en-tête cryptographique <code>X-Webhook-Signature</code> (HMAC-SHA256) et répond <code>204 No Content</code>.",
    whSimTitle: 'Tester / Simuler un événement Webhook en direct',
    whSimSub:
      "Déclenchez un événement signé HMAC-SHA256 pour tester la réception temps réel (SSE) et la mise à jour instantanée de l'application :",
    whSimMatchResults: '⚡ Simuler <code>matchResults</code> (18:15 JST)',
    whSimNewMatches: '📋 Simuler <code>newMatches</code> (Torikumi J+1)',
    whSimNewBasho: '🏮 Simuler <code>newBasho</code> (Kyushu 202611)',
    whSimEndBasho: '🏆 Simuler <code>endBasho</code> (Yūshō & Sanshō)',
    whSubFormTitle: "Configuration d'abonnement Sumo-API (<code>POST /api/webhook/subscribe</code>)",
    whNameLabel: 'Identifiant unique (<code>name</code>)',
    whDestLabel: 'URL de destination (<code>destination</code>)',
    whSecretLabel: 'Clé secrète HMAC-SHA256 (<code>secret</code>)',
    whSaveBtn: "Enregistrer & S'abonner sur sumo-api.com",
    whSaving: 'Envoi à sumo-api.com…',
    whSavedOk: '✓ Abonnement enregistré',
    whSavedLocal: '✓ Sauvegardé localement',
    whLogTitle: 'Journal des événements reçus (Flux SSE en direct)',
    whConnectedBadge: '● Connecté',
    whHmacOk: '🔒 HMAC-SHA256 OK',
    whUnsigned: 'Non signé',
    whToastTitle: '⚡ WEBHOOK SUMO-API REÇU :',
    footerPoweredBy:
      '<strong>SumoStats 2026</strong> • Propulsé par <a href="https://www.sumo-api.com" target="_blank" rel="noreferrer">sumo-api.com</a> &amp; inspiré par <a href="https://sumostats.com" target="_blank" rel="noreferrer">sumostats.com</a>',
    footerShortcuts:
      'Astuce : Utilisez les touches <kbd>←</kbd> et <kbd>→</kbd> du clavier pour naviguer entre les jours 1 à 15.',
    // Dynamic strings
    dayWord: 'Jour',
    dayOf15: (d) => `Jour ${d} / 15`,
    daySpecial1: 'Shonichi (初日 • Jour d’ouverture)',
    daySpecial8: 'Nakabi (中日 • Milieu du tournoi)',
    daySpecial15: 'Senshuraku (千秋楽 • Jour final)',
    dayRegular: (d) => `Jour ${d} sur 15`,
    loadingTorikumi: (bashoId, div, day) =>
      `Chargement du Torikumi <strong>${bashoId}</strong> (${div}) — <strong>Jour ${day}</strong> depuis sumo-api.com…`,
    boutsCount: (n) => (n > 1 ? `${n} combats` : `${n} combat`),
    divisionDaySub: (div, d) => `Division ${div} • Jour ${d}`,
    eastScore: (w, pct) => `Est: ${w} (${pct}%)`,
    westScore: (w, pct) => `Ouest: ${w} (${pct}%)`,
    kimariteVarietyCount: (n) => `${n} techniques différentes utilisées`,
    scheduledBouts: 'Combats programmés',
    notPlayedYet: 'Non disputé',
    waitingForResults: 'En attente du Torikumi / Résultats',
    startOfBasho: 'Début de tournoi',
    afterDay: (d) => `Après le Jour ${d}`,
    ongoingOrBanzuke: 'En cours / Banzuke',
    noBoutsPublished: (name, id, day, div, maxDay = 11) =>
      `Aucun combat publié sur sumo-api.com pour <strong>${name} (${id}) — Jour ${day}</strong> (${div}).<br/><span style="font-size:0.82rem;opacity:0.8">Le Torikumi est publié chaque jour vers 18h00 JST pendant le tournoi. Essayez un tournoi terminé (ex: Janvier 202601 à Juillet 202607) ou les jours 1 à ${maxDay} de Septembre 202609 !</span>`,
    noFilterMatch: (q) => `Aucun combat ne correspond au filtre « <strong>${q}</strong> ».`,
    boutNumber: (n) => `COMBAT #${n}`,
    viewH2h: 'Voir H2H ↗',
    clickForH2h: (e, w) => `Cliquez pour voir le Face-à-Face (H2H) complet entre ${e} et ${w}`,
    shiroboshiWin: 'Shiroboshi (Victoire)',
    kuroboshiLoss: 'Kuroboshi (Défaite)',
    upcomingBout: 'À disputer',
    hoshitoriUpcoming: (d) => `J${d}: À venir`,
    hoshitoriWin: (d, opp, k) => `J${d}: Victoire vs ${opp} (${k})`,
    hoshitoriLoss: (d, opp, k) => `J${d}: Défaite vs ${opp} (${k})`,
    hoshitoriAbsent: (d) => `J${d}: Absent (Kyūjō)`,
    loadingH2h: "Chargement de l'historique des confrontations depuis sumo-api.com…",
    careerRecord: (total) => `Bilan en carrière (${total} confrontations)`,
    winsShort: 'vict.',
    recentOfficialBouts: 'Derniers combats officiels enregistrés',
    beatsWord: 'bat',
    firstOfficialBout: 'Première confrontation officielle.',
    h2hError: (msg) => `Impossible de charger l'historique H2H (${msg}).`,
    yushoWinnerTitle: 'Vainqueur Yūshō Makuuchi',
  },
  en: {
    docTitle: 'SumoStats 2026 — Grand Sumo Tournament Match Statistics & Results (Sumo-API)',
    brandSubtitle: 'Grand Sumo Database • Live Torikumi & Webhooks',
    spoilerShown: 'Spoilers: Shown',
    spoilerHidden: 'Spoilers: Hidden',
    spoilerBtnTitle: 'Hide or show match winners',
    webhookBtnLabel: 'Sumo-API Webhooks',
    webhookBtnTitle: 'Manage and test Sumo-API Webhooks',
    themeBtnTitle: 'Toggle Dark Slate / Washi Paper theme',
    calendarKicker: 'OFFICIAL 2026 HONBASHO CALENDAR • SUMO-API.COM',
    calendarTitle: '2026 Grand Sumo Tournaments & Day Selector (1 to 15)',
    calendarDesc:
      'Click on any day number (<strong>1</strong> <em>Shonichi</em> to <strong>15</strong> <em>Senshuraku</em>) on a tournament row to immediately load all bouts and statistics for that day.',
    legendSelected: 'Selected Day',
    legendAvailable: 'Results Available',
    legendSpecial: 'D1 / D8 / D15',
    prevDayBtn: '← Prev Day',
    prevDayTitle: 'Previous Day (Left Arrow)',
    nextDayBtn: 'Next Day →',
    nextDayTitle: 'Next Day (Right Arrow)',
    kpiBoutsLabel: 'Bouts of the Day',
    kpiBalanceLabel: 'East (東) vs West (西) Balance',
    kpiKimariteLabel: 'Top Kimarite (Winning Moves)',
    kpiLeaderLabel: 'Basho Leader (Makuuchi)',
    searchPlaceholder: 'Filter by rikishi (e.g. Onosato, Kirishima) or kimarite…',
    sortBtnTitle: 'Reverse bout display order',
    sortOrderTopFirst: 'Order: Musubi no Ichiban ↓',
    sortOrderBoutOneFirst: 'Order: Bout #1 ↑',
    headerEastTag: '東 EAST (HIGASHI)',
    headerEastHint: '15d Hoshitori • Record • Rank & Shikona',
    headerCenterTag: 'BOUT & KIMARITE',
    headerWestHint: 'Rank & Shikona • Record • 15d Hoshitori',
    headerWestTag: '西 WEST (NISHI)',
    // Standings Section (Section 3)
    standingsKicker: 'CUMULATIVE TOURNAMENT STANDINGS • YŪSHŌ RACE',
    standingsDesc:
      'Leaderboard ranked by cumulative wins from Day 1 of the tournament through the selected day (tie-breaker: fewest losses, then official Banzuke rank).',
    standingsTitleDynamic: (bashoName, month, div, day) =>
      `Rikishi Standings (${div}) — ${bashoName} (${month}) • Day 1 → Day ${day}`,
    stFilterAll: 'All Rikishi',
    stFilterTop10: '🏆 Yūshō Race (Top 10)',
    stFilterKk: 'Kachi-koshi (Majority W)',
    stFilterMk: 'Make-koshi (Majority L)',
    stFilterSanyaku: 'Sanyaku (Y / O / S / K)',
    stColPos: 'Pos.',
    stColRikishi: 'Rikishi (Wrestler)',
    stColRank: 'Banzuke Rank',
    stColRecord: 'Record (W - L)',
    stColStatus: 'Status',
    stColWinrate: 'Win %',
    stColHoshitori: 'Day 1 → Selected Day Progression (Hoshitori)',
    stColKimarite: 'Top Kimarite',
    stLeaderBadge: '🏆 Yūshō Leader',
    stCoLeaderBadge: '🏆 Co-Leader',
    stKkBadge: '✓ Kachi-koshi',
    stMkBadge: '✗ Make-koshi',
    stInPlayBadge: 'Active',
    stNoStandings: 'No standings data available for this tournament/day.',
    stWinsLabel: 'wins',
    // Modals & Webhooks
    h2hModalKicker: 'HEAD-TO-HEAD HISTORY • SUMO-API',
    whModalKicker: 'REAL-TIME & HMAC-SHA256 SIGNATURES',
    whModalTitle: 'Sumo-API.com Webhooks Center',
    whExplainer:
      '<strong>sumo-api.com</strong> supports 4 push webhook events (<code>newBasho</code>, <code>newMatches</code>, <code>matchResults</code> at 18:15 JST, and <code>endBasho</code>). Our server verifies the cryptographic <code>X-Webhook-Signature</code> header (HMAC-SHA256) and returns <code>204 No Content</code>.',
    whSimTitle: 'Test / Simulate a Live Webhook Event',
    whSimSub:
      'Trigger an HMAC-SHA256 signed event to test real-time Server-Sent Events (SSE) delivery and instant UI updates:',
    whSimMatchResults: '⚡ Simulate <code>matchResults</code> (18:15 JST)',
    whSimNewMatches: '📋 Simulate <code>newMatches</code> (Day+1 Torikumi)',
    whSimNewBasho: '🏮 Simulate <code>newBasho</code> (Kyushu 202611)',
    whSimEndBasho: '🏆 Simulate <code>endBasho</code> (Yūshō & Sanshō)',
    whSubFormTitle: 'Sumo-API Subscription Setup (<code>POST /api/webhook/subscribe</code>)',
    whNameLabel: 'Unique Identifier (<code>name</code>)',
    whDestLabel: 'Destination Endpoint URL (<code>destination</code>)',
    whSecretLabel: 'HMAC-SHA256 Secret Key (<code>secret</code>)',
    whSaveBtn: 'Save & Subscribe on sumo-api.com',
    whSaving: 'Sending to sumo-api.com…',
    whSavedOk: '✓ Subscription saved',
    whSavedLocal: '✓ Saved locally',
    whLogTitle: 'Received Webhook Events Log (Live SSE Stream)',
    whConnectedBadge: '● Connected',
    whHmacOk: '🔒 HMAC-SHA256 OK',
    whUnsigned: 'Unsigned',
    whToastTitle: '⚡ SUMO-API WEBHOOK RECEIVED:',
    footerPoweredBy:
      '<strong>SumoStats 2026</strong> • Powered by <a href="https://www.sumo-api.com" target="_blank" rel="noreferrer">sumo-api.com</a> &amp; inspired by <a href="https://sumostats.com" target="_blank" rel="noreferrer">sumostats.com</a>',
    footerShortcuts:
      'Tip: Use your keyboard <kbd>←</kbd> and <kbd>→</kbd> arrow keys to switch between days 1 to 15.',
    // Dynamic strings
    dayWord: 'Day',
    dayOf15: (d) => `Day ${d} / 15`,
    daySpecial1: 'Shonichi (初日 • Opening Day)',
    daySpecial8: 'Nakabi (中日 • Middle Day)',
    daySpecial15: 'Senshuraku (千秋楽 • Final Day)',
    dayRegular: (d) => `Day ${d} of 15`,
    loadingTorikumi: (bashoId, div, day) =>
      `Loading Torikumi <strong>${bashoId}</strong> (${div}) — <strong>Day ${day}</strong> from sumo-api.com…`,
    boutsCount: (n) => (n === 1 ? '1 bout' : `${n} bouts`),
    divisionDaySub: (div, d) => `${div} Division • Day ${d}`,
    eastScore: (w, pct) => `East: ${w} (${pct}%)`,
    westScore: (w, pct) => `West: ${w} (${pct}%)`,
    kimariteVarietyCount: (n) => `${n} distinct techniques used`,
    scheduledBouts: 'Scheduled bouts',
    notPlayedYet: 'Not played yet',
    waitingForResults: 'Awaiting Torikumi / Results',
    startOfBasho: 'Tournament start',
    afterDay: (d) => `After Day ${d}`,
    ongoingOrBanzuke: 'Ongoing / Banzuke',
    noBoutsPublished: (name, id, day, div, maxDay = 11) =>
      `No bouts published on sumo-api.com for <strong>${name} (${id}) — Day ${day}</strong> (${div}).<br/><span style="font-size:0.82rem;opacity:0.8">Torikumi is released daily around 18:00 JST during the tournament. Try a completed basho (Jan 202601 – Jul 202607) or Days 1 to ${maxDay} of September 202609!</span>`,
    noFilterMatch: (q) => `No bouts match the filter “<strong>${q}</strong>”.`,
    boutNumber: (n) => `BOUT #${n}`,
    viewH2h: 'View H2H ↗',
    clickForH2h: (e, w) => `Click to view full Head-to-Head (H2H) history between ${e} and ${w}`,
    shiroboshiWin: 'Shiroboshi (Win)',
    kuroboshiLoss: 'Kuroboshi (Loss)',
    upcomingBout: 'Upcoming',
    hoshitoriUpcoming: (d) => `D${d}: Upcoming`,
    hoshitoriWin: (d, opp, k) => `D${d}: Win vs ${opp} (${k})`,
    hoshitoriLoss: (d, opp, k) => `D${d}: Loss vs ${opp} (${k})`,
    hoshitoriAbsent: (d) => `D${d}: Absent (Kyūjō)`,
    loadingH2h: 'Loading head-to-head matchup history from sumo-api.com…',
    careerRecord: (total) => `Career Head-to-Head (${total} bouts)`,
    winsShort: 'wins',
    recentOfficialBouts: 'Recent Official Bouts',
    beatsWord: 'def.',
    firstOfficialBout: 'First official meeting.',
    h2hError: (msg) => `Unable to load H2H history (${msg}).`,
    yushoWinnerTitle: 'Makuuchi Yūshō Champion',
  },
};

/**
 * Compute dynamic tournament status, current day (1..15), and baseline available results day
 * based on Tokyo calendar date & hour (JST, UTC+9).
 */
function computeBashoDynamicTiming(startDateStr, endDateStr, upcomingLabel) {
  const nowMs = Date.now();
  const jstDate = new Date(nowMs + 9 * 3600 * 1000);
  const jstMidnightMs = Date.UTC(
    jstDate.getUTCFullYear(),
    jstDate.getUTCMonth(),
    jstDate.getUTCDate()
  );
  const jstHour = jstDate.getUTCHours();

  const startParts = startDateStr.split('-').map(Number);
  const endParts = endDateStr.split('-').map(Number);
  const startMs = Date.UTC(startParts[0], startParts[1] - 1, startParts[2]);
  const endMs = Date.UTC(endParts[0], endParts[1] - 1, endParts[2]);

  if (jstMidnightMs < startMs) {
    return {
      status: 'upcoming',
      currentDay: 0,
      maxAvailableDay: 0,
      statusLabel: upcomingLabel || { fr: 'À venir', en: 'Upcoming' },
    };
  }

  if (jstMidnightMs > endMs) {
    return {
      status: 'completed',
      currentDay: 15,
      maxAvailableDay: 15,
      statusLabel: { fr: 'Terminé', en: 'Completed' },
    };
  }

  const currentDay = Math.max(1, Math.min(15, Math.round((jstMidnightMs - startMs) / 86400000) + 1));
  // On Day N, at least Day (N - 1) has completed results, or Day N if Tokyo time >= 18:00 JST (or once API confirms Day N results)
  const maxAvailableDay = jstHour >= 18 ? currentDay : Math.max(1, currentDay - 1);

  return {
    status: 'live',
    currentDay,
    maxAvailableDay,
    statusLabel: {
      fr: `En cours • J${currentDay}`,
      en: `Ongoing • D${currentDay}`,
    },
  };
}

const BASHO_2026_CALENDAR = [
  {
    bashoId: '202601',
    codeLabel: '2026.01',
    name: 'Hatsu Basho',
    month: { fr: 'Janvier 2026', en: 'January 2026' },
    kanji: '初場所',
    city: 'Tokyo',
    venue: 'Ryōgoku Kokugikan',
    startDate: '2026-01-11',
    endDate: '2026-01-25',
    defaultYusho: { shikonaEn: 'Aonishiki', shikonaJp: '安青錦　新大' },
  },
  {
    bashoId: '202603',
    codeLabel: '2026.03',
    name: 'Haru Basho',
    month: { fr: 'Mars 2026', en: 'March 2026' },
    kanji: '春場所',
    city: 'Osaka',
    venue: 'EDION Arena Osaka',
    startDate: '2026-03-08',
    endDate: '2026-03-22',
    defaultYusho: null,
  },
  {
    bashoId: '202605',
    codeLabel: '2026.05',
    name: 'Natsu Basho',
    month: { fr: 'Mai 2026', en: 'May 2026' },
    kanji: '夏場所',
    city: 'Tokyo',
    venue: 'Ryōgoku Kokugikan',
    startDate: '2026-05-10',
    endDate: '2026-05-24',
    defaultYusho: null,
  },
  {
    bashoId: '202607',
    codeLabel: '2026.07',
    name: 'Nagoya Basho',
    month: { fr: 'Juillet 2026', en: 'July 2026' },
    kanji: '名古屋場所',
    city: 'Nagoya',
    venue: 'IG Arena Nagoya',
    startDate: '2026-07-12',
    endDate: '2026-07-26',
    defaultYusho: null,
  },
  {
    bashoId: '202609',
    codeLabel: '2026.09',
    name: 'Aki Basho',
    month: { fr: 'Septembre 2026', en: 'September 2026' },
    kanji: '秋場所',
    city: 'Tokyo',
    venue: 'Ryōgoku Kokugikan',
    startDate: '2026-09-13',
    endDate: '2026-09-27',
    defaultYusho: null,
  },
  {
    bashoId: '202611',
    codeLabel: '2026.11',
    name: 'Kyushu Basho',
    month: { fr: 'Novembre 2026', en: 'November 2026' },
    kanji: '九州場所',
    city: 'Fukuoka',
    venue: 'Fukuoka Kokusai Center',
    startDate: '2026-11-08',
    endDate: '2026-11-22',
    upcomingLabel: { fr: 'À venir (Nov.)', en: 'Upcoming (Nov.)' },
    defaultYusho: null,
  },
].map((basho) => ({
  ...basho,
  ...computeBashoDynamicTiming(basho.startDate, basho.endDate, basho.upcomingLabel),
}));

const KIMARITE_I18N = {
  fr: {
    yorikiri: 'Yorikiri (寄り切り) — Expulsion frontale par prise de mawashi',
    oshidashi: 'Oshidashi (押し出し) — Expulsion par poussée ouverte sans saisir le mawashi',
    hatakikomi: 'Hatakikomi (叩き込み) — Rabattement vers le sol en reculant',
    uwatenage: 'Uwatenage (上手投げ) — Projection par-dessus le bras avec prise extérieure',
    shitatenage: 'Shitatenage (下手投げ) — Projection avec prise intérieure sous le bras',
    tsukiotoshi: 'Tsukiotoshi (突き落とし) — Renversement latéral par poussée du haut du corps',
    yoritaoshi: 'Yoritaoshi (寄り倒し) — Écrasement hors du cercle en gardant le mawashi',
    oshitaoshi: 'Oshitaoshi (押し倒し) — Renversement au sol par poussée puissante',
    hikiotoshi: 'Hikiotoshi (引き落とし) — Tirage vers l’avant provoquant la chute',
    sukuinage: 'Sukuinage (掬い投げ) — Projection en cuillère sans prise de mawashi',
    okuridashi: 'Okuridashi (送り出し) — Expulsion par poussée dans le dos',
    katasukashi: 'Katasukashi (肩透かし) — Esquive sous l’épaule et tirage vers le bas',
    tsukidashi: 'Tsukidashi (突き出し) — Expulsion par série de poussées des mains (tsuppari)',
    kotenage: 'Kotenage (小手投げ) — Projection par clé de bras autour du coude',
    watashikomi: 'Watashikomi (渡し込み) — Saisie de la jambe et poussée vers l’extérieur',
    tottari: 'Tottari (とったり) — Contrôle des deux mains sur le bras adverse',
  },
  en: {
    yorikiri: 'Yorikiri (寄り切り) — Frontal force-out while gripping the mawashi',
    oshidashi: 'Oshidashi (押し出し) — Frontal push-out without holding the mawashi',
    hatakikomi: 'Hatakikomi (叩き込み) — Slap-down while stepping back or to the side',
    uwatenage: 'Uwatenage (上手投げ) — Overarm throw with outer mawashi grip',
    shitatenage: 'Shitatenage (下手投げ) — Underarm throw with inner mawashi grip',
    tsukiotoshi: 'Tsukiotoshi (突き落とし) — Thrust-down to the side from the upper body',
    yoritaoshi: 'Yoritaoshi (寄り倒し) — Frontal crush-out while maintaining belt grip',
    oshitaoshi: 'Oshitaoshi (押し倒し) — Frontal push-down to the clay',
    hikiotoshi: 'Hikiotoshi (引き落とし) — Hand pull-down forward to the dohyo',
    sukuinage: 'Sukuinage (掬い投げ) — Beltless arm scoop throw',
    okuridashi: 'Okuridashi (送り出し) — Rear push-out from behind the opponent',
    katasukashi: 'Katasukashi (肩透かし) — Under-shoulder swing-down',
    tsukidashi: 'Tsukidashi (突き出し) — Frontal thrust-out with rapid hand thrusts',
    kotenage: 'Kotenage (小手投げ) — Armlock throw wrapping the opponent’s elbow',
    watashikomi: 'Watashikomi (渡し込み) — Thigh-grabbing push-down',
    tottari: 'Tottari (とったり) — Two-handed arm-bar throw',
  },
};

const defaultActiveBasho =
  BASHO_2026_CALENDAR.find((b) => b.status === 'live') ||
  BASHO_2026_CALENDAR.slice().reverse().find((b) => b.status === 'completed') ||
  BASHO_2026_CALENDAR[4];

// Application State
const state = {
  lang: localStorage.getItem('sumostats_lang') === 'en' ? 'en' : 'fr',
  selectedBashoId: defaultActiveBasho.bashoId,
  selectedDay: defaultActiveBasho.maxAvailableDay || defaultActiveBasho.currentDay || 12,
  userChangedDayManually: false,
  selectedDivision: 'Makuuchi',
  standingsFilter: 'all', // 'all' | 'top10' | 'kk' | 'mk' | 'sanyaku'
  reverseBoutOrder: true,
  spoilersMasked: false,
  searchQuery: '',
  bashoSummaryMap: {},
  banzukeCache: {},
  currentTorikumi: [],
  currentBashoData: null,
  webhookEvents: [],
};

function t() {
  return I18N[state.lang] || I18N.fr;
}

// Fallback dataset from live sumo-api.com responses in case of offline environment
const FALLBACK_TORIKUMI_202609_8 = [
  { matchNo: 21, eastId: 8850, eastShikona: 'Onosato', eastRank: 'Yokozuna 1 East', westId: 37, westShikona: 'Takanosho', westRank: 'Maegashira 4 West', kimarite: 'yorikiri', winnerId: 8850, winnerEn: 'Onosato', winnerJp: '大の里' },
  { matchNo: 20, eastId: 7, eastShikona: 'Kirishima', eastRank: 'Ozeki 1 East', westId: 71, westShikona: 'Churanoumi', westRank: 'Maegashira 3 West', kimarite: 'oshitaoshi', winnerId: 71, winnerEn: 'Churanoumi', winnerJp: '美ノ海' },
  { matchNo: 19, eastId: 8854, eastShikona: 'Aonishiki', eastRank: 'Ozeki 2 East', westId: 9, westShikona: 'Daieisho', westRank: 'Sekiwake 1 West', kimarite: 'yorikiri', winnerId: 8854, winnerEn: 'Aonishiki', winnerJp: '安青錦' },
  { matchNo: 18, eastId: 74, eastShikona: 'Atamifuji', eastRank: 'Sekiwake 1 East', westId: 112, westShikona: 'Kotoeiho', westRank: 'Maegashira 2 West', kimarite: 'tsukiotoshi', winnerId: 74, winnerEn: 'Atamifuji', winnerJp: '熱海富士' },
  { matchNo: 17, eastId: 3, eastShikona: 'Hakunofuji', eastRank: 'Komusubi 1 East', westId: 20, westShikona: 'Kotozakura', westRank: 'Ozeki 1 West', kimarite: 'oshidashi', winnerId: 3, winnerEn: 'Hakunofuji', winnerJp: '伯乃富士' },
  { matchNo: 16, eastId: 8, eastShikona: 'Kotoshoho', eastRank: 'Maegashira 1 East', westId: 8857, westShikona: 'Yoshinofuji', westRank: 'Komusubi 1 West', kimarite: 'uwatenage', winnerId: 8857, winnerEn: 'Yoshinofuji', winnerJp: '義ノ富士' },
  { matchNo: 15, eastId: 44, eastShikona: 'Takayasu', eastRank: 'Maegashira 2 East', westId: 615, westShikona: 'Fujinokawa', westRank: 'Maegashira 1 West', kimarite: 'oshidashi', winnerId: 615, winnerEn: 'Fujinokawa', winnerJp: '藤ノ川' },
  { matchNo: 4, eastId: 49, eastShikona: 'Shonannoumi', eastRank: 'Maegashira 17 East', westId: 607, westShikona: 'Asahakuryu', westRank: 'Maegashira 12 West', kimarite: 'yorikiri', winnerId: 49, winnerEn: 'Shonannoumi', winnerJp: '湘南乃海' },
  { matchNo: 3, eastId: 164, eastShikona: 'Asakoryu', eastRank: 'Maegashira 13 East', westId: 39, westShikona: 'Chiyoshoma', westRank: 'Maegashira 14 West', kimarite: 'yorikiri', winnerId: 164, winnerEn: 'Asakoryu', winnerJp: '朝紅龍' },
  { matchNo: 2, eastId: 21, eastShikona: 'Tobizaru', eastRank: 'Maegashira 14 East', westId: 83, westShikona: 'Tokihayate', westRank: 'Maegashira 15 West', kimarite: 'yoritaoshi', winnerId: 83, winnerEn: 'Tokihayate', winnerJp: '時疾風' },
  { matchNo: 1, eastId: 26, eastShikona: 'Mitakeumi', eastRank: 'Juryo 4 West', westId: 8866, westShikona: 'Toshinofuji', westRank: 'Maegashira 16 West', kimarite: 'yoritaoshi', winnerId: 8866, winnerEn: 'Toshinofuji', winnerJp: '寿之富士' },
];

/**
 * Apply language (`fr` or `en`) to all static and dynamic UI elements
 */
function applyLanguage(lang) {
  state.lang = lang === 'en' ? 'en' : 'fr';
  localStorage.setItem('sumostats_lang', state.lang);
  document.documentElement.setAttribute('lang', state.lang);

  const dict = t();
  document.title = dict.docTitle;

  const langSelect = document.getElementById('lang-select');
  if (langSelect && langSelect.value !== state.lang) {
    langSelect.value = state.lang;
  }

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    if (dict[key]) {
      el.setAttribute('title', dict[key]);
    }
  });

  const spoilerLabel = document.getElementById('spoiler-label');
  if (spoilerLabel) {
    spoilerLabel.textContent = state.spoilersMasked ? dict.spoilerHidden : dict.spoilerShown;
  }

  const sortOrderLabel = document.getElementById('sort-order-label');
  if (sortOrderLabel) {
    sortOrderLabel.textContent = state.reverseBoutOrder ? dict.sortOrderTopFirst : dict.sortOrderBoutOneFirst;
  }

  render2026BashoList();
  updateResultsBannerHeader();
  renderPrizesStrip(state.currentBashoData);
  const banzukeMap = state.banzukeCache[`${state.selectedBashoId}-${state.selectedDivision}`] || new Map();
  renderDailyStatsAndMatches(banzukeMap);
  renderBashoStandings(banzukeMap);
  renderWebhookEventsLog();
}

/**
 * Smart Fetch helper: tries direct sumo-api.com (CORS enabled) first, then local proxy /api/sumo
 */
async function fetchSumoApi(apiPath) {
  const directUrl = `https://www.sumo-api.com/api${apiPath}`;
  try {
    const res = await fetch(directUrl, { headers: { Accept: 'application/json' } });
    if (res.ok) {
      return await res.json();
    }
  } catch (_) {}

  const proxyUrl = `/api/sumo${apiPath}`;
  const proxyRes = await fetch(proxyUrl, { headers: { Accept: 'application/json' } });
  if (!proxyRes.ok) {
    throw new Error(`HTTP ${proxyRes.status}`);
  }
  return await proxyRes.json();
}

function formatShortRank(rankStr) {
  if (!rankStr) return '—';
  const parts = rankStr.trim().split(/\s+/);
  if (parts.length < 2) return rankStr;
  const title = parts[0];
  const num = parts[1] || '';
  const side = parts[2] ? parts[2][0].toUpperCase() : '';
  const prefixMap = {
    Yokozuna: 'Y',
    Ozeki: 'O',
    Sekiwake: 'S',
    Komusubi: 'K',
    Maegashira: 'M',
    Juryo: 'J',
    Makushita: 'Ms',
    Sandanme: 'Sd',
    Jonidan: 'Jd',
    Jonokuchi: 'Jk',
  };
  const prefix = prefixMap[title] || title.slice(0, 2);
  return `${prefix}${num}${side}`;
}

function getRankTierClass(rankStr) {
  if (!rankStr) return '';
  if (rankStr.startsWith('Yokozuna')) return 'rank-yokozuna';
  if (rankStr.startsWith('Ozeki')) return 'rank-ozeki';
  if (rankStr.startsWith('Sekiwake') || rankStr.startsWith('Komusubi')) return 'rank-sanyaku';
  return '';
}

function isSanyakuRank(rankStr) {
  if (!rankStr) return false;
  return (
    rankStr.startsWith('Yokozuna') ||
    rankStr.startsWith('Ozeki') ||
    rankStr.startsWith('Sekiwake') ||
    rankStr.startsWith('Komusubi')
  );
}

function getDayFormattedDate(startDateIso, dayNumber) {
  const dict = t();
  if (!startDateIso) return `${dict.dayWord} ${dayNumber}`;
  const base = new Date(startDateIso);
  if (isNaN(base.getTime())) return `${dict.dayWord} ${dayNumber}`;
  base.setUTCDate(base.getUTCDate() + (dayNumber - 1));
  const locale = state.lang === 'en' ? 'en-US' : 'fr-FR';
  return base.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

function getDaySpecialName(day) {
  const dict = t();
  if (day === 1) return dict.daySpecial1;
  if (day === 8) return dict.daySpecial8;
  if (day === 15) return dict.daySpecial15;
  return dict.dayRegular(day);
}

/**
 * Render the 6 tournaments of 2026 with a horizontal line of numbers 1 to 15
 */
function render2026BashoList() {
  const listEl = document.getElementById('basho-2026-list');
  if (!listEl) return;
  const dict = t();

  listEl.innerHTML = BASHO_2026_CALENDAR.map((basho) => {
    const isSelectedBasho = basho.bashoId === state.selectedBashoId;
    const summary = state.bashoSummaryMap[basho.bashoId];
    const makuuchiYusho =
      (summary && summary.yusho && summary.yusho.find((y) => y.type === 'Makuuchi')) ||
      basho.defaultYusho;

    const statusClass =
      basho.status === 'live'
        ? 'status-live'
        : basho.status === 'upcoming'
        ? 'status-upcoming'
        : 'status-completed';

    const monthLabel = basho.month[state.lang] || basho.month.fr;
    const statusText = basho.statusLabel[state.lang] || basho.statusLabel.fr;

    let dayButtonsHtml = '';
    for (let d = 1; d <= 15; d++) {
      const isSelectedDay = isSelectedBasho && state.selectedDay === d;
      const isSpecial = d === 1 || d === 8 || d === 15;
      const isFuture = basho.maxAvailableDay > 0 ? d > basho.maxAvailableDay : basho.status === 'upcoming';

      const classes = [
        'day-num-btn',
        isSelectedDay ? 'is-active-day' : '',
        isSpecial ? 'is-special-day' : '',
        isFuture ? 'is-future-day' : '',
      ]
        .filter(Boolean)
        .join(' ');

      const tooltip = `${basho.name} (${monthLabel}) — ${dict.dayWord} ${d}${
        d === 1 ? ' (Shonichi)' : d === 8 ? ' (Nakabi)' : d === 15 ? ' (Senshuraku)' : ''
      }`;

      dayButtonsHtml += `
        <button
          type="button"
          class="${classes}"
          data-basho="${basho.bashoId}"
          data-day="${d}"
          id="btn-basho-${basho.bashoId}-day-${d}"
          title="${tooltip}"
          aria-label="${tooltip}"
          aria-pressed="${isSelectedDay ? 'true' : 'false'}"
        >
          ${d}
        </button>
      `;
    }

    return `
      <div class="basho-row-card ${isSelectedBasho ? 'is-selected-basho' : ''}" role="listitem" data-basho-row="${basho.bashoId}">
        <div class="basho-info-col">
          <div class="basho-top-line">
            <span class="basho-id-pill">${basho.codeLabel}</span>
            <span class="basho-name-title">${basho.name}</span>
            <span class="basho-kanji-sub">${basho.kanji}</span>
            <span class="basho-status-badge ${statusClass}">${statusText}</span>
          </div>
          <div class="basho-bottom-line">
            <span>📍 ${basho.city} (${basho.venue})</span>
            <span>🗓️ ${monthLabel}</span>
            ${
              makuuchiYusho
                ? `<span class="yusho-mini-pill" title="${dict.yushoWinnerTitle}">🏆 ${makuuchiYusho.shikonaEn} ${makuuchiYusho.shikonaJp || ''}</span>`
                : ''
            }
          </div>
        </div>

        <div class="days-line-wrapper" role="group" aria-label="${basho.name} 1..15">
          ${dayButtonsHtml}
        </div>
      </div>
    `;
  }).join('');

  listEl.querySelectorAll('.day-num-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const bashoId = btn.getAttribute('data-basho');
      const day = parseInt(btn.getAttribute('data-day'), 10);
      state.userChangedDayManually = true;
      selectBashoAndDay(bashoId, day);
    });
  });
}

function updateBashoMaxAvailableDay(bashoId, detectedResultDay) {
  if (!detectedResultDay || detectedResultDay < 1) return false;
  const basho = BASHO_2026_CALENDAR.find((b) => b.bashoId === bashoId);
  if (!basho) return false;
  if (detectedResultDay > basho.maxAvailableDay) {
    basho.maxAvailableDay = Math.min(15, detectedResultDay);
    render2026BashoList();
    return true;
  }
  return false;
}

function inspectBanzukeMaxResultDay(banzukeMap) {
  if (!banzukeMap || banzukeMap.size === 0) return 0;
  let maxResultDay = 0;
  for (const r of banzukeMap.values()) {
    if (Array.isArray(r.record)) {
      for (let i = 0; i < r.record.length && i < 15; i++) {
        const res = (r.record[i]?.result || '').toLowerCase();
        if (res === 'win' || res === 'loss' || res === 'fusen win' || res === 'fusen loss') {
          if (i + 1 > maxResultDay) maxResultDay = i + 1;
        }
      }
    }
  }
  return maxResultDay;
}

async function preload2026BashoMetadata() {
  await Promise.allSettled(
    BASHO_2026_CALENDAR.filter((b) => b.status !== 'upcoming').map(async (basho) => {
      try {
        const data = await fetchSumoApi(`/basho/${basho.bashoId}`);
        if (data && data.date) {
          state.bashoSummaryMap[basho.bashoId] = data;
        }
        // For a live tournament, verify if today's results (e.g. Day 12) are already published on sumo-api.com
        if (basho.status === 'live' && basho.currentDay > 0) {
          const banzukeMap = await ensureBanzukeLoaded(basho.bashoId, 'Makuuchi');
          const banzukeMaxDay = inspectBanzukeMaxResultDay(banzukeMap);
          if (banzukeMaxDay > 0) {
            updateBashoMaxAvailableDay(basho.bashoId, banzukeMaxDay);
          }

          if (basho.maxAvailableDay < basho.currentDay) {
            try {
              const todayTorikumi = await fetchSumoApi(
                `/basho/${basho.bashoId}/torikumi/Makuuchi/${basho.currentDay}`
              );
              const bouts = Array.isArray(todayTorikumi?.torikumi) ? todayTorikumi.torikumi : [];
              const hasResultsToday = bouts.some((m) => Boolean(m.winnerId));
              if (hasResultsToday) {
                updateBashoMaxAvailableDay(basho.bashoId, basho.currentDay);
              }
            } catch (_) {}
          }

          if (
            state.selectedBashoId === basho.bashoId &&
            !state.userChangedDayManually &&
            state.selectedDay !== basho.maxAvailableDay &&
            basho.maxAvailableDay > 0
          ) {
            selectBashoAndDay(basho.bashoId, basho.maxAvailableDay);
          }
        }
      } catch (_) {}
    })
  );
  render2026BashoList();
}

async function ensureBanzukeLoaded(bashoId, division) {
  const key = `${bashoId}-${division}`;
  if (state.banzukeCache[key]) return state.banzukeCache[key];

  try {
    const data = await fetchSumoApi(`/basho/${bashoId}/banzuke/${division}`);
    const map = new Map();
    const allSides = [...(data.east || []), ...(data.west || [])];
    for (const r of allSides) {
      map.set(r.rikishiID, r);
    }
    state.banzukeCache[key] = map;
    const maxResultDay = inspectBanzukeMaxResultDay(map);
    if (maxResultDay > 0) {
      updateBashoMaxAvailableDay(bashoId, maxResultDay);
    }
    return map;
  } catch (_) {
    return new Map();
  }
}

function getKkThreshold(division, rankStr) {
  if (rankStr) {
    if (
      rankStr.startsWith('Yokozuna') ||
      rankStr.startsWith('Ozeki') ||
      rankStr.startsWith('Sekiwake') ||
      rankStr.startsWith('Komusubi') ||
      rankStr.startsWith('Maegashira') ||
      rankStr.startsWith('Juryo')
    ) {
      return 8;
    }
    if (
      rankStr.startsWith('Makushita') ||
      rankStr.startsWith('Sandanme') ||
      rankStr.startsWith('Jonidan') ||
      rankStr.startsWith('Jonokuchi')
    ) {
      return 4;
    }
  }
  const isSekitori = division === 'Makuuchi' || division === 'Juryo';
  return isSekitori ? 8 : 4;
}

function getRikishiDayStats(rikishiEntry, targetDay, highlightDay = targetDay) {
  const dict = t();
  if (!rikishiEntry || !Array.isArray(rikishiEntry.record)) {
    return {
      wins: 0,
      losses: 0,
      absences: 0,
      recordText: '',
      hoshitoriHtml: '',
      shikonaJp: '',
      topKimarite: '—',
    };
  }

  let wins = 0;
  let losses = 0;
  let absences = 0;
  const dots = [];
  const winKimarites = {};

  for (let i = 0; i < 15; i++) {
    const dayIdx = i + 1;
    const rec = rikishiEntry.record[i] || {};
    const res = (rec.result || '').toLowerCase();

    if (dayIdx <= targetDay) {
      if (res === 'win' || res === 'fusen win') {
        wins++;
        if (rec.kimarite) {
          winKimarites[rec.kimarite] = (winKimarites[rec.kimarite] || 0) + 1;
        }
      } else if (res === 'loss' || res === 'fusen loss') {
        losses++;
      } else if (res === 'absent') {
        absences++;
      }
    }

    let dotClass = 'empty';
    let dotTitle = dict.hoshitoriUpcoming(dayIdx);
    if (dayIdx <= targetDay) {
      if (res === 'win' || res === 'fusen win') {
        dotClass = 'win';
        dotTitle = dict.hoshitoriWin(dayIdx, rec.opponentShikonaEn || '?', rec.kimarite || 'fusen');
      } else if (res === 'loss' || res === 'fusen loss') {
        dotClass = 'loss';
        dotTitle = dict.hoshitoriLoss(dayIdx, rec.opponentShikonaEn || '?', rec.kimarite || 'fusen');
      } else if (res === 'absent') {
        dotClass = 'absent';
        dotTitle = dict.hoshitoriAbsent(dayIdx);
      }
    }

    const currentClass = dayIdx === highlightDay ? 'is-current-day' : '';
    dots.push(`<span class="h-dot ${dotClass} ${currentClass}" title="${dotTitle}"></span>`);
  }

  const sortedK = Object.entries(winKimarites).sort((a, b) => b[1] - a[1]);
  const topKimarite = sortedK.length > 0 ? `${sortedK[0][0]} (×${sortedK[0][1]})` : '—';

  const recordText = `${wins}-${losses}${absences > 0 ? `-${absences}` : ''}`;
  return {
    wins,
    losses,
    absences,
    recordText,
    hoshitoriHtml: `<div class="hoshitori-mini-strip" aria-label="Hoshitori 15d">${dots.join('')}</div>`,
    shikonaJp: rikishiEntry.shikonaJp ? rikishiEntry.shikonaJp.split('　')[0] : '',
    topKimarite,
  };
}

/**
 * Select a 2026 tournament and day (1..15) and load its results + cumulative standings
 */
async function selectBashoAndDay(bashoId, day) {
  state.selectedBashoId = bashoId;
  state.selectedDay = Math.max(1, Math.min(15, day));
  const dict = t();

  render2026BashoList();
  updateResultsBannerHeader();

  const matchesListEl = document.getElementById('torikumi-matches-list');
  matchesListEl.innerHTML = `
    <div class="empty-state-box">
      ${dict.loadingTorikumi(bashoId, state.selectedDivision, state.selectedDay)}
    </div>
  `;

  try {
    const [torikumiData, banzukeMap] = await Promise.all([
      fetchSumoApi(`/basho/${bashoId}/torikumi/${state.selectedDivision}/${state.selectedDay}`),
      ensureBanzukeLoaded(bashoId, state.selectedDivision),
    ]);

    state.currentBashoData = torikumiData;
    if (torikumiData && torikumiData.date) {
      state.bashoSummaryMap[bashoId] = torikumiData;
    }

    state.currentTorikumi = Array.isArray(torikumiData.torikumi) ? torikumiData.torikumi : [];
    if (state.currentTorikumi.some((m) => Boolean(m.winnerId))) {
      updateBashoMaxAvailableDay(bashoId, state.selectedDay);
    }
    render2026BashoList();
    renderPrizesStrip(torikumiData);
    renderDailyStatsAndMatches(banzukeMap);
    renderBashoStandings(banzukeMap);
  } catch (err) {
    if (bashoId === '202609' && state.selectedDay === 8 && state.selectedDivision === 'Makuuchi') {
      state.currentTorikumi = FALLBACK_TORIKUMI_202609_8;
      renderDailyStatsAndMatches(new Map());
      renderBashoStandings(new Map());
    } else {
      state.currentTorikumi = [];
      renderDailyStatsAndMatches(new Map());
      renderBashoStandings(new Map());
    }
  }
}

function updateResultsBannerHeader() {
  const dict = t();
  const bashoMeta = BASHO_2026_CALENDAR.find((b) => b.bashoId === state.selectedBashoId) || BASHO_2026_CALENDAR[4];
  const monthLabel = bashoMeta.month[state.lang] || bashoMeta.month.fr;

  document.getElementById('active-basho-code').textContent = bashoMeta.codeLabel;
  document.getElementById('active-basho-jp').textContent = bashoMeta.kanji;
  document.getElementById('active-basho-venue').textContent = `${bashoMeta.city} • ${bashoMeta.venue}`;
  document.getElementById('selected-basho-day-title').textContent = `${bashoMeta.name} (${monthLabel}) — ${dict.dayWord} ${state.selectedDay}`;

  const formattedDate = getDayFormattedDate(bashoMeta.startDate, state.selectedDay);
  const specialLabel = getDaySpecialName(state.selectedDay);
  document.getElementById('active-day-date-label').textContent = `${specialLabel} • ${formattedDate} • Division ${state.selectedDivision}`;

  document.getElementById('current-day-indicator').textContent = dict.dayOf15(state.selectedDay);
  document.getElementById('btn-prev-day').disabled = state.selectedDay <= 1;
  document.getElementById('btn-next-day').disabled = state.selectedDay >= 15;
}

function renderPrizesStrip(torikumiData) {
  const stripEl = document.getElementById('basho-prizes-strip');
  if (!torikumiData) {
    stripEl.classList.add('hidden');
    return;
  }

  const yushoList = Array.isArray(torikumiData.yusho) ? torikumiData.yusho : [];
  const prizesList = Array.isArray(torikumiData.specialPrizes) ? torikumiData.specialPrizes : [];

  if (yushoList.length === 0 && prizesList.length === 0) {
    stripEl.classList.add('hidden');
    return;
  }

  stripEl.classList.remove('hidden');
  const chips = [];

  const makuuchiYusho = yushoList.find((y) => y.type === 'Makuuchi');
  if (makuuchiYusho) {
    chips.push(`
      <span class="prize-chip">
        🏆 <strong>Yūshō Makuuchi:</strong> ${makuuchiYusho.shikonaEn} (${makuuchiYusho.shikonaJp || ''})
      </span>
    `);
  }

  const juryoYusho = yushoList.find((y) => y.type === 'Juryo');
  if (juryoYusho) {
    chips.push(`
      <span class="prize-chip">
        🥇 <strong>Yūshō Jūryō:</strong> ${juryoYusho.shikonaEn}
      </span>
    `);
  }

  for (const sp of prizesList) {
    chips.push(`
      <span class="prize-chip">
        🎖️ <strong>${sp.type}:</strong> ${sp.shikonaEn}
      </span>
    `);
  }

  stripEl.innerHTML = chips.join('');
}

/**
 * Render daily KPI cards and the Torikumi bouts list
 */
function renderDailyStatsAndMatches(banzukeMap) {
  const dict = t();
  const matches = state.currentTorikumi || [];
  const bashoMeta = BASHO_2026_CALENDAR.find((b) => b.bashoId === state.selectedBashoId);

  let eastWins = 0;
  let westWins = 0;
  const kimariteCounts = {};

  for (const m of matches) {
    if (m.winnerId) {
      if (m.winnerId === m.eastId) eastWins++;
      else if (m.winnerId === m.westId) westWins++;
    }
    if (m.kimarite) {
      kimariteCounts[m.kimarite] = (kimariteCounts[m.kimarite] || 0) + 1;
    }
  }

  const totalDecided = eastWins + westWins;
  const eastPct = totalDecided > 0 ? Math.round((eastWins / totalDecided) * 100) : 50;

  document.getElementById('stat-total-bouts').textContent = dict.boutsCount(matches.length);
  document.getElementById('stat-division-label').textContent = dict.divisionDaySub(
    state.selectedDivision,
    state.selectedDay
  );
  document.getElementById('stat-east-wins').textContent = dict.eastScore(eastWins, eastPct);
  document.getElementById('stat-west-wins').textContent = dict.westScore(westWins, 100 - eastPct);
  document.getElementById('stat-east-bar').style.width = `${eastPct}%`;

  const sortedKimarite = Object.entries(kimariteCounts).sort((a, b) => b[1] - a[1]);
  if (sortedKimarite.length > 0) {
    const [topK, countK] = sortedKimarite[0];
    const second = sortedKimarite[1] ? `, ${sortedKimarite[1][0]} (×${sortedKimarite[1][1]})` : '';
    document.getElementById('stat-top-kimarite').textContent = `${topK} (×${countK})${second}`;
    document.getElementById('stat-kimarite-variety').textContent = dict.kimariteVarietyCount(
      sortedKimarite.length
    );
  } else {
    document.getElementById('stat-top-kimarite').textContent =
      matches.length > 0 ? dict.scheduledBouts : dict.notPlayedYet;
    document.getElementById('stat-kimarite-variety').textContent = dict.waitingForResults;
  }

  if (banzukeMap && banzukeMap.size > 0) {
    let bestWins = -1;
    let leaders = [];
    for (const r of banzukeMap.values()) {
      let w = 0;
      let l = 0;
      if (Array.isArray(r.record)) {
        for (let i = 0; i < state.selectedDay && i < r.record.length; i++) {
          const res = (r.record[i]?.result || '').toLowerCase();
          if (res === 'win' || res === 'fusen win') w++;
          else if (res === 'loss' || res === 'fusen loss') l++;
        }
      }
      if (w > bestWins) {
        bestWins = w;
        leaders = [`${r.shikonaEn} (${w}-${l})`];
      } else if (w === bestWins && w > 0 && leaders.length < 3) {
        leaders.push(`${r.shikonaEn} (${w}-${l})`);
      }
    }
    document.getElementById('stat-basho-leader').textContent =
      bestWins > 0 ? leaders.join(', ') : dict.startOfBasho;
    document.getElementById('stat-basho-leader-sub').textContent =
      bestWins > 0 ? dict.afterDay(state.selectedDay) : `Division ${state.selectedDivision}`;
  } else {
    document.getElementById('stat-basho-leader').textContent =
      bashoMeta?.defaultYusho?.shikonaEn || dict.ongoingOrBanzuke;
    document.getElementById('stat-basho-leader-sub').textContent = `${bashoMeta?.name || ''} 2026`;
  }

  const q = state.searchQuery.trim().toLowerCase();
  let filtered = matches.filter((m) => {
    if (!q) return true;
    return (
      (m.eastShikona || '').toLowerCase().includes(q) ||
      (m.westShikona || '').toLowerCase().includes(q) ||
      (!state.spoilersMasked && (m.kimarite || '').toLowerCase().includes(q)) ||
      (m.eastRank || '').toLowerCase().includes(q) ||
      (m.westRank || '').toLowerCase().includes(q)
    );
  });

  filtered.sort((a, b) =>
    state.reverseBoutOrder ? (b.matchNo || 0) - (a.matchNo || 0) : (a.matchNo || 0) - (b.matchNo || 0)
  );

  const listEl = document.getElementById('torikumi-matches-list');
  if (filtered.length === 0) {
    const reason =
      matches.length === 0
        ? dict.noBoutsPublished(
            bashoMeta?.name || state.selectedBashoId,
            state.selectedBashoId,
            state.selectedDay,
            state.selectedDivision,
            bashoMeta?.maxAvailableDay || 11
          )
        : dict.noFilterMatch(state.searchQuery);

    listEl.innerHTML = `<div class="empty-state-box">${reason}</div>`;
    return;
  }

  const kimariteDict = KIMARITE_I18N[state.lang] || KIMARITE_I18N.fr;
  const statsTargetDay = state.spoilersMasked ? Math.max(0, state.selectedDay - 1) : state.selectedDay;

  listEl.innerHTML = filtered
    .map((bout) => {
      const eastWon = bout.winnerId && bout.winnerId === bout.eastId;
      const westWon = bout.winnerId && bout.winnerId === bout.westId;
      const isDecided = Boolean(bout.winnerId);

      const eastEntry = banzukeMap ? banzukeMap.get(bout.eastId) : null;
      const westEntry = banzukeMap ? banzukeMap.get(bout.westId) : null;

      const eastStats = getRikishiDayStats(eastEntry, statsTargetDay, state.selectedDay);
      const westStats = getRikishiDayStats(westEntry, statsTargetDay, state.selectedDay);

      const eastKkThreshold = getKkThreshold(state.selectedDivision, bout.eastRank);
      const westKkThreshold = getKkThreshold(state.selectedDivision, bout.westRank);
      const eastIsKk = eastStats.wins >= eastKkThreshold;
      const westIsKk = westStats.wins >= westKkThreshold;
      const eastIsMk = eastStats.losses + eastStats.absences >= eastKkThreshold;
      const westIsMk = westStats.losses + westStats.absences >= westKkThreshold;
      const eastHighlightClass = eastIsKk ? 'is-kachikoshi' : eastIsMk ? 'is-makekoshi' : '';
      const westHighlightClass = westIsKk ? 'is-kachikoshi' : westIsMk ? 'is-makekoshi' : '';

      const eastShortRank = formatShortRank(bout.eastRank);
      const westShortRank = formatShortRank(bout.westRank);

      const eastTierClass = getRankTierClass(bout.eastRank);
      const westTierClass = getRankTierClass(bout.westRank);

      const kimariteLabel = bout.kimarite || (isDecided ? 'fusen' : dict.upcomingBout);
      const kimariteTooltip = kimariteDict[bout.kimarite] || `Kimarite: ${kimariteLabel}`;

      return `
        <div
          class="bout-row"
          data-east-id="${bout.eastId}"
          data-west-id="${bout.westId}"
          data-east-name="${bout.eastShikona}"
          data-west-name="${bout.westShikona}"
          title="${dict.clickForH2h(bout.eastShikona, bout.westShikona)}"
        >
          <!-- East Wrestler (Higashi) -->
          <div class="rikishi-cell east-cell ${eastWon ? 'is-winner' : isDecided ? 'is-loser' : ''}">
            <div class="rikishi-main-info">
              <div class="rikishi-name-line">
                ${eastStats.recordText ? `<span class="record-badge">(${eastStats.recordText})</span>` : ''}
                <span class="rank-badge ${eastTierClass}" title="${bout.eastRank}">${eastShortRank}</span>
                ${eastStats.shikonaJp ? `<span class="shikona-jp">${eastStats.shikonaJp}</span>` : ''}
                <span class="shikona-en ${eastHighlightClass}">${bout.eastShikona}</span>
              </div>
              ${eastStats.hoshitoriHtml}
            </div>
            <div
              class="hoshi-win-Loss-indicator ${eastWon ? 'hoshi-win' : isDecided ? 'hoshi-loss' : 'hoshi-pending'}"
              title="${eastWon ? dict.shiroboshiWin : isDecided ? dict.kuroboshiLoss : dict.upcomingBout}"
            >
              ${eastWon ? '○' : isDecided ? '●' : '·'}
            </div>
          </div>

          <!-- Center Match & Kimarite -->
          <div class="bout-center-cell">
            <span class="bout-num-label">${dict.boutNumber(bout.matchNo)}</span>
            <span class="kimarite-pill" title="${kimariteTooltip}">${kimariteLabel}</span>
            <span class="h2h-hint">${dict.viewH2h}</span>
          </div>

          <!-- West Wrestler (Nishi) -->
          <div class="rikishi-cell west-cell ${westWon ? 'is-winner' : isDecided ? 'is-loser' : ''}">
            <div
              class="hoshi-win-Loss-indicator ${westWon ? 'hoshi-win' : isDecided ? 'hoshi-loss' : 'hoshi-pending'}"
              title="${westWon ? dict.shiroboshiWin : isDecided ? dict.kuroboshiLoss : dict.upcomingBout}"
            >
              ${westWon ? '○' : isDecided ? '●' : '·'}
            </div>
            <div class="rikishi-main-info">
              <div class="rikishi-name-line">
                <span class="shikona-en ${westHighlightClass}">${bout.westShikona}</span>
                ${westStats.shikonaJp ? `<span class="shikona-jp">${westStats.shikonaJp}</span>` : ''}
                <span class="rank-badge ${westTierClass}" title="${bout.westRank}">${westShortRank}</span>
                ${westStats.recordText ? `<span class="record-badge">(${westStats.recordText})</span>` : ''}
              </div>
              ${westStats.hoshitoriHtml}
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  listEl.querySelectorAll('.bout-row').forEach((row) => {
    row.addEventListener('click', () => {
      const eastId = row.getAttribute('data-east-id');
      const westId = row.getAttribute('data-west-id');
      const eastName = row.getAttribute('data-east-name');
      const westName = row.getAttribute('data-west-name');
      openHeadToHeadModal(eastId, westId, eastName, westName);
    });
  });
}

/**
 * Section 3: Render Cumulative Rikishi Standings (Day 1 -> Selected Day)
 */
function renderBashoStandings(banzukeMap) {
  const dict = t();
  const bashoMeta = BASHO_2026_CALENDAR.find((b) => b.bashoId === state.selectedBashoId) || BASHO_2026_CALENDAR[4];
  const monthLabel = bashoMeta.month[state.lang] || bashoMeta.month.fr;

  const titleEl = document.getElementById('standings-section-title');
  if (titleEl) {
    titleEl.textContent = dict.standingsTitleDynamic(
      bashoMeta.name,
      monthLabel,
      state.selectedDivision,
      state.selectedDay
    );
  }

  const podiumEl = document.getElementById('standings-podium-grid');
  const tbodyEl = document.getElementById('standings-tbody');
  if (!tbodyEl || !podiumEl) return;

  const isSekitori = state.selectedDivision === 'Makuuchi' || state.selectedDivision === 'Juryo';
  const kkThreshold = isSekitori ? 8 : 4;
  const statsTargetDay = state.spoilersMasked ? Math.max(0, state.selectedDay - 1) : state.selectedDay;

  const rows = [];
  if (banzukeMap && banzukeMap.size > 0) {
    for (const r of banzukeMap.values()) {
      const dayStats = getRikishiDayStats(r, statsTargetDay, state.selectedDay);
      const totalDecisions = dayStats.wins + dayStats.losses;
      const winPct = totalDecisions > 0 ? Math.round((dayStats.wins / totalDecisions) * 100) : 0;

      rows.push({
        rikishiID: r.rikishiID,
        shikonaEn: r.shikonaEn,
        shikonaJp: dayStats.shikonaJp,
        rank: r.rank || '',
        shortRank: formatShortRank(r.rank),
        rankValue: r.rankValue || 999,
        wins: dayStats.wins,
        losses: dayStats.losses,
        absences: dayStats.absences,
        winPct,
        hoshitoriHtml: dayStats.hoshitoriHtml,
        topKimarite: dayStats.topKimarite,
      });
    }
  }

  // Sort by: 1) Wins DESC, 2) Losses ASC, 3) Official Banzuke rankValue ASC
  rows.sort((a, b) => {
    if (b.wins !== a.wins) return b.wins - a.wins;
    if (a.losses !== b.losses) return a.losses - b.losses;
    return a.rankValue - b.rankValue;
  });

  if (rows.length === 0) {
    podiumEl.innerHTML = '';
    tbodyEl.innerHTML = `<tr><td colspan="8" class="empty-state-box">${dict.stNoStandings}</td></tr>`;
    return;
  }

  const maxWins = rows[0].wins;
  const leadersCount = rows.filter((r) => r.wins === maxWins && maxWins > 0).length;

  // Render Top 3 Podium Cards
  const top3 = rows.slice(0, 3);
  podiumEl.innerHTML = top3
    .map((r, idx) => {
      const tierClass = getRankTierClass(r.rank);
      const isKk = r.wins >= kkThreshold;
      const isMk = r.losses + r.absences >= kkThreshold;
      const highlightClass = isKk ? 'is-kachikoshi' : isMk ? 'is-makekoshi' : '';
      return `
        <div class="podium-card ${idx === 0 ? 'podium-rank-1' : ''}">
          <div class="podium-left">
            <div class="podium-medal">#${idx + 1}</div>
            <div>
              <div class="podium-name">
                <span class="shikona-en ${highlightClass}">${r.shikonaEn}</span>
                ${r.shikonaJp ? `<span class="shikona-jp">${r.shikonaJp}</span>` : ''}
                <span class="rank-badge ${tierClass}">${r.shortRank}</span>
              </div>
              <div class="podium-sub">${r.rank} • Kimarite: ${r.topKimarite}</div>
            </div>
          </div>
          <div class="podium-score">
            ${r.wins}-${r.losses}
            <div style="font-size:0.7rem;color:var(--text-secondary);font-weight:600;">${r.winPct}%</div>
          </div>
        </div>
      `;
    })
    .join('');

  // Filter rows according to active standingsFilter ('all' | 'top10' | 'kk' | 'mk' | 'sanyaku')
  let filteredRows = rows;
  if (state.standingsFilter === 'top10') {
    filteredRows = rows.slice(0, 10);
  } else if (state.standingsFilter === 'kk') {
    filteredRows = rows.filter((r) => r.wins >= kkThreshold);
  } else if (state.standingsFilter === 'mk') {
    filteredRows = rows.filter((r) => r.losses + r.absences >= kkThreshold);
  } else if (state.standingsFilter === 'sanyaku') {
    filteredRows = rows.filter((r) => isSanyakuRank(r.rank));
  }

  if (filteredRows.length === 0) {
    tbodyEl.innerHTML = `<tr><td colspan="8" class="empty-state-box">${dict.stNoStandings}</td></tr>`;
    return;
  }

  tbodyEl.innerHTML = filteredRows
    .map((r) => {
      const globalPos = rows.indexOf(r) + 1;
      const isLeader = r.wins === maxWins && maxWins > 0;
      const isKk = r.wins >= kkThreshold;
      const isMk = r.losses + r.absences >= kkThreshold;
      const highlightClass = isKk ? 'is-kachikoshi' : isMk ? 'is-makekoshi' : '';
      const tierClass = getRankTierClass(r.rank);

      let statusBadgeHtml = `<span class="st-status-badge st-status-neutral">${dict.stInPlayBadge}</span>`;
      if (isLeader) {
        statusBadgeHtml = `<span class="st-status-badge st-status-leader">${
          leadersCount > 1 ? dict.stCoLeaderBadge : dict.stLeaderBadge
        }</span>`;
      } else if (isKk) {
        statusBadgeHtml = `<span class="st-status-badge st-status-kk">${dict.stKkBadge}</span>`;
      } else if (isMk) {
        statusBadgeHtml = `<span class="st-status-badge st-status-mk">${dict.stMkBadge}</span>`;
      }

      return `
        <tr class="${isLeader ? 'is-leader-row' : ''}">
          <td class="col-pos">
            <span class="pos-badge ${globalPos === 1 ? 'pos-1' : ''}">#${globalPos}</span>
          </td>
          <td class="col-rikishi">
            <div class="st-rikishi-cell">
              <span class="shikona-en ${highlightClass}">${r.shikonaEn}</span>
              ${r.shikonaJp ? `<span class="shikona-jp">${r.shikonaJp}</span>` : ''}
            </div>
          </td>
          <td class="col-rank">
            <span class="rank-badge ${tierClass}" title="${r.rank}">${r.shortRank}</span>
            <span style="font-size:0.75rem;color:var(--text-secondary);margin-left:0.35rem;">${r.rank}</span>
          </td>
          <td class="col-record">
            <span class="st-record-pill">${r.wins} - ${r.losses}${r.absences > 0 ? ` - ${r.absences}` : ''}</span>
          </td>
          <td class="col-status">${statusBadgeHtml}</td>
          <td class="col-winrate">
            <div class="st-winrate-wrap">
              <div class="st-winrate-track">
                <div class="st-winrate-fill" style="width: ${r.winPct}%"></div>
              </div>
              <span class="st-winrate-pct">${r.winPct}%</span>
            </div>
          </td>
          <td class="col-hoshitori">${r.hoshitoriHtml}</td>
          <td class="col-kimarite">
            <span class="kimarite-pill">${r.topKimarite}</span>
          </td>
        </tr>
      `;
    })
    .join('');
}

/**
 * Open Head-to-Head (H2H) Confrontation Modal using GET /api/rikishi/:rikishiId/matches/:opponentId
 */
async function openHeadToHeadModal(eastId, westId, eastName, westName) {
  const dict = t();
  const backdrop = document.getElementById('h2h-modal-backdrop');
  const titleEl = document.getElementById('h2h-modal-title');
  const contentEl = document.getElementById('h2h-modal-content');

  titleEl.textContent = `${eastName} (東) vs ${westName} (西)`;
  contentEl.innerHTML = `<div class="empty-state-box">${dict.loadingH2h}</div>`;
  backdrop.classList.remove('hidden');

  try {
    const data = await fetchSumoApi(`/rikishi/${eastId}/matches/${westId}`);
    const allMatches = Array.isArray(data.matches) ? data.matches : [];

    // When spoilers are masked, only include confrontations strictly prior to the selected tournament (up to tournament N-1)
    const sourceMatches = state.spoilersMasked
      ? allMatches.filter((m) => String(m.bashoId || '') < String(state.selectedBashoId))
      : allMatches;

    let eastWins = 0;
    let westWins = 0;
    if (state.spoilersMasked) {
      for (const m of sourceMatches) {
        if (Number(m.winnerId) === Number(eastId)) eastWins++;
        else if (Number(m.winnerId) === Number(westId)) westWins++;
      }
    } else {
      eastWins = data.rikishiWins || 0;
      westWins = data.opponentWins || 0;
    }

    const total = eastWins + westWins;
    const eastPct = total > 0 ? Math.round((eastWins / total) * 100) : 50;
    const matches = sourceMatches.slice(0, 12);

    const historyRows = matches
      .map(
        (m) => `
        <div style="display:flex;justify-content:space-between;padding:0.45rem 0.6rem;border-bottom:1px solid var(--border-subtle);font-size:0.8rem;">
          <span style="font-family:'JetBrains Mono',monospace;color:var(--text-secondary);">${m.bashoId} • ${state.lang === 'en' ? 'D' : 'J'}${m.day} (${m.division})</span>
          <span><strong>${m.winnerEn}</strong> ${dict.beatsWord} ${m.winnerId === m.eastId ? m.westShikona : m.eastShikona}</span>
          <span class="kimarite-pill">${m.kimarite || '—'}</span>
        </div>
      `
      )
      .join('');

    contentEl.innerHTML = `
      <div class="kpi-card">
        <div class="kpi-label">${dict.careerRecord(total)}</div>
        <div class="kpi-split-row" style="font-size:1.15rem;">
          <span class="east-score">${eastName}: ${eastWins} ${dict.winsShort} (${eastPct}%)</span>
          <span class="west-score">${westName}: ${westWins} ${dict.winsShort} (${100 - eastPct}%)</span>
        </div>
        <div class="balance-bar-track">
          <div class="balance-bar-east" style="width:${eastPct}%"></div>
        </div>
      </div>

      <div>
        <h4 style="margin:0.4rem 0 0.5rem;font-size:0.86rem;color:var(--text-secondary);">${dict.recentOfficialBouts}</h4>
        <div style="border:1px solid var(--border-subtle);border-radius:8px;overflow:hidden;background:var(--bg-elevated);">
          ${historyRows || `<div class="empty-state-box" style="padding:1rem;">${dict.firstOfficialBout}</div>`}
        </div>
      </div>
    `;
  } catch (err) {
    contentEl.innerHTML = `<div class="empty-state-box">${dict.h2hError(err.message)}</div>`;
  }
}

/**
 * Webhooks Center: SSE Stream + Simulation + Subscription
 */
function initWebhooksCenter() {
  const openBtn = document.getElementById('btn-open-webhooks');
  const closeBtn = document.getElementById('btn-close-webhooks');
  const backdrop = document.getElementById('webhook-modal-backdrop');

  openBtn.addEventListener('click', () => backdrop.classList.remove('hidden'));
  closeBtn.addEventListener('click', () => backdrop.classList.add('hidden'));
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) backdrop.classList.add('hidden');
  });

  fetch('/api/webhook/state')
    .then((r) => r.json())
    .then((data) => {
      if (Array.isArray(data.events)) {
        state.webhookEvents = data.events;
        renderWebhookEventsLog();
      }
    })
    .catch(() => {});

  try {
    const es = new EventSource('/api/webhook/stream');
    es.onmessage = (evt) => {
      try {
        const parsed = JSON.parse(evt.data);
        if (parsed.type === 'connected' && Array.isArray(parsed.events)) {
          state.webhookEvents = parsed.events;
          renderWebhookEventsLog();
        } else if (parsed.id) {
          state.webhookEvents.unshift(parsed);
          renderWebhookEventsLog();
          showWebhookToast(parsed);
        }
      } catch (_) {}
    };
  } catch (_) {}

  document.querySelectorAll('.sim-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const simType = btn.getAttribute('data-sim-type');
      try {
        await fetch('/api/webhook/simulate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: simType,
            bashoId: state.selectedBashoId,
            day: state.selectedDay,
          }),
        });
      } catch (_) {}
    });
  });

  const form = document.getElementById('form-webhook-subscribe');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const dict = t();
    const statusEl = document.getElementById('webhook-save-status');
    statusEl.textContent = dict.whSaving;
    const payload = {
      name: document.getElementById('wh-name').value.trim(),
      destination: document.getElementById('wh-destination').value.trim(),
      secret: document.getElementById('wh-secret').value.trim(),
      subscriptions: {
        newBasho: document.getElementById('wh-sub-newBasho').checked,
        newMatches: document.getElementById('wh-sub-newMatches').checked,
        matchResults: document.getElementById('wh-sub-matchResults').checked,
        endBasho: document.getElementById('wh-sub-endBasho').checked,
      },
    };
    try {
      const res = await fetch('/api/webhook/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        statusEl.textContent = dict.whSavedOk;
        statusEl.style.color = 'var(--win-color)';
      }
    } catch (_) {
      statusEl.textContent = dict.whSavedLocal;
    }
  });
}

function renderWebhookEventsLog() {
  const dict = t();
  const countEl = document.getElementById('webhook-event-count');
  const logEl = document.getElementById('webhook-events-log');
  if (!logEl) return;

  countEl.textContent = String(state.webhookEvents.length);
  const locale = state.lang === 'en' ? 'en-US' : 'fr-FR';
  logEl.innerHTML = state.webhookEvents
    .map((ev) => {
      const timeStr = new Date(ev.receivedAt).toLocaleTimeString(locale);
      return `
        <div class="wh-event-item">
          <div class="wh-event-top">
            <span><strong>${ev.type}</strong> • ${ev.verified ? dict.whHmacOk : dict.whUnsigned}</span>
            <span>${timeStr}</span>
          </div>
          <div>${ev.summary}</div>
        </div>
      `;
    })
    .join('');
}

function showWebhookToast(eventObj) {
  const dict = t();
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `
    <div style="font-family:'JetBrains Mono',monospace;font-size:0.72rem;color:var(--accent-teal);font-weight:700;margin-bottom:0.2rem;">
      ${dict.whToastTitle} ${eventObj.type}
    </div>
    <div>${eventObj.summary}</div>
  `;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 5000);
}

/**
 * Initialize UI controls & keyboard navigation
 */
function initApp() {
  // Language Dropdown Selector
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.value = state.lang;
    langSelect.addEventListener('change', (e) => {
      applyLanguage(e.target.value);
    });
  }

  // Division tabs
  document.querySelectorAll('.div-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.div-tab').forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      state.selectedDivision = tab.getAttribute('data-division');
      selectBashoAndDay(state.selectedBashoId, state.selectedDay);
    });
  });

  // Standings Filter buttons ('all' | 'top10' | 'kk' | 'sanyaku')
  document.querySelectorAll('.st-filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.st-filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.standingsFilter = btn.getAttribute('data-st-filter') || 'all';
      const banzukeMap = state.banzukeCache[`${state.selectedBashoId}-${state.selectedDivision}`] || new Map();
      renderBashoStandings(banzukeMap);
    });
  });

  // Previous / Next Day buttons
  document.getElementById('btn-prev-day').addEventListener('click', () => {
    if (state.selectedDay > 1) {
      state.userChangedDayManually = true;
      selectBashoAndDay(state.selectedBashoId, state.selectedDay - 1);
    }
  });
  document.getElementById('btn-next-day').addEventListener('click', () => {
    if (state.selectedDay < 15) {
      state.userChangedDayManually = true;
      selectBashoAndDay(state.selectedBashoId, state.selectedDay + 1);
    }
  });

  // Search box
  const searchInput = document.getElementById('input-search-rikishi');
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    const banzukeMap = state.banzukeCache[`${state.selectedBashoId}-${state.selectedDivision}`] || new Map();
    renderDailyStatsAndMatches(banzukeMap);
  });

  // Sort order button
  document.getElementById('btn-toggle-order').addEventListener('click', () => {
    const dict = t();
    state.reverseBoutOrder = !state.reverseBoutOrder;
    document.getElementById('sort-order-label').textContent = state.reverseBoutOrder
      ? dict.sortOrderTopFirst
      : dict.sortOrderBoutOneFirst;
    const banzukeMap = state.banzukeCache[`${state.selectedBashoId}-${state.selectedDivision}`] || new Map();
    renderDailyStatsAndMatches(banzukeMap);
  });

  // Spoiler toggle
  document.getElementById('btn-spoiler-toggle').addEventListener('click', () => {
    const dict = t();
    state.spoilersMasked = !state.spoilersMasked;
    document.body.classList.toggle('spoilers-masked', state.spoilersMasked);
    document.getElementById('spoiler-dot').classList.toggle('spoiler-hidden', state.spoilersMasked);
    document.getElementById('spoiler-label').textContent = state.spoilersMasked
      ? dict.spoilerHidden
      : dict.spoilerShown;
    const banzukeMap = state.banzukeCache[`${state.selectedBashoId}-${state.selectedDivision}`] || new Map();
    renderDailyStatsAndMatches(banzukeMap);
    renderBashoStandings(banzukeMap);
  });

  // Theme switcher
  document.getElementById('btn-theme-toggle').addEventListener('click', () => {
    const html = document.documentElement;
    const nextTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', nextTheme);
  });

  // H2H modal close
  const h2hBackdrop = document.getElementById('h2h-modal-backdrop');
  document.getElementById('btn-close-h2h').addEventListener('click', () => h2hBackdrop.classList.add('hidden'));
  h2hBackdrop.addEventListener('click', (e) => {
    if (e.target === h2hBackdrop) h2hBackdrop.classList.add('hidden');
  });

  // iPhone / Mobile PWA Modal & QR Code
  const mobileBackdrop = document.getElementById('mobile-modal-backdrop');
  const openMobileBtn = document.getElementById('btn-open-mobile');
  const closeMobileBtn = document.getElementById('btn-close-mobile');
  const shareUrlInput = document.getElementById('mobile-share-url');
  const copyUrlBtn = document.getElementById('btn-copy-mobile-url');
  const qrImg = document.getElementById('mobile-qr-img');

  if (openMobileBtn && mobileBackdrop) {
    openMobileBtn.addEventListener('click', () => {
      const appUrl = window.location.origin;
      if (shareUrlInput) shareUrlInput.value = appUrl;
      if (qrImg) {
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=8&data=${encodeURIComponent(appUrl)}`;
      }
      mobileBackdrop.classList.remove('hidden');
    });
  }
  if (closeMobileBtn && mobileBackdrop) {
    closeMobileBtn.addEventListener('click', () => mobileBackdrop.classList.add('hidden'));
    mobileBackdrop.addEventListener('click', (e) => {
      if (e.target === mobileBackdrop) mobileBackdrop.classList.add('hidden');
    });
  }
  if (copyUrlBtn && shareUrlInput) {
    copyUrlBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(shareUrlInput.value);
        copyUrlBtn.textContent = '✓ Copié !';
        setTimeout(() => {
          copyUrlBtn.textContent = "Copier l'URL";
        }, 2000);
      } catch (_) {}
    });
  }

  // Dynamically populate webhook destination with current public origin
  const whDestInput = document.getElementById('wh-destination');
  if (whDestInput && window.location.origin) {
    whDestInput.value = `${window.location.origin}/api/webhook/ingest`;
  }

  // Register Service Worker for iPhone / Mobile PWA support
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }

  // Keyboard shortcuts: Left / Right arrows to change day 1..15
  window.addEventListener('keydown', (e) => {
    if (e.target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
    if (e.key === 'ArrowLeft' && state.selectedDay > 1) {
      selectBashoAndDay(state.selectedBashoId, state.selectedDay - 1);
    } else if (e.key === 'ArrowRight' && state.selectedDay < 15) {
      selectBashoAndDay(state.selectedBashoId, state.selectedDay + 1);
    }
  });

  // Apply initial language & render
  applyLanguage(state.lang);
  initWebhooksCenter();

  // Load initial tournament (Aki Basho 202609 Day 8) & preload 2026 Yusho winners
  selectBashoAndDay(state.selectedBashoId, state.selectedDay);
  preload2026BashoMetadata();
}

document.addEventListener('DOMContentLoaded', initApp);
