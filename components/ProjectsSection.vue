<template>
  <section id="cases" class="projects section">
    <div class="container page-padding">
      <div class="head grid crosses">
        <span class="head-label label">04 Портфолио</span>
        <h2 class="heading title-xl">Проекты</h2>
      </div>

      <ProjectsGrid :items="webProjects" />

      <div class="more">
        <NuxtLink to="/cases" class="ghost-button">Все кейсы</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { webProjects } from '#shared/projects'
</script>

<style lang="sass" scoped>
.projects
  background: var(--color-bg-deep)

  .head
    row-gap: 24px
    padding-block: clamp(80px, 8vw, 140px) clamp(40px, 4vw, 72px)

  .head-label
    grid-column: 1 / -1
    align-self: start

    @include from(lg)
      grid-column: 1
      padding-top: 12px

  .heading
    grid-column: 1 / -1

    @include from(lg)
      grid-column: 2 / 5
      padding-left: 24px

  .more
    display: flex
    justify-content: center
    padding-block: clamp(48px, 5vw, 80px) clamp(64px, 8vw, 140px)
</style>
