/**
 * Enhanced Storyblok content fetching with environment-based version control
 * @param {string} slug - The story slug to fetch
 * @param {object} options - Additional options for the API call
 * @returns {Promise} - The story data
 */
export const useStoryblokContent = async (slug, options = {}) => {
  const { public: { storyblokVersion } } = useRuntimeConfig()
  const route = useRoute()

  // Check for preview mode
  const isPreview = route.query._storyblok || route.query.preview === 'true'

  // Determine version based on environment and preview mode
  const version = isPreview ? 'draft' : storyblokVersion

  // Build API options
  const apiOptions = {
    version,
    resolve_relations: 'blog.author,product.category',
    ...options,
  }

  // Add cache busting for preview mode
  if (isPreview) {
    apiOptions.cv = Date.now()
  }

  try {
    const story = await useAsyncStoryblok(slug, apiOptions, {
      customParent: 'https://app.storyblok.com',
    })

    // Handle case where story is not found
    if (!story.value) {
      throw createError({
        statusCode: 404,
        statusMessage: `Story "${slug}" not found`,
      })
    }

    return story
  }
  catch (err) {
    // Log error in development
    if (process.env.NODE_ENV === 'development') {
      console.error(`Error fetching story "${slug}":`, err)
    }

    throw err
  }
}

/**
 * Fetch global content (navigation, footer, etc.) with caching
 * @param {string} slug - The global story slug
 * @param {object} options - Additional options
 * @returns {Promise} - The global story data
 */
export const useGlobalStoryblok = async (slug, options = {}) => {
  const { public: { storyblokVersion } } = useRuntimeConfig()

  // Global content should use published version in production for performance
  const version = process.env.NODE_ENV === 'production' ? 'published' : storyblokVersion

  const apiOptions = {
    version,
    cache_version: process.env.NODE_ENV === 'production' ? undefined : 0,
    ...options,
  }

  try {
    const story = await useAsyncStoryblok(slug, apiOptions, {
      customParent: 'https://app.storyblok.com',
    })

    if (!story.value) {
      console.warn(`Global story "${slug}" not found, using fallback`)
      return null
    }

    return story
  }
  catch (err) {
    console.warn(`Error fetching global story "${slug}":`, err)
    return null
  }
}
