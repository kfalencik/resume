// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Kevin Falencik - Digital Resume",
      meta: [
        {
          name: "description",
          content: "A digital resume/cv page for bragging about my achievements on the interwebs.",
        },
      ],
      link: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Lato|Pirata+One&display=swap" }],
    },
  },
  srcDir: "src/",
  typescript: {
    shim: false,
  },
  css: [],
  image: {
    dir: "assets/images",
  },
  modules: ["@nuxt/image-edge"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/css/main.scss";',
        },
      },
    },
  },
  googleAnalytics: {
    id: "UA-139649695-3",
  },
});
