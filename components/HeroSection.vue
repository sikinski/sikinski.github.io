<template>
  <section class="hero">
    <HeroGeometry class="geometry" />

    <div class="inner container page-padding">
      <div class="top">
        <span class="label">FullStack · AI-инженер</span>
        <span class="year">Портфолио / 2026</span>
      </div>

      <h1 class="heading">
        <span class="title-line">Разработка</span>
        <!-- Неразрывный дефис: «ТГ‑ботов» и «AI‑ассистентов» не переносятся -->
        <span class="title-line accent">сайтов, ТГ‑ботов,</span>
        <span class="title-line accent">AI‑ассистентов</span>
      </h1>

      <div class="content">
        <p class="subtitle">
          AI-инженер <span class="subtitle-accent">/</span> <span class="nowrap">5+ лет</span> в программировании
        </p>
        <p class="lead">
          Под ключ: интернет-магазины с онлайн-оплатой и доставкой, мобильные PWA-приложения,
          AI-боты в мессенджерах и личные ассистенты, которые работают на ваш бизнес 24/7.
        </p>
        <p class="note">
          Весь цикл на мне: архитектура, фронтенд, бэкенд, базы данных, интеграции и деплой.
        </p>
        <div class="actions">
          <NuxtLink to="/cases" class="main-button">Смотреть кейсы</NuxtLink>
          <a href="#contacts" class="ghost-button">Обсудить проект</a>
        </div>
      </div>

      <ul class="stack">
        <li v-for="item in services" :key="item.index" class="stack-item">
          <span class="stack-index">{{ item.index }}</span>
          {{ item.title }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const services = [
  { index: '01', title: 'Интернет-магазины' },
  { index: '02', title: 'PWA-приложения' },
  { index: '03', title: 'Telegram-боты' },
  { index: '04', title: 'AI-ассистенты' }
]
</script>

<style lang="sass" scoped>
.hero
  position: relative
  overflow: hidden
  background: var(--color-bg-deep)

  .geometry
    position: absolute
    top: 0
    right: 0
    width: 100%
    height: 100%
    opacity: 0.35

    @include from(lg)
      width: 44%
      opacity: 1

  .inner
    position: relative
    display: grid
    grid-template-columns: repeat(var(--cols), 1fr)
    align-content: space-between
    min-height: 100svh
    padding-top: calc(var(--header-height) + 32px)

  .top
    grid-column: 1 / -1
    display: flex
    justify-content: space-between
    align-items: center

  .year
    font-size: 11px
    font-weight: 600
    letter-spacing: 0.16em
    text-transform: uppercase
    color: var(--color-text-secondary)

  .heading
    grid-column: 1 / -1
    margin: 32px 0 32px -0.04em
    font-size: clamp(34px, 4vw + 8px, 104px)
    font-weight: 800
    line-height: 1.06
    letter-spacing: -0.05em
    text-transform: uppercase

  .title-line
    display: block

    // Второе слово приглушённое: розовый на первом экране остаётся за геометрией и кнопкой
    &.accent
      color: var(--color-text-secondary)

  .content
    grid-column: 1 / -1
    display: grid
    gap: 24px
    max-width: 720px
    padding-bottom: 40px

    @include from(lg)
      grid-column: 2 / 4
      padding-left: 24px

    .lead
      font-size: clamp(15px, 1.05vw, 20px)

  .subtitle
    font-size: clamp(18px, 1.5vw, 28px)
    font-weight: 700
    line-height: 1.15
    letter-spacing: -0.01em
    text-transform: uppercase

  .nowrap
    white-space: nowrap

  .subtitle-accent
    color: var(--color-neon)
    text-shadow: 0 0 16px var(--color-neon-glow)

  // На телефоне прячем: первый экран и так плотный
  .note
    display: none
    gap: 12px
    font-size: 15px
    line-height: 1.5
    color: var(--color-text-secondary)

    @include from(md)
      display: flex

    &::before
      content: '+'
      font-weight: 700
      color: var(--color-text)

  .actions
    display: flex
    flex-wrap: wrap
    gap: 12px
    margin-top: 16px

  .stack
    grid-column: 1 / -1
    display: grid
    grid-template-columns: subgrid
    border-top: 1px solid var(--color-line-strong)

  .stack-item
    display: flex
    align-items: baseline
    gap: 12px
    padding: 20px 0
    font-size: 12px
    font-weight: 600
    letter-spacing: 0.14em
    text-transform: uppercase

    &:nth-child(even)
      padding-left: 16px

    @include from(lg)
      padding: 24px

      &:first-child
        padding-left: 0

  .stack-index
    font-size: 10px
    color: var(--color-accent)
</style>
