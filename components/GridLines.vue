<template>
  <div class="grid-lines" aria-hidden="true">
    <div class="inner container frame-padding">
      <span v-for="n in 4" :key="n" class="col" />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.grid-lines
  position: fixed
  inset: 0
  z-index: 5
  pointer-events: none

  .inner
    display: grid
    grid-template-columns: repeat(var(--cols), 1fr)
    height: 100%

  .col
    border-left: 1px solid var(--color-line)

    &:nth-child(2)
      border-right: 1px solid var(--color-line)

    &:nth-child(n + 3)
      display: none

    @include from(lg)
      &:nth-child(2)
        border-right: none

      &:nth-child(n + 3)
        display: block

      &:last-child
        border-right: 1px solid var(--color-line)
</style>
