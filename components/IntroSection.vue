<template>
  <section id="intro" class="intro section">
    <div class="container page-padding">
      <div class="layout grid crosses">
        <span class="head-label label">01 Чем занимаюсь</span>
        <div class="content">
          <h2 class="title">
            Разрабатываю сайты под ключ — от архитектуры и вёрстки до релиза и деплоя
          </h2>
          <p class="lead">
            Хорошо понимаю, как устроен веб целиком: фронтенд, API, сервер и деплой. Делаю сайты быстрыми,
            адаптивными и заметными в поиске, а AI-инструменты помогают быстрее проходить путь от задачи
            до результата. Отдельное направление — AI-ассистенты и боты, которые автоматизируют рутину.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.intro
  background: var(--color-bg)

  .layout
    row-gap: 32px
    padding-block: clamp(80px, 10vw, 200px)

  .head-label
    grid-column: 1 / -1
    align-self: start

    @include from(lg)
      grid-column: 1
      padding-top: 12px

  .content
    grid-column: 1 / -1
    display: grid
    gap: clamp(24px, 3vw, 48px)

    @include from(lg)
      grid-column: 2 / 4
      padding-left: 24px

  .lead
    max-width: 640px
    font-size: clamp(17px, 1.1vw, 21px)
</style>
