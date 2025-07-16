<template>
  <footer class="w-full bg-dark border-t border-primary/20 mt-auto">
    <div class="container mx-auto py-8 px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <h3 class="text-primary font-bold text-lg">Binary Game Studio</h3>
          <p class="text-light/70 text-sm">We build magic from broken bits</p>
        </div>
        <div class="flex space-x-6">
          <a href="https://github.com/binarygamestudio" class="text-light/70 hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="https://twitter.com/binarygamestudio" class="text-light/70 hover:text-primary transition-colors">
            Twitter
          </a>
        </div>
      </div>
      <div class="mt-6 pt-6 border-t border-primary/10 text-center">
        <p class="text-light/50 text-sm">
          © {{ new Date().getFullYear() }} Binary Game Studio. Created by Pablo Binar.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>
