// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Canonical site URL. Override at build time with PUBLIC_SITE_URL when the domain is final.
const SITE_URL = process.env.PUBLIC_SITE_URL ?? 'https://lyrata.casasyn.com';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), sitemap()]
});