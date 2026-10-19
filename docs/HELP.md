# JPM COIN ($JPMD) – Site Help

Last updated: October 19, 2026 · Version 2.1

## 1. Project identity
JPM COIN / $JPMD is presented as an independent Ethereum community meme-token concept. It is **not** JPMorgan Chase's official JPM Coin/JPMD deposit token, and must never claim bank issuance, sponsorship, USD redeemability, or association. Preserve the visible disclaimer in the hero, FAQ, and footer whenever editing.

## 2. Install and run

- Node 20+ recommended (Node 22 supported).
- Run `npm install`, `npm run dev` locally.
- `npm run build` uses Next.js static export and writes `out/`.
- `npm run lint` runs TypeScript's static typecheck, **not** Next's removed `next lint` command.
- This delivered ZIP contains source and assets but no `node_modules`.

## 3. Configure token details
Edit **only** `components/config.ts` for network, name, intended supply, tax, official links, and verified contract. Initially:

- `name`: JPM COIN; `symbol`: JPMD; `network`: Ethereum.
- `supply`: 1,000,000,000 (planned; confirm on-chain).
- Buy/sell tax: 0% planned; not contract-verified.
- `contractAddress`: empty. Empty contract disables copy and prevents active swap CTA.
- `liquidityStatus`: Not verified; `ownershipStatus`: Not verified.
- Social, DexTools/DexScreener, swap links: empty until verified.

Once deployed, check the **exact** deployed contract on Etherscan and verify ownership status, token permissions, and pool. Supply a proof transaction for burned liquidity and renouncement before changing either to confirmed. If the project reuses a contract mentioned elsewhere, verify the deployer controls that particular contract; do not auto-copy the address from ticker matches.

## 4. Sections / single-page navigation

| Route anchor | Purpose | Background file |
|---|---|---|
| `#home` | Cinematic title + launch status | `backgrounds/scene-1.webp` |
| `#story` | Three-part humorous finance story | `backgrounds/scene-2.webp` |
| `#floor` | Decorative **non-live** terminal + status | `backgrounds/scene-4.webp` |
| `#vault` | Token specification and verification status | `backgrounds/scene-3.webp` |
| `#buy` | Four-step guide (not active until verified) | `backgrounds/scene-6.webp` |
| `#community` | Global community + official socials | `backgrounds/scene-5.webp` |
| `#faq` | Clarifications & non-affiliation FAQ | `backgrounds/scene-6.webp` |

Every nav button uses smooth scrolling. No secondary pages. The animated progress bar follows document scroll. Active nav tracking uses current section intersection with the viewport.

## 5. Animations and accessibility

- Background art is **static WebP** for speed. Motion is section-specific and CSS/GSAP only: hero uses a slow scroll parallax; story cards stagger in; the terminal redraws its illustrative line when the scene switches; vault tiles stagger; how-to-buy cards are linked by arrows on wide screens; the community map pulses; FAQ answers expand.
- Display headlines use Cormorant Garamond. Interface text uses Outfit. Both are self-hosted by Next.js at build time.
- CSS also animates a secondary floating coin and headline ticker. There are no video tags, videos, GIF timelines, background videos, or video packages.
- `prefers-reduced-motion` disables decorative animations and uses normal scrolling.
- Mobile navigation, FAQ accordions, chart demo controls, and contract-copy button are keyboard operable.
- All market-visualization content in the terminal is illustrative, labeled **NOT LIVE**. Do not replace those placeholders with fake volume, price, or holder claims.

## 6. Images

- All six clean section backgrounds are **original vector-first** drawings exported at precisely **1920 × 1080 WebP**. Editable SVG versions are in `public/images/backgrounds/`.
- `logo-original.png`: original circular 1024×1024 PNG with RGBA transparency.
- `logo-original.svg`: editable logo master.
- `favicon.png`: 64×64 cropped logo.
- `social-banner.webp`: 1500×500, share/X usage.
- `telegram-banner.webp`: 1100×520, Telegram branding.
- `scripts/generate_art.py` recreates background WebPs and vector logo; `scripts/generate_banners.py` builds the banners.
- Old blurred concept crops were removed. Do not embed screenshots or section mockup images as live backgrounds.

## 7. Floki reference usage
Reference inspiration: https://floki.com/ . Do not reuse Floki logos, mascots, article text, or distinctive branded artwork. The codebase is original and does not ship the reference archive. It borrows only a multi-section, content-rich site approach.

## 8. Verify before launch

1. Check TypeScript and production build: `npm run lint && npm run build`.
2. Verify full navigation on desktop/mobile; FAQ control, simulated chart and copy button.
3. Confirm missing/unverified social links are shown as pending, never routed to a third-party.
4. Check wallet and swap links **only after the real contract is verified**.
5. Verify `out/` works as a static host and images resolve with selected `basePath`.
6. Review the non-affiliation disclaimer and the bank-name trademark risk before public publication.
7. Mobile Lighthouse and keyboard interaction tests.

## 9. Static hosting and GitHub Pages
`next.config.ts` uses `output: "export"`. A normal `npm run build` serves the site from the domain root.

The live site is the GitHub project Pages URL: https://jackmiller825.github.io/JPMD/

Pushes to `main` run `.github/workflows/pages.yml`. That workflow sets `GITHUB_PAGES=true`, which turns on `basePath` and `assetPrefix` of `/JPMD`, typechecks, exports `out/`, and publishes with GitHub Actions Pages. Do not commit `out/`. Local preview of that build must be opened under a `/JPMD/` path, because image and script URLs include the prefix. `publicAsset()` in `components/paths.ts` prefixes CSS and image URLs; Next does not add `basePath` to unoptimized images by itself.

## 10. Development completion rule
**Always update this HELP.md and `docs/ASSET_MANIFEST.json` with every feature, link, or artwork change.** A feature is not complete until its help entry and proof/limitations are documented.
