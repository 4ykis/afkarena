// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from 'path'
export default defineNuxtConfig({
	devtools: undefined,
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
	    'postcss-nested': {},
	    'postcss-import': {},
	    'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  css: [
	  "~/assets/style/global.css",
	  "~/assets/style/scroll-global.css",
  ],
	plugins:[
		"~/plugins/vee-validate.js"
	],
  tailwindcss: {
    cssPath: '~/assets/style/tailwind.css',
    configPath: 'tailwind.config'
  },
})
