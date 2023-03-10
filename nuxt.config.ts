// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  typescript: {
    shim: false,
  },
  css: [],
  build: {},
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
