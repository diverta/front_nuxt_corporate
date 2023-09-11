// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  runtimeConfig: {
    public: {
       baseURL: 'https://dev-nuxt-corporate.g.kuroco.app'
    }
  },
  devtools: { enabled: true },
  css: [
    '@/assets/scss/style.scss'
  ],
}
