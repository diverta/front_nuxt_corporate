import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  ssr: false,
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

  modules: ['@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      'Noto Sans JP': [400, 700],
      Helvetica: [400, 700],
      'Secular One': [400, 700],
    },
  },

  devtools: { enabled: true },
  css: ['@/assets/scss/style.scss'],

  nitro: {
    // FullStaticGeneration
    prerender: {
      crawlLinks: true,
      routes: ['/', '/404.html', '/200.html'],
    },
  },
  build: {
    transpile: ['@vuepic/vue-datepicker']
},
});
