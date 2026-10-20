# JPM COIN ($JPMD) – Site Help

Last updated: October 19, 2026 · Version 3.1

## 1. Project identity
JPM COIN / $JPMD is an independent Ethereum community meme-token concept. The public page no longer prints the non-affiliation disclaimer, the FAQ, or the footer legal block. Do not put those lines back unless the owner asks.

## 2. Install and run

- Node 20+ recommended (Node 22 supported).
- Run `npm install`, `npm run dev` locally.
- `npm run build` uses Next.js static export and writes `out/`.
- `npm run lint` runs TypeScript's static typecheck, **not** Next's removed `next lint` command.
- This delivered ZIP contains source and assets but no `node_modules`.

## 3. Configure token details
Edit **only** `components/config.ts` for network, name, intended supply, tax, official links, and verified contract. Initially:

- `name`: JPM COIN; `symbol`: JPMD; `network`: Ethereum.
- The vault displays: Total Supply: 1 Billion, Buy Tax: 0%, Sell Tax: 0%, LP Status: Burn, Ownership: Renounce, Network: Ethereum.
- `contractAddress`: empty until published. The field shows `Coming Soon..` and the Copy button still copies that text.
- Social, DexTools/DexScreener, and swap links stay empty until a real URL is set. Empty social cards show the name only, with no pending label. Discord is not on the page.

Once deployed, check the **exact** deployed contract on Etherscan and verify ownership status, token permissions, and pool. Supply a proof transaction for burned liquidity and renouncement before changing either to confirmed. If the project reuses a contract mentioned elsewhere, verify the deployer controls that particular contract; do not auto-copy the address from ticker matches.

## 4. Sections / single-page navigation

| Route anchor | Purpose | Background file |
|---|---|---|
| `#home` | Cinematic title + launch status | `backgrounds/scene-1.webp` |
| `#story` | Three-part humorous finance story | `backgrounds/scene-2.webp` |
| `#floor` | Decorative **non-live** terminal + status | `backgrounds/scene-4.webp` |
| `#vault` | Token specification and verification status | `backgrounds/scene-3.webp` |
| `#buy` | Four-step guide (not active until verified) | `backgrounds/scene-6.webp` |
| `#community` | Four images in one row. X and Telegram open the URLs in config when those fields are set. | `backgrounds/scene-5.webp` |

Every nav button uses smooth scrolling. No secondary pages. The animated progress bar follows document scroll. Active nav tracking uses current section intersection with the viewport.

## 5. Animations and accessibility

- Background art is the static JPEG/PNG pack, washed with a pale cream veil so type stays readable. Section scenes fade into each other, so the scroll reads as one page. Section images fade at the edges instead of sitting in bordered cards. Motion is section-specific and CSS/GSAP only: hero entrance plus slow desktop parallax; story chapters stagger; the terminal redraws when the scene switches; the vault door and spec cards reveal; buy steps progress; community cards rise. Phones skip the parallax scrub. There is no FAQ.
- Display headlines use Cormorant Garamond. Interface text uses Outfit. Both are self-hosted by Next.js at build time.
- CSS also animates a secondary floating coin and headline ticker. There are no video tags, videos, GIF timelines, background videos, or video packages.
- `prefers-reduced-motion` disables decorative animations and uses normal scrolling.
- Mobile navigation, chart demo controls, and the contract-copy button are keyboard operable. Copy works when the address is still unpublished.
- All market-visualization content in the terminal is illustrative, labeled **NOT LIVE**. Do not replace those placeholders with fake volume, price, or holder claims.

## 6. Images

The live site uses the 65-file pack in `public/assets/jpmd/`. The authoritative file list, dimensions, and alpha flags are in `docs/asset-pack/ASSET_MANIFEST.json`. Regenerate `components/assets.ts` with `node scripts/build_asset_registry.js` if that list changes.

- Scenic JPEGs use `background-size: cover` and a section focal position. Do not stretch square art into those backgrounds.
- Transparent PNGs (bull, crystal, coins, vault door, icons, logos) use `object-fit: contain`.
- The desktop hero uses the bull already painted into `02_hero/hero_bg.jpg` and keeps the headline on the right. Phones show `hero_bull.png` in full so the horns are not cropped.
- Buttons are drawn in CSS: a larger soft pill with a thin border. The button PNGs are not used as skins.
- The footer is a thin bar with a soft top edge: brand on the left, Back to top in the center, circular X and Telegram icons on the right. Those marks open `token.twitter` and `token.telegram` once the URLs are set.
- Earlier `public/images/backgrounds/scene-*.webp` files are retired and are not referenced.

Placement notes are in `docs/UI_AUDIT.md`.

## 7. Floki reference usage
Reference inspiration: https://floki.com/ . Do not reuse Floki logos, mascots, article text, or distinctive branded artwork. The codebase is original and does not ship the reference archive. It borrows only a multi-section, content-rich site approach.

## 8. Verify before launch

1. Check TypeScript and production build: `npm run lint && npm run build`.
2. Verify full navigation on desktop/mobile, the simulated chart, and the copy button with an empty contract.
3. Confirm empty social links are not routed anywhere and do not show a pending label.
4. Check wallet and swap links only after a real contract and swap URL are set.
5. Verify `out/` works as a static host and images resolve with selected `basePath`.

## 9. Static hosting and GitHub Pages
`next.config.ts` uses `output: "export"`. A normal `npm run build` serves the site from the domain root.

The live site is the GitHub project Pages URL: https://jackmiller825.github.io/JPMD/

Pushes to `main` run `.github/workflows/pages.yml`. That workflow sets `GITHUB_PAGES=true`, which turns on `basePath` and `assetPrefix` of `/JPMD`, typechecks, exports `out/`, and publishes with GitHub Actions Pages. Do not commit `out/`. Local preview of that build must be opened under a `/JPMD/` path, because image and script URLs include the prefix. `publicAsset()` in `components/paths.ts` prefixes CSS and image URLs; Next does not add `basePath` to unoptimized images by itself.

## 10. Development completion rule
**Always update this HELP.md and `docs/ASSET_MANIFEST.json` with every feature, link, or artwork change.** A feature is not complete until its help entry and proof/limitations are documented.
