<template>
  <section id="services" class="services section">
    <div class="container page-padding">
      <div class="head grid crosses">
        <span class="head-label label">03 Услуги</span>
        <h2 class="heading title-xl">Услуги и цены</h2>
      </div>

      <div v-for="(group, i) in serviceGroups" :key="group.id" class="group grid">
        <div class="group-head">
          <span class="group-index">0{{ i + 1 }}</span>
          <h3 class="group-title">{{ group.title }}</h3>
          <p class="group-note">{{ group.note }}</p>
        </div>

        <ul class="offers">
          <li v-for="item in group.items" :key="item.name" class="offer">
            <div class="offer-info">
              <h4 class="offer-name">{{ item.name }}</h4>
              <p class="offer-text">{{ item.text }}</p>
            </div>
            <span class="term">{{ item.term }}</span>
            <span class="price">{{ item.priceText }}</span>
          </li>
        </ul>
      </div>

      <div class="cta grid">
        <p class="cta-text">Не нашли свою задачу? Напишите — посчитаю стоимость под ваш проект.</p>
        <a href="#contacts" class="cta-button main-button">Обсудить проект</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { serviceGroups } from '#shared/services'
</script>

<style lang="sass" scoped>
.services
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

  // Группа: слева название, справа прайс

  .group
    row-gap: 24px
    padding-block: clamp(32px, 3vw, 48px)
    border-top: 1px solid var(--color-line-strong)

  .group-head
    grid-column: 1 / -1
    display: grid
    grid-template-columns: auto 1fr
    align-content: start
    gap: 6px 16px

    @include from(lg)
      grid-column: 1
      padding-right: 24px

  .group-index
    grid-row: span 2
    font-size: clamp(28px, 2.4vw, 44px)
    font-weight: 700
    line-height: 1
    letter-spacing: -0.04em
    color: var(--color-text-secondary)

  .group-title
    font-size: clamp(20px, 1.6vw, 28px)
    font-weight: 700
    line-height: 1.2
    letter-spacing: -0.01em
    text-transform: uppercase

  .group-note
    font-size: 14px
    line-height: 1.5
    color: var(--color-text-secondary)

  .offers
    grid-column: 1 / -1

    @include from(lg)
      grid-column: 2 / 5
      padding-left: 24px

  .offer
    display: grid
    grid-template-columns: 1fr auto
    gap: 12px 24px
    align-items: baseline
    padding-block: 20px
    border-bottom: 1px solid var(--color-line)

    &:first-child
      padding-top: 0

    &:last-child
      border-bottom: none
      padding-bottom: 0

    @include from(md)
      grid-template-columns: 1fr 120px 200px

    &:hover
      .price
        color: var(--color-neon)
        text-shadow: 0 0 16px var(--color-neon-glow)

  .offer-info
    grid-column: 1 / -1

    @include from(md)
      grid-column: 1

  .offer-name
    font-size: clamp(17px, 1.2vw, 21px)
    font-weight: 600
    line-height: 1.3

  .offer-text
    margin-top: 8px
    max-width: 560px
    font-size: 15px
    line-height: 1.55
    color: var(--color-text-secondary)

  .term
    font-size: 11px
    font-weight: 600
    letter-spacing: 0.14em
    text-transform: uppercase
    color: var(--color-accent)
    white-space: nowrap

  .price
    justify-self: end
    font-size: clamp(18px, 1.4vw, 24px)
    font-weight: 700
    letter-spacing: -0.01em
    white-space: nowrap
    transition: color 0.3s, text-shadow 0.3s

  // Призыв в конце

  .cta
    row-gap: 24px
    align-items: center
    padding-block: clamp(40px, 4vw, 64px) clamp(64px, 8vw, 140px)
    border-top: 1px solid var(--color-line-strong)

  .cta-text
    grid-column: 1 / -1
    max-width: 560px
    font-size: clamp(17px, 1.2vw, 21px)
    line-height: 1.5

    @include from(lg)
      grid-column: 2 / 4
      padding-left: 24px

  .cta-button
    grid-column: 1 / -1
    justify-self: start

    @include from(lg)
      grid-column: 4
      justify-self: end
</style>
