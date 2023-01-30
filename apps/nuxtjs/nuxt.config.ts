// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      meta: [{ name: 'description', content: 'Audiophile e-commerce website' }],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '~/assets/icons/favicon-32x32.png',
        },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;700&display=swap',
        },
      ],
    },
  },
  css: ['~/assets/styles/index.scss'],
  postcss: {
    plugins: { autoprefixer: {} },
  },
  // ssr: false,
  typescript: {
    shim: false,
  },
})
