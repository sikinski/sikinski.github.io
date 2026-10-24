<template>
  <div class="about-page">
    <AboutSection />
    <QuoteSection />
  </div>
</template>

<script setup>
useSiteSeo({
  title: 'Обо мне — Ульяна, frontend-разработчица | sikinski.dev',
  description: 'Frontend-разработчица на Vue 3 и Nuxt 4: путь в программировании, опыт и подход к работе.',
  path: '/about',
  type: 'profile'
})
</script>

<style lang="sass" scoped>
.about-page
  padding-top: var(--header-height)
</style>
