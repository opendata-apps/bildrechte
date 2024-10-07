// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/icon', '@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Bildrechte - Image Rights Quiz',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Learn about image rights and copyright laws through an interactive quiz.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Add the site configuration
  site: {
    url: 'https://bildrechte-quiz.com', // Replace with your actual domain
    name: 'Bildrechte Quiz',
    description: 'Lerne über Bildrechte, Urheberrechtsgesetze und ethische Überlegungen in der Fotografie mit unserem interaktiven Quiz.',
    defaultLocale: 'de', // Since your content seems to be in German
  },

  compatibilityDate: '2024-10-07'
})