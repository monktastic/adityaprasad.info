// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://adityaprasad.info',
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
