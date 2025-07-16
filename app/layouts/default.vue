<template>
  <div class="min-h-screen bg-dark text-light overflow-x-hidden">
    <AppNavigation />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// SEO Meta Tags für Pablo Binar
useHead({
  htmlAttrs: {
    lang: 'de',
  },
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Binary Game Studio',
        'founder': {
          '@type': 'Person',
          'name': 'Pablo Binar',
          'jobTitle': 'Gründer & Spieleentwickler',
        },
        'description': 'Indie Game Studio von Pablo Binar. Wir erschaffen magische digitale Welten mit Liebe zum Detail und kreativer Freiheit.',
        'url': 'https://binarygamestudio.com',
        'logo': 'https://binarygamestudio.com/logo.svg',
        'sameAs': [
          'https://github.com/binarygamestudio',
          'https://twitter.com/binarygamestudio',
        ],
      }),
    },
  ],
})
</script>
