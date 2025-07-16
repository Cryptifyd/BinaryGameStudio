/**
 * Client-side Storyblok plugin for preview mode and visual editing
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    // Initialize Storyblok Bridge for visual editing
    if (typeof window !== 'undefined' && window.storyblok) {
      window.storyblok.init({
        accessToken: 'rQJGKKhwKrwYgLrgY19bDQtt',
      })

      // Listen for story changes in preview mode
      window.storyblok.on(['input', 'published', 'change'], (event) => {
        if (event.action === 'input') {
          // Handle live editing updates
          window.location.reload()
        }
        else if (event.action === 'change') {
          // Handle story changes
          window.location.reload()
        }
      })

      // Add preview mode indicator
      if (process.env.NODE_ENV === 'development') {
        const route = useRoute()
        const isPreview = route.query._storyblok || route.query.preview === 'true'

        if (isPreview) {
          const indicator = document.createElement('div')
          indicator.innerHTML = '🔍 Preview Mode'
          indicator.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: #ff6b6b;
            color: white;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 12px;
            z-index: 9999;
            font-family: monospace;
          `
          document.body.appendChild(indicator)
        }
      }
    }
  })
})
