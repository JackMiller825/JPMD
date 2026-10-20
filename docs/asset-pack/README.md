# JPM COIN / $JPMD — Complete 65-image Website Assets

Exactly **65 production image assets** are organized into eight numbered section folders beneath `public/assets/jpmd/`. Copy the `public` folder into the root of your Next.js project.

## Sections

- 01_branding — 4 images
- 02_hero — 9 images
- 03_story — 9 images
- 04_tokenomics — 10 images
- 05_how_to_buy — 11 images
- 06_community — 11 images
- 07_faq — 5 images
- 08_footer_ui — 6 images

## Implementation notes

1. Use exact paths provided by `ASSET_MANIFEST.json` / `.csv`.
2. Hero background includes a bull **already in the base art**. Use either the composed background alone or a clean gradient/background behind `hero_bull.png`, but DO NOT overlay both if it duplicates the bull.
3. Transparent PNGs are kept as independent layers. Some trading/card assets intentionally have dark built-in scene backgrounds; do not treat every PNG as transparent. Check `has_alpha` in the manifest.
4. Put all text, numerical claims, buttons, navigation, borders, FAQ interactions, and social links in HTML/CSS, not in decorative raster elements. Buttons `btn_primary.png` and `btn_secondary.png` are decorative skins: the text must remain editable, the real button must retain keyboard and hover/focus support.
5. Avoid duplicate borders. FAQ accordion and decorative panels have border-like artwork: choose one visible border source, not two stacked ones. Use `background-size: cover` only on scenic backplates; on transparent subjects and icons, use `object-fit: contain`.
6. For section boundaries, use shared dark navy background and overlapping or mask-gradient fades, plus `overflow-x: clip` on page wrappers to avoid one-pixel seams and horizontal scroll. Use mobile-specific layout positioning and CSS rather than forcing desktop images into a distorted ratio.
7. The small footer logo was derived directly from the **same main logo** (`01_branding/logo_circle.png`) to avoid the mismatch you reported.
8. No videos are included.

**Important:** $JPMD is treated as an independent meme-token brand, not as JPMorgan's bank-issued deposit token. Do not imply any official JPMorgan affiliation, deposit backing, or redemption rights. Render tax, LP burn, ownership renouncement, and other status claims as verified only when supported by actual on-chain evidence.
