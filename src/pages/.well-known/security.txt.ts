import type { APIRoute } from 'astro';

import { siteData } from '../../data/site';
import { absolute, getSite } from '../../utils/url';

export const prerender = true;

export const GET: APIRoute = ({ site, url }) => {
  const origin = getSite(site, url);
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);

  const lines = [
    `Contact: mailto:${siteData.personal.contact.email}`,
    `Expires: ${expires.toISOString()}`,
    `Canonical: ${absolute('/.well-known/security.txt', origin)}`,
    'Preferred-Languages: en',
  ];

  return new Response(`${lines.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
