<template>
  <header class="header">
    <div class="inner container page-padding">
      <NuxtLink to="/" class="logo" aria-label="sikinski.dev — на главную">
        <span class="logo-mark" />
        <span>sikinski<span class="logo-domain">.dev</span></span>
      </NuxtLink>

      <nav class="nav" aria-label="Основная навигация">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="link">
          {{ link.title }}
        </NuxtLink>
      </nav>

      <a href="#contacts" class="cta">Связаться</a>
      <button
        type="button"
        class="menu"
        :class="{ open: isOpen }"
        :aria-expanded="isOpen"
        aria-controls="mobile-menu"
        @click="isOpen = !isOpen"
      >
        <span class="menu-icon">+</span>
        {{ isOpen ? 'Закрыть' : 'Меню' }}
      </button>
    </div>
  </header>

  <!-- Вне <header>: его backdrop-filter ломает position: fixed у потомков -->
  <Transition name="panel">
    <div v-if="isOpen" id="mobile-menu" class="panel">
      <nav class="panel-nav container page-padding" aria-label="Мобильная навигация">
        <NuxtLink
          v-for="(link, i) in links"
          :key="link.to"
          :to="link.to"
          class="panel-link"
          :class="{ active: route.path === link.to }"
          @click="isOpen = false"
        >
          <span class="panel-index">0{{ i + 1 }}</span>
          {{ link.title }}
        </NuxtLink>

        <NuxtLink to="/contacts" class="panel-cta main-button" @click="isOpen = false">Обсудить проект</NuxtLink>

        <div class="panel-contacts">
          <a href="https://t.me/sikinski" target="_blank" rel="noopener">Telegram</a>
          <a href="mailto:ulyana.sikinski@gmail.com">ulyana.sikinski@gmail.com</a>
        </div>
      </nav>
    </div>
  </Transition>
</template>

<script setup>
const route = useRoute()
const isOpen = ref(false)

const links = [
  { title: 'Опыт', to: '/#experience' },
  { title: 'Услуги', to: '/#services' },
  { title: 'Кейсы', to: '/cases' },
  { title: 'Обо мне', to: '/about' },
  { title: 'Контакты', to: '/contacts' }
]

// Закрываем при переходе (в том числе по якорю) и по Escape
watch(() => route.fullPath, () => {
  isOpen.value = false
})

const onKeydown = (event) => {
  if (event.key === 'Escape') {
    isOpen.value = false
  }
}

// Пока меню открыто, страница под ним не прокручивается
watch(isOpen, (open) => {
  document.documentElement.style.overflow = open ? 'hidden' : ''
})

onMounted(() => window.addEventListener('keydown', onKeydown))

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.documentElement.style.overflow = ''
})
</script>

<style lang="sass" scoped>
.header
  position: fixed
  inset: 0 0 auto
  z-index: 4
  background: rgba(15, 17, 21, 0.72)
  backdrop-filter: blur(14px)
  border-bottom: 1px solid var(--color-line)

  .inner
    display: grid
    grid-template-columns: repeat(var(--cols), 1fr)
    align-items: center
    height: var(--header-height)

  .logo
    display: inline-flex
    align-items: center
    gap: 12px
    font-size: 18px
    font-weight: 800
    letter-spacing: -0.02em

  // Свечение на обёртке: drop-shadow на самом элементе с маской обрезался бы
  .logo-mark
    display: block
    filter: drop-shadow(0 0 6px var(--color-neon-glow))

    &::before
      content: ''
      display: block
      width: 22px
      height: 17px
      background: var(--color-neon)
      mask: url('/images/diamond-icon.svg') center / contain no-repeat

  .logo-domain
    font-weight: 500
    color: var(--color-text-secondary)

  .nav
    display: none
    grid-column: 2 / 4
    gap: 40px
    padding-left: 24px

    @include from(lg)
      display: flex

  .link,
  .cta,
  .menu
    font-size: 12px
    font-weight: 600
    letter-spacing: 0.14em
    text-transform: uppercase

  .link
    position: relative
    color: var(--color-text-secondary)
    transition: color 0.3s

    &::after
      content: ''
      position: absolute
      left: 0
      bottom: -6px
      width: 100%
      height: 1px
      background: var(--color-neon)
      box-shadow: 0 0 8px var(--color-neon-glow)
      transform: scaleX(0)
      transform-origin: left
      transition: transform 0.3s

    &:hover
      color: var(--color-text)

      &::after
        transform: scaleX(1)

  .cta
    display: none
    justify-self: end
    color: var(--color-neon)
    text-shadow: 0 0 12px var(--color-neon-glow)

    @include from(lg)
      display: block

  .menu
    display: inline-flex
    align-items: center
    gap: 10px
    justify-self: end

    @include from(lg)
      display: none

  .menu-icon
    display: inline-block
    font-size: 18px
    font-weight: 400
    line-height: 1
    color: var(--color-neon)
    transition: transform 0.3s

  .menu.open .menu-icon
    transform: rotate(45deg)

// Мобильная панель

.panel
  position: fixed
  inset: var(--header-height) 0 0
  z-index: 3
  overflow-y: auto
  background: var(--color-bg-deep)

  @include from(lg)
    display: none

.panel-nav
  display: flex
  flex-direction: column
  min-height: 100%
  padding-block: 24px 40px

.panel-link
  display: flex
  align-items: baseline
  gap: 16px
  padding-block: 20px
  border-bottom: 1px solid var(--color-line-strong)
  font-size: clamp(28px, 8vw, 44px)
  font-weight: 800
  letter-spacing: -0.03em
  text-transform: uppercase

  // Подсвечиваем только страницы: роутер считает /#experience активным на главной
  &.active
    color: var(--color-neon)

.panel-index
  font-size: 11px
  font-weight: 600
  letter-spacing: 0.16em
  color: var(--color-accent)

.panel-cta
  margin-top: 40px

.panel-contacts
  display: grid
  gap: 12px
  margin-top: auto
  padding-top: 40px
  font-size: 14px
  color: var(--color-text-secondary)

.panel-enter-active,
.panel-leave-active
  transition: opacity 0.3s, transform 0.3s

.panel-enter-from,
.panel-leave-to
  opacity: 0
  transform: translateY(-12px)
</style>
