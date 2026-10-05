import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { APIRoute } from 'astro';
import sharp, { type OverlayOptions } from 'sharp';
import { siteData } from '../data/site';

export const prerender = true;

const escapeXml = (str: string): string =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export const GET: APIRoute = async ({ site }) => {
  const width = 1200;
  const height = 630;

  // Extract hostname dynamically from Astro.site (defaults to ajmalbuv.pages.dev if undefined)
  const siteUrl = site ?? new URL('https://ajmalbuv.pages.dev');
  const domain = siteUrl.hostname;

  // Resolve personal avatar photo reliably across dev and build prerendering
  const candidatePaths = [
    path.resolve(process.cwd(), 'src/assets/images/personal/photo.jpeg'),
    path.resolve('src/assets/images/personal/photo.jpeg'),
    fileURLToPath(
      new URL('../assets/images/personal/photo.jpeg', import.meta.url),
    ),
  ];
  const photoPath = candidatePaths.find((p) => fs.existsSync(p));

  let avatarCircleBuffer: Buffer | null = null;
  if (photoPath && fs.existsSync(photoPath)) {
    const avatarSize = 280;
    const roundedCorners = Buffer.from(
      `<svg><circle cx="${avatarSize / 2}" cy="${avatarSize / 2}" r="${avatarSize / 2}" fill="#fff"/></svg>`,
    );

    avatarCircleBuffer = await sharp(photoPath)
      .resize(avatarSize, avatarSize, { fit: 'cover', position: 'top' })
      .composite([{ input: roundedCorners, blend: 'dest-in' }])
      .png()
      .toBuffer();
  }

  const name = escapeXml(siteData.personal.name);
  const title = escapeXml(siteData.personal.title);
  const safeDomain = escapeXml(domain);

  const svgBanner = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0a0a0c" />
        <stop offset="60%" stop-color="#111115" />
        <stop offset="100%" stop-color="#17141f" />
      </linearGradient>
      <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#fc7a00" />
        <stop offset="100%" stop-color="#ff9e3b" />
      </linearGradient>
      <radialGradient id="glow" cx="80%" cy="20%" r="50%">
        <stop offset="0%" stop-color="#fc7a00" stop-opacity="0.18" />
        <stop offset="100%" stop-color="#0a0a0a" stop-opacity="0" />
      </radialGradient>
    </defs>

    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#bg)" />
    <rect width="${width}" height="${height}" fill="url(#glow)" />

    <!-- Border Accent -->
    <rect x="1" y="1" width="${width - 2}" height="${height - 2}" rx="0" fill="none" stroke="#262626" stroke-width="2" />
    <rect x="0" y="0" width="${width}" height="4" fill="url(#accent)" />

    <!-- Left Content Container -->
    <g transform="translate(80, 110)">
      <!-- Badge / Status -->
      <g>
        <rect x="0" y="0" width="230" height="34" rx="17" fill="#1e1e24" stroke="#33333d" stroke-width="1" />
        <circle cx="18" cy="17" r="5" fill="#10b981" />
        <text x="32" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#9ca3af" letter-spacing="1">AVAILABLE FOR WORK</text>
      </g>

      <!-- Main Name -->
      <text x="0" y="115" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="64" font-weight="800" fill="#ffffff" letter-spacing="-1">
        ${name}
      </text>

      <!-- Subtitle -->
      <text x="0" y="170" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="28" font-weight="700" fill="url(#accent)">
        ${title}
      </text>

      <!-- Description / Stack -->
      <text x="0" y="225" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="20" font-weight="400" fill="#a1a1aa">
        High-performance Flutter applications, scalable backends &amp;
      </text>
      <text x="0" y="255" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="20" font-weight="400" fill="#a1a1aa">
        modern cross-platform engineering with clean architecture.
      </text>

      <!-- Tech Pills -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="85" height="32" rx="8" fill="#1e1e22" stroke="#2e2e36" stroke-width="1" />
        <text x="42" y="21" font-family="monospace" font-size="14" font-weight="600" fill="#e4e4e7" text-anchor="middle">Flutter</text>

        <rect x="97" y="0" width="95" height="32" rx="8" fill="#1e1e22" stroke="#2e2e36" stroke-width="1" />
        <text x="144" y="21" font-family="monospace" font-size="14" font-weight="600" fill="#e4e4e7" text-anchor="middle">Django</text>

        <rect x="204" y="0" width="115" height="32" rx="8" fill="#1e1e22" stroke="#2e2e36" stroke-width="1" />
        <text x="261" y="21" font-family="monospace" font-size="14" font-weight="600" fill="#e4e4e7" text-anchor="middle">TypeScript</text>

        <rect x="331" y="0" width="80" height="32" rx="8" fill="#1e1e22" stroke="#2e2e36" stroke-width="1" />
        <text x="371" y="21" font-family="monospace" font-size="14" font-weight="600" fill="#e4e4e7" text-anchor="middle">Astro</text>

        <rect x="423" y="0" width="85" height="32" rx="8" fill="#1e1e22" stroke="#2e2e36" stroke-width="1" />
        <text x="465" y="21" font-family="monospace" font-size="14" font-weight="600" fill="#e4e4e7" text-anchor="middle">Docker</text>
      </g>

      <!-- Bottom Domain dynamically derived from Astro.site -->
      <g transform="translate(0, 420)">
        <text x="0" y="0" font-family="monospace" font-size="18" font-weight="600" fill="#71717a">${safeDomain}</text>
      </g>
    </g>

    <!-- Avatar Glow & Ring Background -->
    <g transform="translate(820, 160)">
      <circle cx="150" cy="150" r="158" fill="none" stroke="#fc7a00" stroke-width="3" stroke-opacity="0.6" />
      <circle cx="150" cy="150" r="150" fill="#18181b" stroke="#27272a" stroke-width="2" />
    </g>
  </svg>
  `;

  const composites: OverlayOptions[] = [];
  if (avatarCircleBuffer) {
    composites.push({
      input: avatarCircleBuffer,
      top: 170,
      left: 830,
    });
  }

  const pngBuffer = await sharp(Buffer.from(svgBanner))
    .composite(composites)
    .png({ quality: 90 })
    .toBuffer();

  return new Response(pngBuffer, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
