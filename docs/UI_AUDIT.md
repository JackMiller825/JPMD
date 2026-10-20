# UI audit — JPM COIN cinematic rebuild

Reviewed against the 65-image pack and the live section structure on October 19, 2026.

## What changed
- Scenic backgrounds are the approved JPEGs. The old `scene-*.webp` files are no longer referenced.
- Transparent subjects (bull, crystal, coins, vault door, icons, logo) use `object-fit: contain`.
- Opaque scenes (story stills, buy steps, community cards, banners) keep their aspect ratio with `object-fit: cover` inside a fixed frame.
- The desktop hero keeps the bull that is already painted into `hero_bg.jpg` and places the headline in the right-hand sky. `hero_bull.png` is the mobile subject so the horns are not cropped by a tall cover crop.
- The FAQ uses `faq_panel.png` as a single outer frame. The question list sits on a solid fill so the panel's placeholder rows are covered, and the rows themselves have no second border.
- Button skins are backgrounds on real `<button>` and `<a>` elements. Pending socials and the swap stay disabled until `components/config.ts` has official URLs.

## Asset roles
| Group | Role |
|---|---|
| Branding | Header logo, story mascot, Open Graph banner, downloadable Telegram banner |
| Hero | Background, mobile bull, crystal, coins, light, smoke, Wall St sign, glow overlay. Flag asset is in the registry and hidden where it covered the headline. |
| Story | Background, three chapter stills, five icons |
| Tokenomics | Vault background, door, coin stacks, data-panel illustration, five spec icons, trading-floor grid |
| How to buy | Background, four scenes, four icons, primary and secondary button skins |
| Community | Earth background, particles, people, X, Telegram, Discord, decorative chart and icons |
| FAQ | Library background, panel frame, plus, minus, grid texture |
| Footer | Skyline, small logo, Ethereum mark, divider, stars, light trails |

## Known visual limits
- `hero_flag.png` is loaded in the registry and omitted from the desktop stack because it sat on the headline. It remains available for a later placement.
- The FAQ panel artwork includes placeholder rows. Those rows are covered rather than shown as real questions.
- `data_panel.png` and `community_chart.png` contain decorative charts. Both are captioned as illustrations, not market data.
