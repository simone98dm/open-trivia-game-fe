export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Mooli&display=swap",
        },
      ],
    },
  },
});
