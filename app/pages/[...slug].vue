<script setup>
const route = useRoute()

// Build the story path from the route segments
const storyPath = route.params.slug ? route.params.slug.join('/') : 'home'

const story = await useStoryblokContent(storyPath)

// Set page meta
useHead({
  title: story.value?.content?.title || story.value?.name || 'Page - Binary Game Studio',
  meta: [
    { name: 'description', content: story.value?.content?.description || '' },
  ],
})
</script>

<template>
  <StoryblokComponent
    v-if="story"
    :blok="story.content"
  />
</template>
