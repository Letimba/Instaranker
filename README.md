# InstaRanker

This is the full-stack InstaRanker project, featuring:
- PostgreSQL database with schema for categories, profiles, profile_stats, and blog_posts.
- Backend: Node.js + Express.js + TypeScript, with daily cron updates.
- Frontend: Next.js 14 + App Router + TypeScript + Tailwind CSS.
- Docker setup for local development.

## Getting Started

1. Copy `.env.example` to `.env` in `backend/` and set your environment variables.
2. Run `docker-compose up --build`
3. Backend API: http://localhost:4000
4. Frontend: http://localhost:3000

Perfekt, Letimba! Dann bekommst du hier das vollständig vorbereitete Mobile Deploy Toolkit mit deinem GitHub-Benutzernamen eingebettet. Damit kannst du InstaRanker direkt vom Handy deployen, ohne manuell konfigurieren zu müssen.


---

🚀 Schnell-Deploy Buttons (Copy-Paste für dein GitHub-README)

Füge folgenden Abschnitt in dein README.md ein:

## 🚀 InstaRanker Mobile Deploy Toolkit

### 🔷 Frontend (Next.js) auf Vercel deployen
[![Deploy Frontend to Vercel](https://vercel.com/button)](https://vercel.com/new/deploy?template=https://github.com/Letimba/instaranker&directory=frontend)

### 🔶 Backend (Node.js API) auf Render deployen
[![Deploy Backend to Render](https://render.com/images/deploy-button.svg)](https://render.com/deploy/github/Letimba/instaranker/tree/main/backend)

Damit kannst du vom Handy einfach per Klick starten – keine manuelle CLI nötig.


---

🧠 Optional: Automatischer CI/CD Workflow

Wenn du magst, füge in dein Repo noch folgenden GitHub Actions Workflow ein (Datei: .github/workflows/deploy.yml):

name: Auto Deploy to Vercel (Frontend)

on:
  push:
    branches: [ main ]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy Frontend
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: frontend
          vercel-args: '--prod'

🛡️ Dafür musst du in deinem GitHub-Repo unter Settings > Secrets folgendes einfügen:

Key	Wert bekommst du unter...

VERCEL_TOKEN	Vercel Dashboard → Account Settings
VERCEL_PROJECT_ID	Im Projekt → Settings → General
VERCEL_ORG_ID	Siehe ebenfalls im Dashboard



---

📦 Beispielhafte Struktur des Repos

instaranker/
├── frontend/       <-- Next.js App
├── backend/        <-- Express.js API
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docker-compose.yml
└── README.md       <-- Enthält Deploy-Buttons


---

📲 Letimba’s mobiler Deployment Flow

1. Entpacke ZIP → Lade Inhalt zu GitHub.com/Letimba/instaranker hoch


2. Öffne die Deploy-Buttons direkt im Handy-Browser


3. Vercel → Frontend live


4. Render → Backend mit DB live


5. Fertig – Domain teilen & ranken lassen 💥




---

Wenn du willst, kann ich dir:

Einen vorbereiteten Repo-Export mit allem drin

Einen Auto-Installer für Seed-Daten und Dummy-Profiles

Einen mobilen Admin-Dashboard-Link


bauen. Einfach sagen: „Erstelle InstaRanker GitHub Repo mit allem Setup“ – und du bekommst alles klickfertig.

