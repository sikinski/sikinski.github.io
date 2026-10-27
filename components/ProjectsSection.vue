<template>
  <section id="cases" class="projects section">
    <div class="container page-padding">
      <div class="head grid crosses">
        <span class="head-label label">04 Портфолио</span>
        <div class="head-content">
          <h2 class="title-xl">Проекты</h2>
          <ProjectTabs v-model="activeTab" :tabs="projectTabs" />
        </div>
      </div>

      <div
        v-for="tab in projectTabs"
        v-show="activeTab === tab.id"
        :id="`panel-${tab.id}`"
        :key="tab.id"
        role="tabpanel"
        :aria-labelledby="`tab-${tab.id}`"
      >
        <ProjectsGrid :items="tab.items" />
      </div>

      <div class="more">
        <NuxtLink :to="activeTab === 'ai' ? '/cases' : '/cases?tab=web'" class="ghost-button">Все кейсы</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projectTabs } from '#shared/projects'

const activeTab = ref(projectTabs[0].id)
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

  .head-content
    grid-column: 1 / -1
    display: grid
    justify-items: start
    gap: clamp(24px, 3vw, 40px)

    @include from(lg)
      grid-column: 2 / 5
      padding-left: 24px

  .more
    display: flex
    justify-content: center
    padding-block: clamp(48px, 5vw, 80px) clamp(64px, 8vw, 140px)
</style>
