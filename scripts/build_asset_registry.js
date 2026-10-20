const fs = require("fs");
const manifest = JSON.parse(
  fs.readFileSync("docs/asset-pack/ASSET_MANIFEST.json", "utf8")
);

const entries = manifest.files.map((file) => {
  const [width, height] = file.dimensions.split("x").map(Number);
  const id = file.filename.replace(/\.(png|jpe?g|webp)$/i, "");
  const fit = file.conversion === "contain" ? "contain" : "cover";
  return `  ${id}: { section: ${JSON.stringify(file.section)}, file: ${JSON.stringify(file.filename)}, src: ${JSON.stringify(file.public_url)}, width: ${width}, height: ${height}, alpha: ${file.has_alpha ? "true" : "false"}, fit: ${JSON.stringify(fit)} },`;
});

const out = `import { publicAsset } from "./paths";

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
${entries.join("\n")}
} as const;

export type AssetId = keyof typeof assets;

export function assetSrc(id: AssetId): string {
  return publicAsset(assets[id].src);
}

export const assetCount = Object.keys(assets).length;
`;

fs.writeFileSync("components/assets.ts", out);
const missing = manifest.files.filter((file) => !fs.existsSync(file.relative_path));
console.log(`wrote ${manifest.files.length} assets; missing ${missing.length}`);
if (missing.length) {
  missing.forEach((file) => console.log(file.relative_path));
  process.exit(1);
}
