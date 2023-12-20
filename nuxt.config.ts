import { defineNuxtConfig } from 'nuxt/config';
import allNews from './json/all_news.json';

export default defineNuxtConfig({
  // ssr: true,
  runtimeConfig: {
    public: {
      kurocoApiDomain: 'https://dev-nuxt-corporate.g.kuroco.app',
    },
  },
  app: {
    head: {
      title: 'front_nuxt_corporate',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  devtools: { enabled: true },
  css: ['@/assets/scss/style.scss'],

  hooks: {
    // Config FullStaticGeneration
    async "nitro:config"(nitroConfig) {
      if (nitroConfig.dev) {
        return;
      }
      const res = allNews;
      if (nitroConfig.prerender?.routes === undefined) {
        return;
      }
      nitroConfig.prerender.routes = res.map((mount: any) => {
        return `/news/detail/${mount.slug ? mount.slug : mount.topics_id}`;
      });
      nitroConfig.prerender.routes.concat(['/', '/404.html', '/200.html']);
      nitroConfig.prerender.crawlLinks = false;
    },
  },
});
