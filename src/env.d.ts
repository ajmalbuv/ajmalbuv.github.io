/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GIT_HASH?: string | undefined;
  readonly PUBLIC_BUILD_TIME?: string | undefined;
  readonly PUBLIC_EMAILJS_PUBLIC_KEY?: string | undefined;
  readonly PUBLIC_EMAILJS_SERVICE_ID?: string | undefined;
  readonly PUBLIC_EMAILJS_TEMPLATE_ID?: string | undefined;
  readonly SITE?: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  interface Window {
    homeInterval?: ReturnType<typeof setInterval> | undefined;
  }
}
