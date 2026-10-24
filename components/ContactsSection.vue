<template>
  <section id="contacts" class="contacts section">
    <div class="container page-padding">
      <div class="head grid crosses">
        <span class="head-label label">{{ label }}</span>
        <component :is="headingTag" class="heading title-xl">Обсудим ваш проект</component>
      </div>

      <div class="body grid">
        <ul class="main">
          <li v-for="item in main" :key="item.href">
            <a :href="item.href" :target="item.external ? '_blank' : null" :rel="item.external ? 'noopener' : null" class="main-link">
              <span class="main-label">{{ item.label }}</span>
              <span class="main-value">{{ item.value }}</span>
              <span class="arrow">↗</span>
            </a>
          </li>
        </ul>

        <div class="profiles">
          <ul>
            <li v-for="item in profiles" :key="item.href">
              <a :href="item.href" target="_blank" rel="noopener" class="profile">
                <span>{{ item.label }}</span>
                <span class="profile-note">{{ item.note }}</span>
                <span class="arrow">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <footer class="footer">
        <span>© 2026 sikinski.dev</span>
        <span class="footer-middle">Разработка сайтов на Vue 3 и Nuxt 4</span>
        <a href="#" class="up">Наверх ↑</a>
      </footer>
    </div>
  </section>
</template>

<script setup>
defineProps({
  label: { type: String, default: 'Контакты' },
  headingTag: { type: String, default: 'h2' }
})

const main = [
  { label: 'Telegram', value: '@sikinski', href: 'https://t.me/sikinski', external: true },
  { label: 'Почта', value: 'ulyana.sikinski@gmail.com', href: 'mailto:ulyana.sikinski@gmail.com' }
]

const profiles = [
  { label: 'GitHub', note: 'Код', href: 'https://github.com/sikinski' },
  { label: 'Kwork', note: 'Услуги', href: 'https://kwork.ru/user/sikinski' },
  { label: 'FL.ru', note: 'Портфолио', href: 'https://www.fl.ru/users/ulyanasikinski/portfolio/' },
  { label: 'hh.ru', note: 'Резюме', href: 'https://hh.ru/resume/183455daff0efd59760039ed1f613136313633' }
]
</script>

<style lang="sass" scoped>
.contacts
  background: radial-gradient(ellipse at 20% 100%, rgba(189, 105, 134, 0.1), transparent 55%), var(--color-bg)

  .head
    row-gap: 24px
    // --head-scale уменьшает отступ на отдельной странице /contacts
    padding-block: calc(clamp(80px, 10vw, 180px) * var(--head-scale, 1)) clamp(40px, 4vw, 72px)

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

  .body
    row-gap: 56px
    padding-bottom: clamp(80px, 8vw, 140px)

  // Telegram и почта — крупно

  .main
    grid-column: 1 / -1
    border-top: 1px solid var(--color-line-strong)

    @include from(lg)
      grid-column: 2 / 4
      margin-left: 24px

  .main-link
    display: grid
    grid-template-columns: 1fr auto
    gap: 8px 24px
    align-items: end
    padding: 28px 16px 28px 0
    border-bottom: 1px solid var(--color-line-strong)

    &:hover
      .main-value
        color: var(--color-neon)
        text-shadow: 0 0 20px var(--color-neon-glow)

      .arrow
        color: var(--color-neon)
        transform: translate(4px, -4px)

  .main-label
    grid-column: 1 / -1
    font-size: 11px
    font-weight: 600
    letter-spacing: 0.16em
    text-transform: uppercase
    color: var(--color-text-secondary)

  .main-value
    font-size: clamp(22px, 2.6vw, 48px)
    font-weight: 700
    line-height: 1.1
    letter-spacing: -0.02em
    overflow-wrap: anywhere
    transition: color 0.3s, text-shadow 0.3s

  .arrow
    font-size: 20px
    color: var(--color-text-secondary)
    transition: color 0.3s, transform 0.3s

  // Профили на площадках

  .profiles
    grid-column: 1 / -1
    border-top: 1px solid var(--color-line-strong)

    @include from(lg)
      grid-column: 4
      margin-left: 24px

  .profile
    display: grid
    grid-template-columns: 1fr auto auto
    gap: 16px
    align-items: center
    padding: 18px 16px 18px 0
    border-bottom: 1px solid var(--color-line)
    font-size: 15px
    font-weight: 600
    transition: color 0.3s

    .arrow
      font-size: 14px

    &:hover
      color: var(--color-neon)

      .arrow
        color: var(--color-neon)
        transform: translate(3px, -3px)

  .profile-note
    font-size: 11px
    font-weight: 600
    letter-spacing: 0.14em
    text-transform: uppercase
    color: var(--color-text-secondary)

  // Подвал

  .footer
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    gap: 16px
    padding-block: 28px
    border-top: 1px solid var(--color-line)
    font-size: 11px
    font-weight: 600
    letter-spacing: 0.14em
    text-transform: uppercase
    color: var(--color-text-secondary)

  .footer-middle
    display: none

    @include from(md)
      display: block

  .up
    transition: color 0.3s

    &:hover
      color: var(--color-neon)
</style>
