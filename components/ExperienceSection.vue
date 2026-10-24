<template>
  <section id="experience" class="experience section">
    <div class="container page-padding">
      <div class="head grid crosses">
        <span class="head-label label">03 Карьера</span>
        <h2 class="heading title-xl">Опыт работы</h2>
      </div>

      <ol class="list">
        <li v-for="(job, i) in jobs" :key="job.context" class="item grid">
          <div class="meta">
            <span class="index">0{{ i + 1 }}</span>
            <span class="type">{{ job.type }}</span>
            <span class="role">{{ job.role }}</span>
            <span class="years">{{ job.years }}</span>
          </div>

          <div class="content">
            <h3 class="context">{{ job.context }}</h3>
            <ul class="points">
              <li v-for="point in job.points" :key="point">{{ point }}</li>
            </ul>
          </div>

          <ul class="stack" aria-label="Стек">
            <li v-for="tech in job.stack" :key="tech" class="tech">{{ tech }}</li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
const jobs = [
  {
    type: 'E-commerce',
    years: '2026 г.',
    role: 'Frontend-разработчица',
    context: 'Интернет-магазин и Telegram Mini App',
    points: [
      'Спроектировала и собрала фронтенд магазина с нуля: каталог, корзина, оформление заказа.',
      'Развивала существующий e-commerce-код: новый функционал, багфиксы, рефакторинг legacy.',
      'Разработала Telegram Mini App с интеграцией через REST API.',
      'Подключила оплату ЮKassa и СДЭК Pay: webhook и обработка статусов платежа.',
      'Интегрировала СДЭК и Яндекс.Карты: выбор пунктов выдачи, расчёт доставки.',
      'Сделала систему тем оформления магазина, настроила Docker, Nginx и деплой окружений.'
    ],
    stack: ['Nuxt 4', 'Vue 3', 'Pinia', 'REST API', 'Telegram Mini Apps', 'ЮKassa', 'СДЭК', 'Яндекс.Карты', 'Docker', 'Nginx', 'Cursor']
  },
  {
    type: 'Веб-студия',
    years: '2022–2025 гг.',
    role: 'Lead Frontend-разработчица',
    context: 'Коммерческие проекты для клиентов студии',
    points: [
      'Руководила командой до 5 frontend-разработчиков: code review, наставничество, распределение задач.',
      'Вела проекты полного цикла: от общения с заказчиком и бизнес-логики до сборки и деплоя.',
      'SPA и SSR с упором на SEO и Core Web Vitals: code splitting, сжатие бандлов, оптимизация изображений.',
      'Авторизация через JWT и OAuth, middleware, административные панели.',
      'Интеграции: платёжные системы, карты, аналитика, email-сервисы и внешние API.',
      'Адаптивная семантичная вёрстка по Figma, а иногда и собственный дизайн.'
    ],
    stack: ['Vue 3', 'Nuxt', 'Vite', 'JWT', 'OAuth', 'Lighthouse', 'Яндекс.Метрика', 'Google Analytics', 'OpenStreetMap', 'Figma', 'Docker', 'Nginx']
  },
  {
    type: 'Enterprise',
    years: '2023–2025 гг.',
    role: 'Frontend-разработчица',
    context: 'Корпоративные системы промышленного предприятия',
    points: [
      'Интерфейсы корпоративных SPA/SSR-приложений и административных систем.',
      'Модули авторизации и управления доступом, внутренние микросервисы.',
      'Интеграция с backend по REST API и WebSocket.',
      'Оптимизация бандлов, инфраструктура на Docker и Nginx.',
      'Работа в Agile-команде: спринты, стендапы, MVP-подход.'
    ],
    stack: ['Vue 3', 'SPA / SSR', 'REST API', 'WebSocket', 'Docker', 'Nginx', 'Agile']
  },
  {
    type: 'Фриланс',
    years: '2020 г.',
    role: 'Верстальщица',
    context: 'Лендинги и веб-страницы для заказчиков',
    points: [
      'Вёрстка по макетам Figma в pixel perfect.',
      'Адаптивность под любые устройства и кроссбраузерность.',
      'Работа с заказчиками напрямую: требования, сроки, сдача проекта.'
    ],
    stack: ['HTML', 'CSS / Sass', 'JavaScript', 'Figma']
  }
]
</script>

<style lang="sass" scoped>
.experience
  background: var(--color-bg)

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

  .list
    padding-bottom: clamp(64px, 8vw, 140px)

  .item
    position: relative
    row-gap: 28px
    padding-block: clamp(32px, 3vw, 48px)
    border-top: 1px solid var(--color-line-strong)

    // Неоновая грань сверху при наведении — как у карточек «В цифрах»
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

    &:last-child
      border-bottom: 1px solid var(--color-line-strong)

    &:hover
      &::before
        transform: scaleX(1)

      .index
        color: var(--color-neon)
        text-shadow: 0 0 12px var(--color-neon-glow)

  // Слева: номер, тип, роль

  .meta
    grid-column: 1 / -1
    display: grid
    grid-template-columns: auto 1fr
    align-content: start
    gap: 6px 16px

    @include from(lg)
      grid-column: 1
      padding-right: 24px

  .index
    grid-row: span 3
    font-size: clamp(28px, 2.4vw, 44px)
    font-weight: 700
    line-height: 1
    letter-spacing: -0.04em
    color: var(--color-text-secondary)
    transition: color 0.3s, text-shadow 0.3s

  .type
    font-size: 11px
    font-weight: 600
    letter-spacing: 0.16em
    text-transform: uppercase
    color: var(--color-accent)

  .role
    font-size: 15px
    font-weight: 600

  .years
    font-size: 13px
    color: var(--color-text-secondary)

  // Центр: контекст и что делала

  .content
    grid-column: 1 / -1

    @include from(lg)
      grid-column: 2 / 4
      padding-inline: 24px

  .context
    font-size: clamp(20px, 1.6vw, 28px)
    font-weight: 600
    line-height: 1.2
    letter-spacing: -0.01em

  .points
    display: grid
    gap: 10px
    margin-top: 20px
    max-width: 720px

    li
      position: relative
      padding-left: 22px
      font-size: clamp(15px, 0.95vw, 17px)
      line-height: 1.55
      color: var(--color-text-secondary)

      &::before
        content: ''
        position: absolute
        top: 0.75em
        left: 0
        width: 10px
        height: 1px
        background: var(--color-accent)

  // Справа: стек

  .stack
    grid-column: 1 / -1
    display: flex
    flex-wrap: wrap
    align-content: start
    gap: 6px

    @include from(lg)
      grid-column: 4
      padding-left: 24px

  .tech
    padding: 6px 10px
    border: 1px solid var(--color-line-strong)
    font-size: 11px
    font-weight: 600
    letter-spacing: 0.06em
    color: var(--color-text-secondary)
</style>
