<template>
  <section id="intro" class="intro section">
    <div class="container page-padding">
      <div class="layout grid crosses">
        <span class="head-label label">01 Чем занимаюсь</span>
        <div class="content">
          <h2 class="title">
            Создаю цифровые продукты под ключ — от архитектуры до релиза и деплоя
          </h2>
          <p class="lead">
            FullStack-разработка с AI в основе процесса: проектирую архитектуру, фронтенд, бэкенд и базы данных,
            а нейросети под моим контролем ускоряют написание кода в разы.
            <span class="extra">
              Вы получаете продукт быстрее, а я отвечаю за качество каждой строки. Отдельное направление —
              AI-ассистенты и боты, которые берут на себя общение с клиентами и рутину.
            </span>
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

  // Вторая половина текста — только с планшета
  .extra
    display: none

    @include from(md)
      display: inline
</style>
