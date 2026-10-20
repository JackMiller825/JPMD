# JPM COIN ($JPMD) – Site Help

Last updated: October 19, 2026 · Version 3.0

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

- Background art is the static JPEG/PNG pack. Motion is section-specific and CSS/GSAP only: hero entrance plus slow desktop parallax; story chapters stagger; the terminal redraws when the scene switches; the vault door and spec cards reveal; buy steps progress; community cards rise; FAQ answers expand. Phones skip the parallax scrub.
- Display headlines use Cormorant Garamond. Interface text uses Outfit. Both are self-hosted by Next.js at build time.
- CSS also animates a secondary floating coin and headline ticker. There are no video tags, videos, GIF timelines, background videos, or video packages.
- `prefers-reduced-motion` disables decorative animations and uses normal scrolling.
- Mobile navigation, FAQ accordions, chart demo controls, and contract-copy button are keyboard operable.
- All market-visualization content in the terminal is illustrative, labeled **NOT LIVE**. Do not replace those placeholders with fake volume, price, or holder claims.

## 6. Images

The live site uses the 65-file pack in `public/assets/jpmd/`. The authoritative file list, dimensions, and alpha flags are in `docs/asset-pack/ASSET_MANIFEST.json`. Regenerate `components/assets.ts` with `node scripts/build_asset_registry.js` if that list changes.

- Scenic JPEGs use `background-size: cover` and a section focal position. Do not stretch square art into those backgrounds.
- Transparent PNGs (bull, crystal, coins, vault door, icons, logos) use `object-fit: contain`.
- The desktop hero uses the bull already painted into `02_hero/hero_bg.jpg` and keeps the headline on the right. Phones show `hero_bull.png` in full so the horns are not cropped.
- `faq_panel.png` is the accordion frame only. Do not add a second CSS border on that panel.
- `btn_primary.png` and `btn_secondary.png` are skins on real buttons and links.
- Banners in `01_branding` are the social images and footer downloads. Do not crop their built-in type.
- Earlier `public/images/backgrounds/scene-*.webp` files are retired and are not referenced.

Placement notes are in `docs/UI_AUDIT.md`.

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
