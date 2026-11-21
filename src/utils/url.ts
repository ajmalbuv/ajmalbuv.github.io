export const getSite = (site: URL | undefined, url: URL): URL =>
  site ?? new URL(url.origin);

export const absolute = (path: string, base: URL): string =>
  new URL(path, base).href;

export const canonical = (url: URL, site: URL | undefined): URL =>
  new URL(url.pathname, getSite(site, url));

export const projectPath = (slug: string): string => `/projects/${slug}/`;

export const safeJsonLd = (value: unknown): string =>
  JSON.stringify(value).replace(/</g, '\\u003c');
