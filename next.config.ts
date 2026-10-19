import type { NextConfig } from "next";

const repository = "JPMD";
const githubPages = process.env.GITHUB_PAGES === "true";
const basePath = githubPages ? `/${repository}` : "";

const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default config;
