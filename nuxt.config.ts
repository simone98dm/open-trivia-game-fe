export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  compatibilityDate: "2025-02-14",

  css: ["~/assets/css/main.css"],

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 800],
      "Space Grotesk": [400, 500, 600, 700],
    },
    display: "swap",
    preload: true,
  },

  app: {
    head: {
      title: "Trivia Game - Test Your Knowledge",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Test your knowledge with fun trivia questions across various categories",
        },
        { name: "theme-color", content: "#1e1b4b" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      htmlAttrs: {
        lang: "en",
      },
      bodyAttrs: {
        class: "font-sans",
      },
    },
  },
});
