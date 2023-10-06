import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  // ssr: true,  
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
      endpoint: {
        login: '/rcms-api/1/login',
        logout: '/rcms-api/1/logout',
        register: '/rcms-api/1/member/register',
        updateProfile: '/rcms-api/1/member/update',
        deleteProfile: '/rcms-api/1/member/delete',
        profile: '/rcms-api/1/profile',
        inquiry: '/rcms-api/1/inquiry/3',
        contact: '/rcms-api/1/inquiry/1',
      },
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

  nitro: { // FullStaticGeneration
    prerender: {
      crawlLinks: true,
      routes: ['/', '/404.html', '/200.html'],
    },
  },
});
