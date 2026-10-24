// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Исходники лежат в корне проекта, а не в app/
  srcDir: '.',

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      title: 'sikinski.dev',
      meta: [{ name: 'theme-color', content: '#0F1115' }],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@300..800&display=swap' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      // Адрес сайта для canonical, Open Graph и sitemap. Переопределяется через NUXT_PUBLIC_SITE_URL
      siteUrl: 'https://sikinski.dev'
    }
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt']
    }
  },

  css: ['~/assets/index.sass'],

  vite: {
    css: {
      preprocessorOptions: {
        // Брейкпоинты доступны в <style lang="sass"> любого компонента без импорта
        sass: {
          additionalData: '@use "~/assets/adaptive" as *\n'
        }
      }
    }
  }
})
