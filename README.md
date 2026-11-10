# Threads — digital wardrobe

Private, offline-first wardrobe app. No account, no server, no monthly bill.
Your pieces are saved on the device (IndexedDB). Use **More → Save backup** to keep a copy in iCloud Drive / Files.

## Run on your computer
1. Install Node 20+ from nodejs.org
2. In this folder: `npm install` then `npm run dev`
3. Open http://localhost:3200

## Put it on your iPhone with GitHub Pages (free, no App Store, no $99)
1. Make a free account at github.com. Click **New repository**. Name it e.g. `threads`. Set it **Public** (free Pages needs public). Do not tick "add README".
2. Upload this project: on the new repo page click **uploading an existing file**, drag in everything from this folder (not `node_modules`), then **Commit**. Keep the `.github` folder. If drag-drop skips it, use GitHub Desktop or git instead.
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Open the **Actions** tab. Wait for "Deploy to GitHub Pages" to turn green (2-4 min). Re-run it from the tab if you forgot step 3.
5. Your app is at `https://YOUR-NAME.github.io/threads/`. On iPhone open it in **Safari** → Share → **Add to Home Screen**.

Every time you push to `main` it rebuilds and updates by itself.

Name the repo `YOUR-NAME.github.io` to get the shorter link `https://YOUR-NAME.github.io/`.

Privacy: the repo holds only code. Your closet never goes to GitHub, it stays on your phone. Do not upload your backup files (they are in `.gitignore`).

## Check it
- `npm run typecheck`
- `npm test`

## Where things are
- `app/lib/db.ts` storage + backup
- `app/lib/stylist.ts` outfit rules (weather, colour, occasion, freshness) and the "why" text
- `app/lib/weather.ts` optional live weather (Open-Meteo, free, asks location only when you tap it)
- `components/AppShell.tsx` navigation, bottom bar, center + button
- `app/dressme/page.tsx` swipe rows, lock, shuffle, stylist's pick

## Known limits
- Data lives per device. Two devices do not sync yet (use backup/restore).
- Stylist is rules, not a trained model. A real AI model can plug into `Look` in `stylist.ts` later.
- Old "online" code paths in `components/Store.tsx` are inert and can be deleted.
