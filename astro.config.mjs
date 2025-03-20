import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://xeeban.github.io',
  base: '/xeeban.com',
  integrations: [tailwind()]
}); 