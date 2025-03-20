import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import githubPages from '@astrojs/github-pages';

export default defineConfig({
  output: 'static',
  site: 'https://xeeban.github.io',
  base: '/xeeban.com',
  integrations: [tailwind(), githubPages()],
}); 