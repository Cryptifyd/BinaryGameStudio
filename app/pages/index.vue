<script setup>
const story = await useStoryblokContent('home')

// Set page meta
useHead({
  title: story.value?.content?.title || story.value?.name || 'Home - Binary Game Studio',
  meta: [
    { name: 'description', content: story.value?.content?.description || 'Indie Game Studio von Pablo Binar. Wir erschaffen magische digitale Welten mit Liebe zum Detail und kreativer Freiheit.' },
  ],
})
</script>

<template>
  <StoryblokComponent
    v-if="story"
    :blok="story.content"
  />
</template>
