# CURSOR — Finish JPM COIN / $JPMD as a cinematic video-free single-page experience

You are working inside an existing Next.js App Router 15 / React 19 / TypeScript project. **Inspect README.md, docs/HELP.md, docs/ASSET_MANIFEST.json, package.json, app/page.tsx, app/globals.css, components/config.ts, scripts and public assets before making changes.** Preserve useful working code. Do not replace with plain static HTML.

## Goals and quality bar
- One ultra-polished, animated, fast single-page Ethereum meme-token website based on the original **JPM COIN / $JPMD** identity; Floki.com is only a reference for richness and section organization, not a pixel-for-pixel clone.
- **NO VIDEOS** in the site or build output. No `<video>`, MP4, Lottie video or remote hosted moving backgrounds. Images are static; movement is CSS/GSAP/inline SVG and optional lightweight Canvas when justified.
- All token numbers, contract, official links editable through `components/config.ts`. Do not fabricate prices, transaction statistics, endorsements, LP burns, ownership renounce confirmations, or official links.
- No JPMorgan logos, official-bank visual identity, or endorsement claims. JPM COIN ($JPMD) is a **distinct independent memecoin**. Keep the prominent non-affiliation/legal disclaimer in hero/FAQ/footer.

## Current assets and mapping
See docs/ASSET_MANIFEST.json and docs/HELP.md. Six clean 1920x1080 WebP backgrounds at `public/images/backgrounds/scene-1.webp` ... `scene-6.webp`, plus matching editable SVG. `logo-original.png` (1024px alpha), `logo-original.svg`, `favicon.png`, 1500x500 social-banner and 1100x520 telegram-banner. Do not use old composite layout screenshots as backgrounds; previews are references only.

## Page architecture
1. Home — dramatic large serif statement, finance skyline and custom floating emblem, primary scroll CTAs; clear disclosure.
2. Story — funny three-chapter Wall Street-to-Ethereum story cards with carefully staged scroll reveals; long, original narrative.
3. Trading floor — premium interactive pseudo-terminal clearly marked *ILLUSTRATION — NOT LIVE*, configurable links only after pool verification.
4. Digital vault — visually rich 1B planned supply, planned tax and verification-dependent LP/ownership, copyable contract only if present.
5. How to buy — four-step illustration; no live swap CTA until verified contract and URL.
6. Community — dramatic global-finance visual and official-link placeholders, no fake membership counts.
7. FAQ & footer — accessible accordions, explicit non-affiliation and risk disclosure.
Header links all smooth-scroll to corresponding sections; never create additional pages.

## Visual and animation precision
- Palette: #050A12 midnight, #122439 steel navy, #E8BA73 gold, #FFDEA0 highlight, #74C7EF Ethereum blue, delicate fine lines.
- Distinct motion identities per section: hero low-frequency parallax; story staggered reveals; terminal chart mode switch; vault card stagger; onboarding arrows; global network pulses; FAQ accordion. Reduced-motion support required.
- Typography: rich display-serif headlines combined with legible technical sans interface; polished spacing and responsiveness at 360, 768, 1024, 1440, 1920 widths.
- Avoid gradients-only backgrounds; use the shipped clean vector-first artwork.
- Every interaction must work. No decorative button pretending to act. Buttons with unavailable information should explicitly say "PENDING" or navigate to verified status sections.

## Engineering and launch readiness
- npm install, npm run lint, npm run build. Fix all actual warnings/errors.
- Keep static export (`out/`) working; configure basePath if deployed as a GitHub Pages project path. Never hardcode fake CA.
- Add SEO, social OG image, favicon, mobile navigation, performance-sensitive image loading, semantic accessible markup and visible focus states.
- Document all future changes in docs/HELP.md and docs/ASSET_MANIFEST.json **in the same commit**; do not finish feature work without synchronizing documentation.
- Verify in browser with desktop/mobile screenshots against concept; check buttons, links, anchor scrolling, accordion, progress meter and layout overflow.
- Preserve no-video constraint. Explicitly report any remaining issue rather than pretending validation completed.
