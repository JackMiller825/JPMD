import { publicAsset } from "./paths";

export type AssetFit = "cover" | "contain";

export type AssetRecord = {
  section: string;
  file: string;
  src: string;
  width: number;
  height: number;
  alpha: boolean;
  fit: AssetFit;
};

export const assets = {
  logo_circle: { section: "01_branding", file: "logo_circle.png", src: "/assets/jpmd/01_branding/logo_circle.png", width: 1024, height: 1024, alpha: true, fit: "contain" },
  mascot_main: { section: "01_branding", file: "mascot_main.png", src: "/assets/jpmd/01_branding/mascot_main.png", width: 1024, height: 1024, alpha: true, fit: "contain" },
  banner_1500x500: { section: "01_branding", file: "banner_1500x500.png", src: "/assets/jpmd/01_branding/banner_1500x500.png", width: 1500, height: 500, alpha: false, fit: "cover" },
  tg_banner_1100x520: { section: "01_branding", file: "tg_banner_1100x520.png", src: "/assets/jpmd/01_branding/tg_banner_1100x520.png", width: 1100, height: 520, alpha: false, fit: "cover" },
  hero_bg: { section: "02_hero", file: "hero_bg.jpg", src: "/assets/jpmd/02_hero/hero_bg.jpg", width: 1920, height: 1080, alpha: false, fit: "cover" },
  hero_bull: { section: "02_hero", file: "hero_bull.png", src: "/assets/jpmd/02_hero/hero_bull.png", width: 800, height: 800, alpha: true, fit: "contain" },
  hero_eth: { section: "02_hero", file: "hero_eth.png", src: "/assets/jpmd/02_hero/hero_eth.png", width: 600, height: 800, alpha: true, fit: "contain" },
  hero_wallstreet: { section: "02_hero", file: "hero_wallstreet.png", src: "/assets/jpmd/02_hero/hero_wallstreet.png", width: 800, height: 400, alpha: true, fit: "contain" },
  hero_coins: { section: "02_hero", file: "hero_coins.png", src: "/assets/jpmd/02_hero/hero_coins.png", width: 800, height: 600, alpha: true, fit: "contain" },
  hero_flag: { section: "02_hero", file: "hero_flag.png", src: "/assets/jpmd/02_hero/hero_flag.png", width: 600, height: 400, alpha: true, fit: "contain" },
  hero_smoke: { section: "02_hero", file: "hero_smoke.png", src: "/assets/jpmd/02_hero/hero_smoke.png", width: 800, height: 600, alpha: true, fit: "contain" },
  hero_light: { section: "02_hero", file: "hero_light.png", src: "/assets/jpmd/02_hero/hero_light.png", width: 800, height: 600, alpha: true, fit: "contain" },
  hero_overlay: { section: "02_hero", file: "hero_overlay.png", src: "/assets/jpmd/02_hero/hero_overlay.png", width: 1920, height: 1080, alpha: true, fit: "cover" },
  story_bg: { section: "03_story", file: "story_bg.jpg", src: "/assets/jpmd/03_story/story_bg.jpg", width: 1920, height: 1080, alpha: false, fit: "cover" },
  story_1: { section: "03_story", file: "story_1.png", src: "/assets/jpmd/03_story/story_1.png", width: 800, height: 600, alpha: false, fit: "cover" },
  story_2: { section: "03_story", file: "story_2.png", src: "/assets/jpmd/03_story/story_2.png", width: 800, height: 600, alpha: false, fit: "cover" },
  story_3: { section: "03_story", file: "story_3.png", src: "/assets/jpmd/03_story/story_3.png", width: 800, height: 600, alpha: false, fit: "cover" },
  icon_tradition: { section: "03_story", file: "icon_tradition.png", src: "/assets/jpmd/03_story/icon_tradition.png", width: 512, height: 512, alpha: true, fit: "contain" },
  icon_innovation: { section: "03_story", file: "icon_innovation.png", src: "/assets/jpmd/03_story/icon_innovation.png", width: 512, height: 512, alpha: true, fit: "contain" },
  icon_community: { section: "03_story", file: "icon_community.png", src: "/assets/jpmd/03_story/icon_community.png", width: 512, height: 512, alpha: true, fit: "contain" },
  icon_ethereum: { section: "03_story", file: "icon_ethereum.png", src: "/assets/jpmd/03_story/icon_ethereum.png", width: 512, height: 512, alpha: true, fit: "contain" },
  icon_growth: { section: "03_story", file: "icon_growth.png", src: "/assets/jpmd/03_story/icon_growth.png", width: 512, height: 512, alpha: true, fit: "contain" },
  tokenomics_bg: { section: "04_tokenomics", file: "tokenomics_bg.jpg", src: "/assets/jpmd/04_tokenomics/tokenomics_bg.jpg", width: 1920, height: 1080, alpha: false, fit: "cover" },
  vault_door: { section: "04_tokenomics", file: "vault_door.png", src: "/assets/jpmd/04_tokenomics/vault_door.png", width: 800, height: 800, alpha: true, fit: "contain" },
  coin_stack: { section: "04_tokenomics", file: "coin_stack.png", src: "/assets/jpmd/04_tokenomics/coin_stack.png", width: 800, height: 600, alpha: true, fit: "contain" },
  data_panel: { section: "04_tokenomics", file: "data_panel.png", src: "/assets/jpmd/04_tokenomics/data_panel.png", width: 800, height: 600, alpha: true, fit: "contain" },
  icon_supply: { section: "04_tokenomics", file: "icon_supply.png", src: "/assets/jpmd/04_tokenomics/icon_supply.png", width: 512, height: 512, alpha: true, fit: "contain" },
  icon_tax: { section: "04_tokenomics", file: "icon_tax.png", src: "/assets/jpmd/04_tokenomics/icon_tax.png", width: 512, height: 512, alpha: true, fit: "contain" },
  icon_burn: { section: "04_tokenomics", file: "icon_burn.png", src: "/assets/jpmd/04_tokenomics/icon_burn.png", width: 512, height: 512, alpha: true, fit: "contain" },
  icon_renounce: { section: "04_tokenomics", file: "icon_renounce.png", src: "/assets/jpmd/04_tokenomics/icon_renounce.png", width: 512, height: 512, alpha: true, fit: "contain" },
  icon_contract: { section: "04_tokenomics", file: "icon_contract.png", src: "/assets/jpmd/04_tokenomics/icon_contract.png", width: 512, height: 512, alpha: true, fit: "contain" },
  bg_grid: { section: "04_tokenomics", file: "bg_grid.png", src: "/assets/jpmd/04_tokenomics/bg_grid.png", width: 800, height: 600, alpha: false, fit: "cover" },
  buy_bg: { section: "05_how_to_buy", file: "buy_bg.jpg", src: "/assets/jpmd/05_how_to_buy/buy_bg.jpg", width: 1920, height: 1080, alpha: false, fit: "cover" },
  step1_wallet: { section: "05_how_to_buy", file: "step1_wallet.png", src: "/assets/jpmd/05_how_to_buy/step1_wallet.png", width: 800, height: 600, alpha: false, fit: "cover" },
  step2_eth: { section: "05_how_to_buy", file: "step2_eth.png", src: "/assets/jpmd/05_how_to_buy/step2_eth.png", width: 800, height: 600, alpha: false, fit: "cover" },
  step3_swap: { section: "05_how_to_buy", file: "step3_swap.png", src: "/assets/jpmd/05_how_to_buy/step3_swap.png", width: 800, height: 600, alpha: false, fit: "cover" },
  step4_complete: { section: "05_how_to_buy", file: "step4_complete.png", src: "/assets/jpmd/05_how_to_buy/step4_complete.png", width: 800, height: 600, alpha: false, fit: "cover" },
  icon_wallet: { section: "05_how_to_buy", file: "icon_wallet.png", src: "/assets/jpmd/05_how_to_buy/icon_wallet.png", width: 512, height: 512, alpha: false, fit: "cover" },
  icon_eth: { section: "05_how_to_buy", file: "icon_eth.png", src: "/assets/jpmd/05_how_to_buy/icon_eth.png", width: 512, height: 512, alpha: false, fit: "cover" },
  icon_swap: { section: "05_how_to_buy", file: "icon_swap.png", src: "/assets/jpmd/05_how_to_buy/icon_swap.png", width: 512, height: 512, alpha: false, fit: "contain" },
  icon_check: { section: "05_how_to_buy", file: "icon_check.png", src: "/assets/jpmd/05_how_to_buy/icon_check.png", width: 512, height: 512, alpha: false, fit: "contain" },
  btn_primary: { section: "05_how_to_buy", file: "btn_primary.png", src: "/assets/jpmd/05_how_to_buy/btn_primary.png", width: 600, height: 200, alpha: false, fit: "contain" },
  btn_secondary: { section: "05_how_to_buy", file: "btn_secondary.png", src: "/assets/jpmd/05_how_to_buy/btn_secondary.png", width: 600, height: 200, alpha: true, fit: "contain" },
  community_bg: { section: "06_community", file: "community_bg.jpg", src: "/assets/jpmd/06_community/community_bg.jpg", width: 1920, height: 1080, alpha: false, fit: "cover" },
  community_people: { section: "06_community", file: "community_people.png", src: "/assets/jpmd/06_community/community_people.png", width: 800, height: 600, alpha: false, fit: "cover" },
  community_twitter: { section: "06_community", file: "community_twitter.png", src: "/assets/jpmd/06_community/community_twitter.png", width: 800, height: 600, alpha: false, fit: "cover" },
  community_telegram: { section: "06_community", file: "community_telegram.png", src: "/assets/jpmd/06_community/community_telegram.png", width: 800, height: 600, alpha: false, fit: "cover" },
  community_discord: { section: "06_community", file: "community_discord.png", src: "/assets/jpmd/06_community/community_discord.png", width: 800, height: 600, alpha: false, fit: "cover" },
  community_chart: { section: "06_community", file: "community_chart.png", src: "/assets/jpmd/06_community/community_chart.png", width: 800, height: 600, alpha: false, fit: "cover" },
  icon_x: { section: "06_community", file: "icon_x.png", src: "/assets/jpmd/06_community/icon_x.png", width: 512, height: 512, alpha: false, fit: "cover" },
  icon_telegram: { section: "06_community", file: "icon_telegram.png", src: "/assets/jpmd/06_community/icon_telegram.png", width: 512, height: 512, alpha: false, fit: "cover" },
  icon_discord: { section: "06_community", file: "icon_discord.png", src: "/assets/jpmd/06_community/icon_discord.png", width: 512, height: 512, alpha: false, fit: "cover" },
  icon_chart: { section: "06_community", file: "icon_chart.png", src: "/assets/jpmd/06_community/icon_chart.png", width: 512, height: 512, alpha: false, fit: "cover" },
  bg_particles: { section: "06_community", file: "bg_particles.png", src: "/assets/jpmd/06_community/bg_particles.png", width: 1920, height: 1080, alpha: false, fit: "cover" },
  faq_bg: { section: "07_faq", file: "faq_bg.jpg", src: "/assets/jpmd/07_faq/faq_bg.jpg", width: 1920, height: 1080, alpha: false, fit: "cover" },
  faq_panel: { section: "07_faq", file: "faq_panel.png", src: "/assets/jpmd/07_faq/faq_panel.png", width: 800, height: 600, alpha: true, fit: "cover" },
  icon_plus: { section: "07_faq", file: "icon_plus.png", src: "/assets/jpmd/07_faq/icon_plus.png", width: 256, height: 256, alpha: true, fit: "cover" },
  icon_minus: { section: "07_faq", file: "icon_minus.png", src: "/assets/jpmd/07_faq/icon_minus.png", width: 256, height: 256, alpha: true, fit: "cover" },
  bg_faq_grid: { section: "07_faq", file: "bg_faq_grid.png", src: "/assets/jpmd/07_faq/bg_faq_grid.png", width: 800, height: 600, alpha: false, fit: "cover" },
  footer_bg: { section: "08_footer_ui", file: "footer_bg.jpg", src: "/assets/jpmd/08_footer_ui/footer_bg.jpg", width: 1920, height: 600, alpha: false, fit: "cover" },
  icon_logo_small: { section: "08_footer_ui", file: "icon_logo_small.png", src: "/assets/jpmd/08_footer_ui/icon_logo_small.png", width: 256, height: 256, alpha: true, fit: "contain" },
  icon_eth_small: { section: "08_footer_ui", file: "icon_eth_small.png", src: "/assets/jpmd/08_footer_ui/icon_eth_small.png", width: 256, height: 256, alpha: true, fit: "cover" },
  divider: { section: "08_footer_ui", file: "divider.png", src: "/assets/jpmd/08_footer_ui/divider.png", width: 800, height: 200, alpha: true, fit: "cover" },
  bg_stars: { section: "08_footer_ui", file: "bg_stars.png", src: "/assets/jpmd/08_footer_ui/bg_stars.png", width: 1920, height: 1080, alpha: false, fit: "cover" },
  bg_lightline: { section: "08_footer_ui", file: "bg_lightline.png", src: "/assets/jpmd/08_footer_ui/bg_lightline.png", width: 1920, height: 400, alpha: false, fit: "cover" },
} as const;

export type AssetId = keyof typeof assets;

export function assetSrc(id: AssetId): string {
  return publicAsset(assets[id].src);
}

export const assetCount = Object.keys(assets).length;
