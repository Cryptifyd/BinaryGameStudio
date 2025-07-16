<script setup>
// Try to fetch navigation story, with fallback
const story = await useStoryblokContent('settings/main-navigation')
</script>

<template>
  <nav
    v-if="story"
    class="w-full"
  >
    <StoryblokComponent :blok="story.content" />
  </nav>
</template>
