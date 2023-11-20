// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from 'path'
export default defineNuxtConfig({
  ignorePrefix: "",
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vee-validate/nuxt'
  ],
  // devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets"
  },
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      ErrorMessage: 'VeeErrorMessage',
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  css: [
      "~/assets/style/scss/main.scss"
  ],
  tailwindcss: {
    cssPath: '~/assets/style/tailwind.css',
    configPath: 'tailwind.config'
  }
})
