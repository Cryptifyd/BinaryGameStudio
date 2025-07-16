// @ts-check
export default defineNuxtConfig({
  modules: [[
    '@storyblok/nuxt',
    {
      accessToken: 'rQJGKKhwKrwYgLrgY19bDQtt',
      apiOptions: {
        region: '', // Set 'US" if your space is created in US region (EU default)
      },
    },
  ], '@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Binary Game Studio - We build magic from broken bits',
      htmlAttrs: {
        lang: 'de',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Indie Game Studio von Pablo Binar. Wir erschaffen magische digitale Welten mit Liebe zum Detail und kreativer Freiheit.' },
        { name: 'author', content: 'Pablo Binar' },
        { name: 'keywords', content: 'Binary Game Studio, Pablo Binar, Indie Games, Game Development, Glim, Spieleentwicklung' },
        { property: 'og:title', content: 'Binary Game Studio - We build magic from broken bits' },
        { property: 'og:description', content: 'Indie Game Studio von Pablo Binar. Wir erschaffen magische digitale Welten.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'de_DE' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      storyblokVersion: process.env.STORYBLOK_VERSION || 'published',
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-07-16',
})
