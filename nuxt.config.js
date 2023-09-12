// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL
    }
  },
  devtools: { enabled: true },
  css: [
    '@/assets/scss/style.scss'
  ],
}
