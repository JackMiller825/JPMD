# QA report — cinematic rebuild (October 19, 2026)

## Commands
- `npm run lint` — TypeScript passed after the rebuild and again after the hero/FAQ fixes.
- `npm run build` with `GITHUB_PAGES=true` — Next.js 15.5.28 static export succeeded. Exported image and script URLs include the `/JPMD` prefix.
- `node scripts/build_asset_registry.js` — 65 files present under `public/assets/jpmd`. Every registry id is referenced by the page or layout.

## Browser checks
- Desktop hero at 1440px: headline and launch button sit inside the viewport (button ends near 1303px). Bull face and horns in the background remain visible. No horizontal overflow.
- Story: chapter artwork, five icons, and the mascot render. Copy is readable over the sky.
- FAQ: first answer expands. The placeholder rows inside `faq_panel.png` are covered by the solid list. Gold frame remains.
- Phone at 390px and 320px: overflow is 0. Mobile navigation replaces the desktop bar. The transparent bull is shown in full, including horns, over the right side of the street background.
- Terminal scenes A/B/C, disabled contract copy, and pending X/Telegram/Discord/swap states are present.
- No `<video>` tags.

## Not claimed
Supply, tax, liquidity, and ownership remain planned or unverified. No swap URL is active.
