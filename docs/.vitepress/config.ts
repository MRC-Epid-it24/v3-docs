import { defineConfig } from 'vitepress';
import { sidebar } from './sidebar';
import { nav } from './nav';
import { description } from '../../package.json';

export default defineConfig({
  title: 'Intake24 V3',
  description,
  lang: 'en',

  head: [
    ['meta', { name: 'theme-color', content: '#B32700' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  vite: { server: { port: 8500 } },

  themeConfig: {
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MRC-Epid-it24' },
    ],
  },
});
