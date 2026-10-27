<template>
  <div class="page">
    <ContactsSection heading-tag="h1" />
  </div>
</template>

<script setup>
useSiteSeo({
  title: 'Контакты — обсудить разработку сайта | sikinski.dev',
  description: 'Напишите в Telegram или на почту, чтобы обсудить разработку сайта, бота или AI-ассистента. Профили на GitHub, Kwork, FL.ru и hh.ru.',
  path: '/contacts'
})
</script>

<style lang="sass" scoped>
.page
  --head-scale: 0.67
  padding-top: var(--header-height)
</style>
