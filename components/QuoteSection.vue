<template>
  <section class="quote section">
    <div class="container page-padding">
      <div class="layout grid crosses">
        <span class="head-label label">Кредо</span>

        <blockquote class="body">
          <span class="decor top" />
          <p class="line muted">
            Don’t downgrade your dream just to fit your reality.
          </p>
          <p class="line">
            <span class="accent">Upgrade</span> your conviction to match your destiny.
          </p>
          <span class="decor bottom" />
        </blockquote>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.quote
  overflow: hidden
  background: radial-gradient(ellipse at 70% 60%, rgba(189, 105, 134, 0.1), transparent 55%), var(--color-bg-deep)

  .layout
    row-gap: 40px
    padding-block: clamp(96px, 12vw, 240px)

  .head-label
    grid-column: 1 / -1
    align-self: start

    @include from(lg)
      grid-column: 1
      padding-top: 12px

  .body
    position: relative
    grid-column: 1 / -1
    display: grid
    gap: clamp(16px, 2vw, 32px)
    padding-block: 48px

    @include from(lg)
      grid-column: 2 / 5
      padding-left: 24px

  .line
    font-size: clamp(30px, 4.2vw, 88px)
    font-weight: 800
    line-height: 1
    letter-spacing: -0.035em
    text-transform: uppercase

    &.muted
      color: var(--color-text-secondary)

  .accent
    color: var(--color-neon)
    text-shadow: 0 0 28px var(--color-neon-glow)

  // Неоновая черта и тонкая линия — как на фоне кейсов
  .decor
    position: absolute
    display: flex
    align-items: center
    gap: 16px
    width: min(320px, 60%)

    &::before
      content: ''
      flex: none
      width: 32px
      height: 4px
      background: var(--color-neon)
      box-shadow: 0 0 12px var(--color-neon-glow)

    &::after
      content: ''
      flex: 1
      height: 1px
      background: var(--color-line-strong)

    &.top
      top: 0

    &.bottom
      right: 0
      bottom: 0
      flex-direction: row-reverse
</style>
