<template>
  <section id="about" class="about section">
    <div class="container page-padding">
      <div class="head grid crosses">
        <span class="head-label label">Обо мне</span>
        <h2 class="heading title-xl"><span class="text-neon">Развитие</span> — мой ключ к&nbsp;свободе</h2>
      </div>

      <div class="body grid">
        <figure class="portrait">
          <div class="frame">
            <picture>
              <source srcset="/images/portrait.webp" type="image/webp">
              <img src="/images/portrait.jpg" alt="Ульяна — frontend-разработчица" width="960" height="1200" loading="lazy">
            </picture>
          </div>
        </figure>

        <div class="story">
          <p class="intro">
            Мне 23, и я давно живу по простому правилу: думать, работать, делать — и не стоять на месте.
            Именно оно когда-то привело меня в программирование.
          </p>
          <p class="lead">
            Я начала учиться в 17 лет. Моим первым рабочим инструментом был ноутбук за 10 000 рублей,
            который тормозил на самых простых задачах. Было медленно, порой очень сложно, но желание
            разобраться оказалось сильнее.
          </p>
          <p class="lead">
            Сейчас активно изучаю искусственный интеллект — и это снова то самое чувство,
            с которого всё начиналось.
          </p>
          <p class="lead">
            Я люблю программирование за то, что в нём нельзя выучить всё раз и навсегда. В нём есть
            постоянное развитие. В каждый проект я вкладываюсь на все 100%.
          </p>

        </div>

        <div class="path">
          <span class="path-title">Путь</span>
          <ol class="steps">
            <li v-for="step in path" :key="step.when" class="step">
              <span class="step-when">{{ step.when }}</span>
              <span class="step-what">{{ step.what }}</span>
              <span class="step-note">{{ step.note }}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const path = [
  { when: '17 лет', what: 'Первые строки кода', note: 'Слабый интернет и огромное желание учиться' },
  { when: 'Стартап', what: 'Первый коммерческий опыт', note: 'Реальные задачи и реальные пользователи' },
  { when: 'Компания', what: 'Команда покрупнее', note: 'Процессы, масштаб и ответственность' },
  { when: 'Фриланс', what: 'Свои проекты', note: 'Работаю напрямую с заказчиками' },
  { when: 'Сейчас', what: 'Искусственный интеллект', note: 'Изучаю AI и строю ассистентов' }
]
</script>

<style lang="sass" scoped>
.about
  background: var(--color-bg)

  .head
    row-gap: 24px
    padding-block: clamp(54px, 3.3vw, 75px) clamp(48px, 4vw, 80px)

  .head-label
    grid-column: 1 / -1
    align-self: start

    @include from(lg)
      grid-column: 1
      padding-top: 12px

  .heading
    grid-column: 1 / -1
    font-size: clamp(44px, 4.5vw, 96px)

    @include from(lg)
      grid-column: 2 / 5
      padding-left: 24px

  .body
    row-gap: 56px
    padding-bottom: clamp(64px, 8vw, 140px)

  // Портрет с неоновыми уголками

  .portrait
    grid-column: 1 / -1
    max-width: 480px

    @include from(lg)
      grid-column: 1
      max-width: none
      padding-right: 24px

  .frame
    position: relative

    &::before,
    &::after
      content: ''
      position: absolute
      z-index: 1
      width: 32px
      height: 32px
      border: 0 solid var(--color-neon)
      filter: drop-shadow(0 0 6px var(--color-neon-glow))

    &::before
      top: -8px
      left: -8px
      border-width: 2px 0 0 2px

    &::after
      right: -8px
      bottom: -8px
      border-width: 0 2px 2px 0

    img
      width: 100%
      height: auto
      aspect-ratio: 4 / 5
      object-fit: cover


  // История

  .story
    grid-column: 1 / -1
    display: grid
    align-content: start
    gap: 24px
    max-width: 760px

    @include from(lg)
      grid-column: 2 / 4
      padding-inline: 24px

  .story .lead
    font-size: clamp(16px, 1.05vw, 19px)

  .intro
    margin-bottom: 8px
    font-size: clamp(22px, 1.6vw, 30px)
    font-weight: 500
    line-height: 1.35
    letter-spacing: -0.01em

  // Путь

  .path
    grid-column: 1 / -1

    @include from(lg)
      grid-column: 4
      padding-left: 24px

  .path-title
    display: block
    padding-bottom: 20px
    border-bottom: 1px solid var(--color-line)
    font-size: 11px
    font-weight: 600
    letter-spacing: 0.16em
    text-transform: uppercase
    color: var(--color-text-secondary)

  .steps
    position: relative
    margin-top: 28px

    // Вертикальная линия пути
    &::before
      content: ''
      position: absolute
      top: 6px
      bottom: 6px
      left: 3px
      width: 1px
      background: linear-gradient(to bottom, var(--color-line-strong), var(--color-accent))

  .step
    position: relative
    display: grid
    gap: 4px
    padding: 0 0 28px 28px

    &::before
      content: ''
      position: absolute
      top: 5px
      left: 0
      width: 7px
      height: 7px
      background: var(--color-bg)
      border: 1px solid var(--color-text-secondary)
      transform: rotate(45deg)

    &:last-child
      padding-bottom: 0

      &::before
        background: var(--color-neon)
        border-color: var(--color-neon)
        box-shadow: 0 0 12px var(--color-neon-glow)
        animation: step-pulse 2.4s ease-in-out infinite

      .step-when
        color: var(--color-neon)

  .step-when
    font-size: 11px
    font-weight: 600
    letter-spacing: 0.16em
    text-transform: uppercase
    color: var(--color-accent)

  .step-what
    font-size: 18px
    font-weight: 600
    line-height: 1.3

  .step-note
    font-size: 14px
    line-height: 1.5
    color: var(--color-text-secondary)

@keyframes step-pulse
  0%, 100%
    box-shadow: 0 0 12px var(--color-neon-glow)
  50%
    box-shadow: 0 0 2px var(--color-neon-glow)
</style>
