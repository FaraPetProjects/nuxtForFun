import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  srcDir: "src",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  css: ["@/app/styles/tailwind.css"],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  app: {
    head: {
      title: "DevLink",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#000000" },
      ],
    },
  },
});
