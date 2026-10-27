<template>
  <div class="project">
    <section class="section">
      <div class="container page-padding">
        <div class="layout grid crosses">
          <div class="aside">
            <NuxtLink :to="project.category === 'web' ? '/cases?tab=web' : '/cases'" class="back">← Все проекты</NuxtLink>
            <span class="label">{{ project.type }}</span>
          </div>

          <div class="content">
            <h1 class="heading title-xl">{{ project.name }}</h1>
            <p class="subtitle">{{ project.title }}</p>
            <p class="lead">{{ project.description }}</p>
            <a v-if="project.url" :href="project.url" target="_blank" rel="noopener" class="link ghost-button">
              {{ project.domain }}
            </a>
          </div>

          <div class="cover">
            <img
              :src="`/images/projects/${project.slug}.webp`"
              :alt="`${project.title} — ${project.name}`"
              width="660"
              height="440"
            >
          </div>
        </div>

        <dl v-if="project.facts" class="facts">
          <div v-for="fact in project.facts" :key="fact.label" class="fact">
            <dt class="fact-label">{{ fact.label }}</dt>
            <dd class="fact-value">{{ fact.value }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section v-if="project.gallery" class="section">
      <div class="container page-padding">
        <ProjectGallery :slug="project.slug" :name="project.name" :captions="project.gallery" />
      </div>
    </section>

    <section v-if="project.phone" class="section">
      <div class="container page-padding">
        <div class="layout grid crosses">
          <span class="block-label label">Скриншот</span>
          <div class="phone">
            <img
              :src="`/images/projects/${project.slug}/phone.webp`"
              :alt="`${project.title} — сообщение в Telegram`"
              width="622"
              height="1280"
              loading="lazy"
            >
          </div>
        </div>
      </div>
    </section>

    <section v-if="project.features" class="section">
      <div class="container page-padding">
        <div class="layout grid crosses">
          <span class="block-label label">О проекте</span>
          <div class="block">
            <h2 class="block-heading">{{ project.featuresTitle || 'Что есть в проекте' }}</h2>
            <ul class="features">
              <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section v-if="project.role" class="section">
      <div class="container page-padding">
        <div class="layout grid crosses">
          <span class="block-label label">Моя роль</span>
          <div class="block block-narrow">
            <h2 class="block-heading">Что я сделала</h2>
            <p v-if="project.roleNote" class="role-note">{{ project.roleNote }}</p>
            <ol class="role">
              <li v-for="(item, i) in project.role" :key="item">
                <span class="role-index">{{ String(i + 1).padStart(2, '0') }}</span>
                {{ item }}
              </li>
            </ol>
          </div>
          <div v-if="project.stack" class="stack-block">
            <span class="stack-title">Стек</span>
            <ul class="stack">
              <li v-for="tech in project.stack" :key="tech" class="tech">{{ tech }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section v-if="project.impact" class="section">
      <div class="container page-padding">
        <div class="layout grid crosses">
          <span class="block-label label">{{ project.impactLabel || 'Результат' }}</span>
          <div class="block">
            <h2 class="block-heading">{{ project.impactTitle || 'Что это дало бизнесу' }}</h2>
            <ul class="impact">
              <li v-for="item in project.impact" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { findProject } from '#shared/projects'

const route = useRoute()
const project = findProject(route.params.slug)

if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Проект не найден', fatal: true })
}

useSiteSeo({
  title: `${project.name} — ${project.title} | sikinski.dev`,
  description: project.description,
  path: `/cases/${project.slug}`
})
</script>

<style lang="sass" scoped>
.project
  padding-top: var(--header-height)
  background: var(--color-bg-deep)

  .layout
    row-gap: 40px
    padding-block: clamp(37px, 4vw, 75px) clamp(64px, 6vw, 112px)

  .aside
    grid-column: 1 / -1
    display: flex
    flex-direction: column
    align-items: flex-start
    gap: 24px

    @include from(lg)
      grid-column: 1
      padding: 12px 24px 0 0

  .back
    font-size: 12px
    font-weight: 600
    letter-spacing: 0.14em
    text-transform: uppercase
    color: var(--color-text-secondary)
    transition: color 0.3s

    &:hover
      color: var(--color-neon)

  .content
    grid-column: 1 / -1
    display: grid
    justify-items: start
    gap: 24px
    max-width: 760px

    @include from(lg)
      grid-column: 2 / 4
      padding-inline: 24px

  .heading
    font-size: clamp(40px, 4.5vw, 96px)

  .subtitle
    font-size: clamp(20px, 1.6vw, 28px)
    font-weight: 600
    line-height: 1.2

  .link
    margin-top: 8px

    &::after
      content: '↗'

  .cover
    grid-column: 1 / -1
    max-width: 660px

    @include from(lg)
      grid-column: 4
      padding-left: 24px

    img
      display: block
      width: 100%
      height: auto
      border: 1px solid var(--color-line-strong)

  // Скриншот бота в рамке телефона
  .phone
    grid-column: 1 / -1
    justify-self: center
    width: min(100%, 340px)
    border: 1px solid var(--color-line-strong)
    border-radius: 32px
    overflow: hidden
    box-shadow: 0 0 0 8px var(--color-surface), 0 0 48px rgba(255, 117, 173, 0.18)

    @include from(lg)
      grid-column: 2 / 4
      justify-self: start
      margin-left: 32px

    img
      display: block
      width: 100%
      height: auto

  // Ключевые факты

  .facts
    display: grid
    grid-template-columns: repeat(2, 1fr)
    border-top: 1px solid var(--color-line-strong)

    @include from(lg)
      grid-template-columns: repeat(4, 1fr)

  .fact
    display: grid
    gap: 10px
    padding: 24px 16px 32px 0

    @include from(lg)
      padding-inline: 24px

      &:first-child
        padding-left: 0

  .fact-label
    font-size: 11px
    font-weight: 600
    letter-spacing: 0.16em
    text-transform: uppercase
    color: var(--color-text-secondary)

  .fact-value
    font-size: clamp(18px, 1.5vw, 26px)
    font-weight: 600
    line-height: 1.2

  // Блоки «О проекте» и «Моя роль»

  .block-label
    grid-column: 1 / -1
    align-self: start

    @include from(lg)
      grid-column: 1
      padding: 10px 24px 0 0

  .block
    grid-column: 1 / -1

    @include from(lg)
      grid-column: 2 / 5
      padding-left: 24px

  .block-narrow
    @include from(lg)
      grid-column: 2 / 4
      padding-inline: 24px

  .block-heading
    font-size: clamp(28px, 2.6vw, 48px)
    font-weight: 700
    line-height: 1.1
    letter-spacing: -0.02em
    text-transform: uppercase

  .features
    display: grid
    gap: 16px 48px
    margin-top: 32px

    @include from(md)
      grid-template-columns: repeat(2, 1fr)

    li
      position: relative
      padding-left: 24px
      font-size: clamp(15px, 1vw, 18px)
      line-height: 1.55
      color: var(--color-text-secondary)

      &::before
        content: ''
        position: absolute
        top: 0.55em
        left: 0
        width: 9px
        height: 7px
        background: var(--color-accent)
        clip-path: polygon(18% 0, 82% 0, 100% 31%, 50% 100%, 0 31%)

  .impact
    display: grid
    gap: 1px
    margin-top: 32px
    background: var(--color-line)
    border: 1px solid var(--color-line)

    @include from(md)
      grid-template-columns: repeat(2, 1fr)

    li
      position: relative
      padding: 24px 24px 24px 56px
      background: var(--color-bg-deep)
      font-size: clamp(16px, 1.1vw, 19px)
      font-weight: 500
      line-height: 1.45

      // Неоновая стрелка роста
      &::before
        content: '↗'
        position: absolute
        top: 22px
        left: 24px
        color: var(--color-neon)
        text-shadow: 0 0 10px var(--color-neon-glow)

  .role-note
    margin-top: 16px
    font-size: 15px
    color: var(--color-text-secondary)

  .role
    margin-top: 32px
    border-top: 1px solid var(--color-line)

    li
      display: grid
      grid-template-columns: 40px 1fr
      align-items: baseline
      padding-block: 16px
      border-bottom: 1px solid var(--color-line)
      font-size: clamp(16px, 1.15vw, 20px)
      font-weight: 500

  .role-index
    font-size: 11px
    font-weight: 600
    letter-spacing: 0.16em
    color: var(--color-accent)

  .stack-block
    grid-column: 1 / -1

    @include from(lg)
      grid-column: 4
      padding-left: 24px
      padding-top: 10px

  .stack-title
    display: block
    padding-bottom: 20px
    font-size: 11px
    font-weight: 600
    letter-spacing: 0.16em
    text-transform: uppercase
    color: var(--color-text-secondary)

  .stack
    display: flex
    flex-wrap: wrap
    gap: 6px

  .tech
    padding: 6px 10px
    border: 1px solid var(--color-line-strong)
    font-size: 11px
    font-weight: 600
    letter-spacing: 0.06em
    color: var(--color-text-secondary)
</style>
