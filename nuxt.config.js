// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Исходники лежат в корне проекта, а не в app/
  srcDir: '.',

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
