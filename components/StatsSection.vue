<template>
  <section id="stats" class="stats section">
    <div class="container page-padding">
      <div class="head grid crosses">
        <span class="head-label label">05 Обзор</span>
        <h2 class="heading title-xl">В цифрах</h2>
      </div>

      <ul class="list">
        <li v-for="(item, i) in stats" :key="item.label" class="item">
          <div class="item-top">
            <span>{{ item.label }}</span>
            <span>0{{ i + 1 }}</span>
          </div>
          <h3 class="item-title">{{ item.title }}</h3>
          <p class="item-text">{{ item.text }}</p>
          <ul v-if="item.tags" class="tags">
            <li v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</li>
          </ul>
          <div v-else class="item-bottom">
            <span class="number">{{ item.value }}</span>
            <span class="caption">{{ item.caption }}</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const stats = [
  {
    label: 'Опыт',
    title: 'FullStack: Vue 3, Nuxt 4, Node.js',
    text: 'Фронтенд, бэкенд, базы данных и деплой. Руководила командой из пяти разработчиков: архитектура, code review, наставничество.',
    value: '5+',
    caption: 'лет в разработке'
  },
  {
    label: 'Проекты',
    title: 'Довожу до релиза',
    text: 'Интернет-магазины, PWA, админ-панели, Telegram Mini Apps, боты и AI-ассистенты.',
    value: '30+',
    caption: 'завершённых проектов'
  },
  {
    label: 'Интеграции',
    title: 'Подключаю нужные сервисы',
    text: 'Оплата, доставка, карты, аналитика, авторизация, нейросети и внешние API.',
    tags: [
      'ЮKassa', 'СДЭК', 'СДЭК Pay', 'Яндекс.Карты', 'Яндекс.Метрика', 'Telegram Bot API',
      'VK', 'OAuth', 'JWT', 'REST API', 'WebSocket', 'LLM API', 'PostgreSQL', 'Docker'
    ]
  },
  {
    label: 'AI',
    title: 'AI-ассистенты для бизнеса',
    text: 'Отвечают клиентам в Telegram и на сайте, записывают на услуги, собирают заявки и сразу уведомляют вас.',
    value: '24/7',
    caption: 'на связи с вашими клиентами'
  }
]
</script>

<style lang="sass" scoped>
.stats
  background: var(--color-bg)

  .head
    row-gap: 24px
    padding-block: clamp(64px, 8vw, 140px) clamp(40px, 4vw, 72px)

  .head-label
    grid-column: 1 / -1
    align-self: start

    @include from(lg)
      grid-column: 1

  .heading
    grid-column: 1 / -1

    @include from(lg)
      grid-column: 2 / 4
      padding-left: 24px

  .list
    display: grid
    border-top: 1px solid var(--color-line-strong)

    @include from(sm)
      grid-template-columns: repeat(2, 1fr)

    @include from(lg)
      grid-template-columns: repeat(4, 1fr)

  .item
    position: relative
    display: flex
    flex-direction: column

    @include from(sm)
      min-height: clamp(340px, 30vw, 560px)
    padding: 28px 16px 32px
    border-bottom: 1px solid var(--color-line)
    transition: background 0.4s

    @include from(lg)
      padding-inline: 24px
      border-bottom: none

    // Неоновая грань сверху при наведении
    &::before
      content: ''
      position: absolute
      inset: -1px 0 auto
      height: 1px
      background: var(--color-neon)
      box-shadow: 0 0 12px var(--color-neon-glow)
      transform: scaleX(0)
      transform-origin: left
      transition: transform 0.5s

    &:hover
      background: linear-gradient(to bottom, rgba(255, 117, 173, 0.06), transparent 60%)

      &::before
        transform: scaleX(1)

  .item-top
    display: flex
    justify-content: space-between
    padding-bottom: 20px
    border-bottom: 1px solid var(--color-line)
    font-size: 11px
    font-weight: 600
    letter-spacing: 0.16em
    text-transform: uppercase
    color: var(--color-text-secondary)

  .item-title
    margin-top: 32px
    font-size: clamp(20px, 1.5vw, 28px)
    font-weight: 600
    line-height: 1.2
    letter-spacing: -0.01em

  // На телефоне хватает заголовка и цифры
  .item-text
    display: none
    margin-top: 16px
    max-width: 340px
    font-size: 15px
    line-height: 1.6
    color: var(--color-text-secondary)

    @include from(sm)
      display: block

  .item-bottom
    display: flex
    justify-content: space-between
    align-items: flex-end
    gap: 16px
    margin-top: auto
    padding-top: 48px

  .number
    font-size: clamp(64px, 6vw, 128px)
    font-weight: 700
    line-height: 0.8
    letter-spacing: -0.06em

  .tags
    display: flex
    flex-wrap: wrap
    gap: 6px
    margin-top: auto
    padding-top: 40px

  .tag
    padding: 6px 10px
    border: 1px solid var(--color-line-strong)
    font-size: 11px
    font-weight: 600
    letter-spacing: 0.06em
    color: var(--color-text-secondary)
    transition: color 0.3s, border-color 0.3s

    &:hover
      border-color: var(--color-accent)
      color: var(--color-text)

  .caption
    max-width: 140px
    font-size: 10px
    font-weight: 600
    letter-spacing: 0.14em
    line-height: 1.5
    text-align: right
    text-transform: uppercase
    color: var(--color-text-secondary)
</style>
