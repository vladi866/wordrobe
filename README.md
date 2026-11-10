# Threads — digital wardrobe

Private, offline-first wardrobe app. No account, no server, no monthly bill.
Your pieces are saved on the device (IndexedDB). Use **More → Save backup** to keep a copy in iCloud Drive / Files.

## Run on your computer
1. Install Node 20+ from nodejs.org
2. In this folder: `npm install` then `npm run dev`
3. Open http://localhost:3200

## Put it on your iPhone with GitHub Pages (free, no App Store, no $99)
1. Make a free account at github.com. Click **New repository**. Name it e.g. `threads`. Set it **Public** (free Pages needs public). Do not tick "add README".
2. Upload this project: on the new repo page click **uploading an existing file**, drag in **everything from this folder** (not `node_modules`), then **Commit**. Keep the `.github` folder — especially `.github/workflows/deploy.yml`. If drag-drop skips hidden folders, use GitHub Desktop or git instead.
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. **Settings → Actions → General → Workflow permissions**: set to **Read and write permissions**, then Save.
5. Do **not** add GitHub’s generic “Next.js” workflow. Use only `deploy.yml` from this repo.
6. Open the **Actions** tab. Wait for **Deploy to GitHub Pages** to turn green (2–4 min). Re-run it if needed.
7. Your app is at `https://YOUR-NAME.github.io/threads/`. On iPhone open it in **Safari** → Share → **Add to Home Screen**.

Every time you push to `main` it rebuilds and updates by itself.

Name the repo `YOUR-NAME.github.io` to get the shorter link `https://YOUR-NAME.github.io/`.

Privacy: the repo holds only code. Your closet never goes to GitHub, it stays on your phone. Do not upload your backup files (they are in `.gitignore`).

## Features
- Offline PWA, IndexedDB storage, background cut-out on photos
- Dress me: weather + occasion stylist with “why” reasons
- Planner, packing lists, outfits, wishlist, moodboards, stats
- **Wash tracking** — wears since last wash, defaults by category, “Needs wash” filter and badges
- **Extra photos** per item (up to 4 additional)
- **Preference learning** — outfit star ratings gently steer future suggestions (colours / categories)
- Brand insights, condition history, rotation schedule, shopping list

## Check it
- `npm run typecheck`
- `npm test`

## Where things are
- `app/lib/db.ts` storage + backup
- `app/lib/stylist.ts` outfit rules (weather, colour, occasion, freshness, wash, learned prefs)
- `app/lib/wash.ts` wash intervals and helpers
- `app/lib/weather.ts` optional live weather (Open-Meteo)
- `components/AppShell.tsx` navigation, bottom bar, center + button
- `app/dressme/page.tsx` swipe rows, lock, shuffle, stylist’s pick
- `.github/workflows/deploy.yml` GitHub Pages static deploy

## Known limits
- Data lives per device. Two devices do not sync yet (use backup/restore).
- Stylist is rules + light preference learning, not a trained model.
- Optional cloud AI photo modeling (like tandpfun/wardrobe) is not bundled — needs an API key and can be added later.
