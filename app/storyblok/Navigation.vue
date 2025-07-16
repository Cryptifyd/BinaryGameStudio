<template>
  <div
    v-editable="blok"
    class="px-4"
  >
    <h1 class="">
      {{ blok.title }}
    </h1>
    <nav class="">
      <!-- Fallback navigation -->
      <div class="">
        <StoryblokComponent
          v-for="blok in blok.items"
          :key="blok._uid"
          :blok="blok"
        />
      </div>
    </nav>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
