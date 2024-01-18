// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
export default defineNuxtConfig({
	devtools: undefined,
	ignorePrefix: "",
	ssr: false,
	runtimeConfig: {
		public: {
			API: process.env.AUTH_ORIGIN
		}
	},
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vee-validate/nuxt',
	  'nuxt-server-utils'
  ],
  // devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets"
  },
	nuxtServerUtils: {
		enabled: true, // default
		enableDevTools: true, // default
	},
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
	    FieldArray: 'VeeFieldArray',
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
	  "~/assets/style/fonts.css",
	  "~/assets/style/global.css",
	  "~/assets/style/scroll-global.css",
  ],
	plugins:[
		{ src: "~/plugins/vee-validate.js", ssr: false}
	],
  tailwindcss: {
    cssPath: '~/assets/style/tailwind.css',
    configPath: 'tailwind.config'
  },
})
