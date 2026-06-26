export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@pinia/nuxt',
    '@pinia/colada-nuxt',
    'pinia-plugin-persistedstate/nuxt'
  ],

  components: [
    {
      path: '~/components/reusable',
      pathPrefix: false
    },
    '~/components'
  ],

  devtools: {
    enabled: true
  },
  app: {
    head: {
      htmlAttrs: {
        class: 'scroll-smooth',
        lang: 'id'
      }
    }
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL
    }
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit']
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  i18n: {
    defaultLocale: 'id',
    strategy: 'prefix_except_default',
    langDir: '../messages/',

    locales: [
      { code: 'id', file: 'id.json' },
      { code: 'en', file: 'en.json' }
    ]
  }
})
