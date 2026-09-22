# 🏮 SumoStats 2026 — Grand Sumo Live Torikumi, Banzuke, Hoshitori & Webhooks

Application web bilingue (**Français 🇫🇷 / Anglais 🇬🇧**) et **Progressive Web App (PWA)** dédiée au suivi en temps réel des 6 tournois officiels de Grand Sumo (*Honbasho*) de la saison **2026**, propulsée par [sumo-api.com](https://www.sumo-api.com) et inspirée de [sumostats.com](https://sumostats.com).

---

## ✨ Fonctionnalités Principales

- **Calendrier 2026 Complet (6 Honbasho)** : Hatsu (Janvier), Haru (Mars), Natsu (Mai), Nagoya (Juillet), Aki (Septembre) et Kyushu (Novembre), avec navigation jour par jour (**Jours 1 à 15 / Senshuraku**).
- **3 Vues Analytiques Complémentaires** :
  1. **Combats du Jour (Torikumi)** : Résultats Est vs Ouest, techniques victorieuses (*Kimarite*), face-à-face historique (*Head-to-Head*) et mode **Anti-Spoiler**.
  2. **Grille Hoshitori (15 Jours)** : Matrice complète des 15 journées (`●` Victoire, `○` Défaite, `■`/`□` Fusen) avec détection automatique du **Kachi-koshi (8+)** et **Make-koshi**.
  3. **Classement du Tournoi (Course au Yūshō)** : Podium en temps réel, filtres *Course au titre / Sanyaku / Kachi-koshi*, série en cours (*Streak*) et barre de progression des 15 jours.
- **Centre Webhooks Sumo-API (`HMAC-SHA256` + Flux SSE)** :
  - Récepteur officiel `POST /api/webhook/ingest` vérifiant la signature cryptographique `X-Webhook-Signature`.
  - Diffusion instantanée aux navigateurs connectés via **Server-Sent Events (`GET /api/webhook/stream`)**.
- **Support iPhone / iOS Natif (PWA)** :
  - Installable sur l'écran d'accueil iPhone (*"Sur l'écran d'accueil"*) en mode plein écran (`standalone`) avec prise en charge de la Dynamic Island (`viewport-fit=cover`) et QR Code intégré.

---

## 🚀 Exécution Locale

Aucune dépendance externe lourde n'est requise (serveur Node.js natif haute performance) :

```bash
npm start
# Serveur disponible sur http://localhost:8080
```

---

## ☁️ Déploiement 24/24 sur Google Cloud Run (`europe-west9`)

```bash
gcloud run deploy sumostats \
  --source . \
  --region europe-west9 \
  --allow-unauthenticated \
  --min-instances 1 \
  --max-instances 3 \
  --port 8080
```
