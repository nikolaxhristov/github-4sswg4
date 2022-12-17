import node from '@astrojs/node';
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';

export default defineConfig({
  output: 'server',
  experimental: {
    prerender: true,
  },
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [compress()],
});
