# JPM COIN ($JPMD) — Cinematic Video-Free Next.js Website

## Quick start
```bash
npm install
npm run dev
```
Then open http://localhost:3000 . Production export: `npm run lint && npm run build` → `out/`.

Stack: Next.js 15 / React 19 / TypeScript / GSAP / Lucide icons / CSS.

Seven connected sections, original 1920×1080 static backgrounds, premium SVG coin emblem, responsive mobile design, semantic FAQ, scrolling effects, illustrative *non-live* trading terminal, and full documentation. **No videos or video dependencies.**

## Important setup
1. `components/config.ts` — supply confirmed official contract, verified DEX pool, Telegram, X, swap URLs and update proof-dependent statuses only when available.
2. `docs/HELP.md` — complete operation, feature, risk/brand rules, and deployment guidance.
3. `docs/ASSET_MANIFEST.json` — exact assets, dimensions, purposes.
4. `docs/CURSOR_PROMPT.md` — full continuation/build instructions.

### Brand and risk boundary
JPM COIN/$JPMD is independently conceived and **not** issued, backed, endorsed, or approved by JPMorgan Chase, Kinexys, or any affiliate; not redeemable for a dollar. No assumption that any same-ticker JPMD contract is official. Verify the token contract independently before publishing any swap link.

### Deployment notes
The repo sets `output: 'export'` for static hosting. A root-domain build leaves `basePath` empty.

Live site: https://jackmiller825.github.io/JPMD/

Every push to `main` publishes that URL through `.github/workflows/pages.yml`. The workflow build sets `GITHUB_PAGES=true`, which applies `basePath` `/JPMD`. Pages updates usually appear within a couple of minutes of the push.
