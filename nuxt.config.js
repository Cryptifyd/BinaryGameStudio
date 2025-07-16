// @ts-check
export default defineNuxtConfig({
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'rQJGKKhwKrwYgLrgY19bDQtt',
        apiOptions: {
          region: '', // Set 'US" if your space is created in US region (EU default)
        },
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
  css: ['@/assets/css/roboto.css'],
  compatibilityDate: '2025-07-16',
})
