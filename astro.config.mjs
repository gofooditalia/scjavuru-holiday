import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://scjavuru.holiday',
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
