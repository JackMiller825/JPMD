# Verification report — JPMD V2.1 (October 19, 2026)

**Validated**

- `npm run lint` (TypeScript) passed.
- `npm run build` with `GITHUB_PAGES=true` exported `out/` on Next.js 15.5.28. Script, style, image, favicon, and Open Graph URLs include the `/JPMD` prefix. Canonical URL is `https://jackmiller825.github.io/JPMD/`.
- Local preview of that export under `/JPMD/`: backgrounds and logo loaded, no horizontal overflow at 1164px, 390px, or 360px.
- Header smooth-scroll landed on The Story and marked it current. Mobile menu opened, closed after choosing Digital Vault, and landed on that section.
- Terminal Scene B stayed selected. FAQ accordion expanded to a readable answer. Contract copy stays disabled. Telegram and X render as pending labels, not outbound links.
- No `<video>` tags or video files in the site source.

**Still required before any trading link**

Confirm the token contract and deployer control, then set tax, supply, LP, and ownership only from on-chain proof in `components/config.ts`.
