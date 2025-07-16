/**
 * Middleware to handle Storyblok preview mode
 */
export default defineNuxtRouteMiddleware((to) => {
  // Check if this is a preview request
  const isPreview = to.query._storyblok || to.query.preview === 'true'

  if (isPreview) {
    // Set preview mode in the head for Storyblok bridge
    useHead({
      script: [
        {
          src: 'https://app.storyblok.com/f/storyblok-v2-latest.js',
          defer: true,
        },
      ],
    })

    // Add preview indicators in development
    if (process.env.NODE_ENV === 'development') {
      console.log('🔍 Storyblok Preview Mode Active')
    }
  }
})
