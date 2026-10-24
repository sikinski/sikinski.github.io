<template>
  <div class="gallery layout grid crosses">
    <div class="aside">
      <span class="label">Скриншоты</span>
      <div class="counter">
        <span class="current">{{ pad(index + 1) }}</span> / {{ pad(slides.length) }}
      </div>
      <p class="caption">{{ slides[index].caption }}</p>
      <div class="controls">
        <button type="button" class="arrow" aria-label="Предыдущий скриншот" :disabled="index === 0" @click="go(index - 1)">←</button>
        <button type="button" class="arrow" aria-label="Следующий скриншот" :disabled="index === slides.length - 1" @click="go(index + 1)">→</button>
      </div>
      <div class="progress">
        <span class="progress-fill" :style="{ width: `${((index + 1) / slides.length) * 100}%` }" />
      </div>
    </div>

    <!-- Нативный scroll-snap: свайп на телефоне работает без библиотек -->
    <div ref="viewport" class="viewport" @scroll.passive="onScroll">
      <button
        v-for="(slide, i) in slides"
        :key="slide.src"
        type="button"
        class="slide"
        :aria-label="`Открыть скриншот: ${slide.caption}`"
        @click="open(i)"
      >
        <img :src="slide.src" :alt="`${name} — ${slide.caption}`" width="1600" height="787" :loading="i === 0 ? 'eager' : 'lazy'">
      </button>
    </div>
  </div>

  <Teleport to="body">
    <Transition name="lightbox">
      <div v-if="isOpen" class="lightbox" role="dialog" aria-modal="true" :aria-label="`Скриншоты: ${name}`" @click.self="close">
        <img :src="slides[index].src" :alt="`${name} — ${slides[index].caption}`" class="lightbox-image">
        <div class="lightbox-bar">
          <span class="lightbox-caption">{{ pad(index + 1) }} / {{ pad(slides.length) }} · {{ slides[index].caption }}</span>
          <div class="controls">
            <button type="button" class="arrow" aria-label="Предыдущий скриншот" :disabled="index === 0" @click="go(index - 1)">←</button>
            <button type="button" class="arrow" aria-label="Следующий скриншот" :disabled="index === slides.length - 1" @click="go(index + 1)">→</button>
            <button type="button" class="arrow" aria-label="Закрыть" @click="close">×</button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  slug: { type: String, required: true },
  name: { type: String, required: true },
  captions: { type: Array, required: true }
})

const pad = n => String(n).padStart(2, '0')

const slides = computed(() => props.captions.map((caption, i) => ({
  caption,
  src: `/images/projects/${props.slug}/${pad(i + 1)}.webp`
})))

const viewport = ref(null)
const index = ref(0)
const isOpen = ref(false)

// Текущий слайд берём из прокрутки после её остановки: во время плавной
// прокрутки промежуточные позиции заставляли счётчик мигать
let scrollTimer
const onScroll = () => {
  clearTimeout(scrollTimer)
  scrollTimer = setTimeout(() => {
    const el = viewport.value
    if (el) {
      index.value = Math.round(el.scrollLeft / el.clientWidth)
    }
  }, 100)
}

const go = (i) => {
  const next = Math.min(Math.max(i, 0), slides.value.length - 1)
  index.value = next
  viewport.value.scrollTo({ left: next * viewport.value.clientWidth, behavior: isOpen.value ? 'auto' : 'smooth' })
}

const open = (i) => {
  go(i)
  isOpen.value = true
}

const close = () => {
  isOpen.value = false
}

const onKeydown = (event) => {
  if (!isOpen.value) return
  if (event.key === 'Escape') close()
  if (event.key === 'ArrowLeft') go(index.value - 1)
  if (event.key === 'ArrowRight') go(index.value + 1)
}

watch(isOpen, (value) => {
  document.documentElement.style.overflow = value ? 'hidden' : ''
})

onMounted(() => window.addEventListener('keydown', onKeydown))

onBeforeUnmount(() => {
  clearTimeout(scrollTimer)
  window.removeEventListener('keydown', onKeydown)
  document.documentElement.style.overflow = ''
})
</script>

<style lang="sass" scoped>
// Отступы свои: у компонента два корня, стили страницы на него не действуют
.gallery
  row-gap: 24px
  padding-block: clamp(37px, 4vw, 75px) clamp(64px, 6vw, 112px)

.aside
  grid-column: 1 / -1
  display: grid
  grid-template-columns: 1fr auto
  align-items: center
  gap: 16px

  @include from(lg)
    grid-column: 1
    grid-template-columns: 1fr
    align-content: start
    align-items: start
    gap: 20px
    padding: 10px 24px 0 0

  .label
    grid-column: 1 / -1

// Цифры одной ширины, чтобы счётчик не сдвигался
.counter,
.lightbox-caption
  font-variant-numeric: tabular-nums

.counter
  font-size: 13px
  font-weight: 600
  letter-spacing: 0.08em
  color: var(--color-text-secondary)

.current
  font-size: clamp(28px, 2.4vw, 44px)
  font-weight: 700
  letter-spacing: -0.04em
  color: var(--color-text)

.caption
  display: none
  font-size: 15px
  line-height: 1.5
  color: var(--color-text-secondary)

  @include from(lg)
    display: block
    min-height: 3em

.controls
  display: flex
  gap: 8px

.arrow
  display: grid
  place-items: center
  width: 48px
  height: 48px
  border: 1px solid var(--color-line-strong)
  font-size: 18px
  transition: border-color 0.3s, color 0.3s

  &:hover:not(:disabled)
    border-color: var(--color-neon)
    color: var(--color-neon)

  &:disabled
    opacity: 0.3
    cursor: default

.progress
  display: none
  height: 1px
  background: var(--color-line-strong)

  @include from(lg)
    display: block

.progress-fill
  display: block
  height: 100%
  background: var(--color-neon)
  box-shadow: 0 0 8px var(--color-neon-glow)
  transition: width 0.3s

.viewport
  grid-column: 1 / -1
  display: flex
  overflow-x: auto
  scroll-snap-type: x mandatory
  scrollbar-width: none
  border: 1px solid var(--color-line-strong)

  &::-webkit-scrollbar
    display: none

  @include from(lg)
    grid-column: 2 / 5
    margin-left: 24px

.slide
  flex: 0 0 100%
  scroll-snap-align: start
  aspect-ratio: 1600 / 787
  background: var(--color-surface)
  cursor: zoom-in

  img
    display: block
    width: 100%
    height: 100%
    object-fit: contain

// Полноэкранный просмотр

.lightbox
  position: fixed
  inset: 0
  z-index: 100
  display: grid
  grid-template-rows: 1fr auto
  place-items: center
  gap: 16px
  padding: 24px 16px
  background: rgba(8, 9, 12, 0.94)
  backdrop-filter: blur(6px)

.lightbox-image
  max-width: 100%
  max-height: calc(100svh - 120px)
  object-fit: contain
  border: 1px solid var(--color-line-strong)

.lightbox-bar
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  align-items: center
  gap: 16px
  width: min(100%, 1600px)

.lightbox-caption
  font-size: 13px
  font-weight: 600
  letter-spacing: 0.06em
  color: var(--color-text-secondary)

.lightbox-enter-active,
.lightbox-leave-active
  transition: opacity 0.25s

.lightbox-enter-from,
.lightbox-leave-to
  opacity: 0
</style>
