// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      meta: [
        // <meta name="description" content="My amazing site">
        {
          name: "description",
          content:
            "Create a wider and strong network among the community through  communicate, share, sell, buy, get services, provide services. Provide a wider strong network which helps to link everything, connect fair services with customers, provide quality products with fair price.",
        },
      ],
      link: [{ rel: "icon", href: "/logo.svg" }],
    },
  },
  ssr: false,
});
