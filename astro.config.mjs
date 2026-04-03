// @ts-check
import { execSync } from "node:child_process";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";

// Future-proof Git Hash detection for Cloudflare, GitHub, and Local
const getGitHash = () => {
  try {
    const hash =
      process.env.CF_PAGES_COMMIT_SHA || // Cloudflare Pages
      process.env.GITHUB_SHA || // GitHub Actions
      process.env.VERCEL_GIT_COMMIT_SHA || // Vercel
      execSync("git rev-parse HEAD").toString().trim();

    return hash.slice(0, 7);
  } catch {
    return "dev";
  }
};

const gitHash = getGitHash();
const buildTime = new Date().toISOString();

// https://astro.build/config
export default defineConfig({
  site: "https://ajmalbuv.pages.dev",
  integrations: [icon(), sitemap(), robotsTxt()],
  vite: {
    plugins: [/** @type {any} */ (tailwindcss())],
    build: {
      cssCodeSplit: false,
      assetsInlineLimit: 4096,
    },
    define: {
      "import.meta.env.PUBLIC_GIT_HASH": JSON.stringify(gitHash),
      "import.meta.env.PUBLIC_BUILD_TIME": JSON.stringify(buildTime),
    },
  },
  build: {
    assets: "assets",
  },
});
