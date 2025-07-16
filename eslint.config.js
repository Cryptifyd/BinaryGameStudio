import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    tooling: true,
    stylistic: {
      semi: false,
      quotes: 'single',
    },
  },
}).override('nuxt/vue/rules', {
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-template-shadow': 'off',
  },
}).override('nuxt/javascript', {
  rules: {
    'no-undef': 'off',
  },
})
