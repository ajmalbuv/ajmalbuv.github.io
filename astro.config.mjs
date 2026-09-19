import { execSync } from 'node:child_process';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
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

/**
 * Automatically calculates SHA-256 hashes for inline styles & scripts (JSON-LD)
 * and updates dist/_headers so strict CSP passes seamlessly without 'unsafe-inline'.
 *
 * @returns {import('astro').AstroIntegration}
 */
function inlineCsp() {
  return {
    name: 'inline-csp',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const outDir = fileURLToPath(dir);
        const headersPath = path.join(outDir, '_headers');
        if (!fs.existsSync(headersPath)) return;

        /** @type {string[]} */
        const htmlFiles = [];
        /** @param {string} d */
        function scan(d) {
          for (const item of fs.readdirSync(d, { withFileTypes: true })) {
            const full = path.join(d, item.name);
            if (item.isDirectory()) scan(full);
            else if (item.isFile() && item.name.endsWith('.html'))
              htmlFiles.push(full);
          }
        }
        scan(outDir);

        let headers = fs.readFileSync(headersPath, 'utf8');
        const styleHashes = new Set();
        const scriptHashes = new Set();

        for (const file of htmlFiles) {
          const content = fs.readFileSync(file, 'utf8');

          // Hash all inline styles
          const styleMatches = content.matchAll(
            /<style[^>]*>([\s\S]*?)<\/style>/gi,
          );
          for (const match of styleMatches) {
            const hash = crypto
              .createHash('sha256')
              .update(match[1])
              .digest('base64');
            styleHashes.add(`'sha256-${hash}'`);
          }

          // Hash all inline scripts (e.g. application/ld+json)
          const scriptMatches = content.matchAll(
            /<script[^>]*>([\s\S]*?)<\/script>/gi,
          );
          for (const match of scriptMatches) {
            // Only hash non-empty inline script blocks
            const scriptContent = match[1]?.trim();
            if (scriptContent) {
              const hash = crypto
                .createHash('sha256')
                .update(match[1])
                .digest('base64');
              scriptHashes.add(`'sha256-${hash}'`);
            }
          }
        }

        if (styleHashes.size > 0) {
          const list = Array.from(styleHashes).join(' ');
          headers = headers.replace(
            /style-src 'self'[^;]*/,
            `style-src 'self' ${list}`,
          );
        }

        if (scriptHashes.size > 0) {
          const list = Array.from(scriptHashes).join(' ');
          headers = headers.replace(
            /script-src 'self'[^;]*/,
            `script-src 'self' ${list}`,
          );
        }

        fs.writeFileSync(headersPath, headers, 'utf8');
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE || 'https://ajmalbuv.pages.dev',
  redirects: {
    '/project/0': '/projects/edumanage',
    '/project/1': '/projects/portfolio',
    '/project': '/#work',
  },
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
    },
  },
  integrations: [icon(), sitemap(), robotsTxt(), inlineCsp()],
  vite: {
    plugins: [tailwindcss(), llms()],
    build: {
      cssCodeSplit: false,
      assetsInlineLimit: 4096,
    },
  },
  build: {
    assets: 'assets',
    inlineStylesheets: 'always',
  },
});
