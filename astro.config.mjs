// @ts-check
import { execSync } from 'node:child_process';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';
import icon from 'astro-icon';
import llms from 'astro-llms-md';
import robotsTxt from 'astro-robots-txt';

// Future-proof Git Hash detection for Cloudflare, GitHub, and Local
const getGitHash = () => {
  try {
    const hash =
      process.env.CF_PAGES_COMMIT_SHA || // Cloudflare Pages
      process.env.GITHUB_SHA || // GitHub Actions
      process.env.VERCEL_GIT_COMMIT_SHA || // Vercel
      execSync('git rev-parse HEAD').toString().trim();

    return hash.slice(0, 7);
  } catch {
    return 'dev';
  }
};

const gitHash = getGitHash();
const buildTime = new Date().toISOString();
process.env.PUBLIC_GIT_HASH = gitHash;
process.env.PUBLIC_BUILD_TIME = buildTime;

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE || 'https://ajmalbuv.pages.dev',
  env: {
    schema: {
      PUBLIC_GIT_HASH: envField.string({
        context: 'client',
        access: 'public',
        default: gitHash,
      }),
      PUBLIC_BUILD_TIME: envField.string({
        context: 'client',
        access: 'public',
        default: buildTime,
      }),
      PUBLIC_EMAILJS_PUBLIC_KEY: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_EMAILJS_SERVICE_ID: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_EMAILJS_TEMPLATE_ID: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
    },
  },
  integrations: [icon(), sitemap(), robotsTxt()],
  vite: {
    plugins: [tailwindcss(), llms()],
    build: {
      cssCodeSplit: false,
      assetsInlineLimit: 4096,
    },
  },
  build: {
    assets: 'assets',
  },
});
