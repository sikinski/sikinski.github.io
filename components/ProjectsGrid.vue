<template>
  <ul class="list">
    <li v-for="(project, i) in items" :key="project.slug">
      <NuxtLink :to="`/cases/${project.slug}`" class="card">
        <div class="cover">
          <img
            :src="`/images/projects/${project.slug}.webp`"
            :alt="`${project.title} — ${project.name}`"
            width="660"
            height="440"
            loading="lazy"
          >
        </div>
        <div class="info">
          <span class="index">{{ String(i + 1).padStart(2, '0') }}</span>
          <div>
            <h3 class="name">{{ project.name }}</h3>
            <span class="type">{{ project.type }} · {{ project.year }}</span>
          </div>
          <span class="arrow">→</span>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  items: { type: Array, required: true }
})
</script>

<style lang="sass" scoped>
.list
  display: grid
  gap: 40px 24px

  @include from(md)
    grid-template-columns: repeat(2, 1fr)

  @include from(lg)
    grid-template-columns: repeat(4, 1fr)
    row-gap: 56px

.card
  display: block

  &:hover
    .cover
      border-color: var(--color-neon)
      box-shadow: 0 0 24px rgba(255, 117, 173, 0.25)

      img
        transform: scale(1.04)

    .index,
    .arrow
      color: var(--color-neon)

    .arrow
      transform: translateX(4px)

.cover
  overflow: hidden
  border: 1px solid var(--color-line-strong)
  transition: border-color 0.3s, box-shadow 0.3s

  img
    display: block
    width: 100%
    height: auto
    aspect-ratio: 3 / 2
    object-fit: cover
    transition: transform 0.6s ease

.info
  display: grid
  grid-template-columns: auto 1fr auto
  gap: 16px
  align-items: start
  padding-top: 20px

.index
  font-size: 11px
  font-weight: 600
  letter-spacing: 0.16em
  line-height: 22px
  color: var(--color-text-secondary)
  transition: color 0.3s

.name
  font-size: 18px
  font-weight: 600
  line-height: 22px

.type
  display: block
  margin-top: 6px
  font-size: 11px
  font-weight: 600
  letter-spacing: 0.14em
  text-transform: uppercase
  color: var(--color-text-secondary)

.arrow
  line-height: 22px
  color: var(--color-text-secondary)
  transition: color 0.3s, transform 0.3s
</style>
