import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './src/utils/readTime.ts';

// To ensure Sharp is loaded, you might want to add a manual import, if not used directly it just ensures the package is accessible
import sharp from 'sharp';

// https://astro.build/config
export default defineConfig({
  site: 'https://juanmontesinos.com',
  base: 'canyoning',
  markdown: {
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    }
  },
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        experimentalThemes: {
          light: 'vitesse-light',
          dark: 'material-theme-palenight',
        },
        wrap: true
      },
      drafts: true
    }),
    sitemap(),
    tailwind()
  ]
});