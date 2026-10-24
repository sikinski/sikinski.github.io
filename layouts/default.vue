<template>
  <div>
    <GridLines />
    <AppHeader />
    <main>
      <slot />
    </main>
    <!-- На /contacts блок уже стоит в самой странице -->
    <ContactsSection v-if="route.path !== '/contacts'" />
  </div>
</template>

<script setup>
const route = useRoute()
</script>
