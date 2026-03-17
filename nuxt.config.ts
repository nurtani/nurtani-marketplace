export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/image", "@nuxtjs/i18n"],

  i18n: {
    defaultLocale: "id",
    strategy: "prefix_except_default",
    langDir: "../messages/",

    locales: [
      { code: "id", file: "id.json" },
      { code: "en", file: "en.json" },
    ],
  },

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
