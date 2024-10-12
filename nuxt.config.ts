// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/icon', '@nuxtjs/seo', 'nuxt-security', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'],

  site: {
    name: 'Bildrechte Quiz',
    description: 'Lerne über Bildrechte, Urheberrechtsgesetze und ethische Überlegungen in der Fotografie mit unserem interaktiven Quiz.',
    defaultLocale: 'de',
  },

  compatibilityDate: '2024-10-07',

  security: {
    headers: {
      contentSecurityPolicy: false
    }
  }
})