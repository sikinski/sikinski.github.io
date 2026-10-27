<template>
  <div class="about-page">
    <AboutSection />
    <QuoteSection />
  </div>
</template>

<script setup>
useSiteSeo({
  title: 'Обо мне — Ульяна, FullStack-разработчица и AI-инженер | sikinski.dev',
  description: 'FullStack-разработчица и AI-инженер: путь в программировании, опыт и подход к работе.',
  path: '/about',
  type: 'profile'
})
</script>

<style lang="sass" scoped>
.about-page
  padding-top: var(--header-height)
</style>
