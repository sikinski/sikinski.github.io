<template>
  <div class="page">
    <section class="section">
      <div class="container page-padding">
        <div class="head grid crosses">
          <span class="head-label label">Портфолио</span>
          <div class="head-content">
            <h1 class="title-xl">Кейсы</h1>

            <div class="tabs" role="tablist" aria-label="Разделы портфолио">
              <button
                v-for="tab in tabs"
                :id="`tab-${tab.id}`"
                :key="tab.id"
                type="button"
                role="tab"
                class="tab"
                :class="{ active: activeTab === tab.id }"
                :aria-selected="activeTab === tab.id"
                :aria-controls="`panel-${tab.id}`"
                @click="selectTab(tab.id)"
              >
                {{ tab.title }}
                <span class="tab-count">{{ tab.items.length }}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Оба раздела в разметке, чтобы поисковики видели все кейсы -->
        <div
          v-for="tab in tabs"
          v-show="activeTab === tab.id"
          :id="`panel-${tab.id}`"
          :key="tab.id"
          role="tabpanel"
          :aria-labelledby="`tab-${tab.id}`"
          class="panel"
        >
          <ProjectsGrid v-if="tab.items.length" :items="tab.items" />
          <p v-else class="empty">{{ tab.empty }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { webProjects, aiProjects } from '#shared/projects'

const route = useRoute()
const router = useRouter()

const tabs = [
  { id: 'web', title: 'Web', items: webProjects },
  {
    id: 'ai',
    title: 'AI-ассистенты',
    items: aiProjects,
    empty: 'Скоро здесь появятся мои AI-ассистенты — расскажу, что они умеют и как помогают в работе.'
  }
]

// Раздел хранится в адресе, чтобы ссылкой можно было поделиться
const activeTab = computed(() => (route.query.tab === 'ai' ? 'ai' : 'web'))

const selectTab = (id) => {
  router.replace({ query: id === 'web' ? {} : { tab: id } })
}

useSiteSeo({
  title: 'Кейсы — разработка сайтов и AI-ассистентов | sikinski.dev',
  description: 'Портфолио: маркетплейсы, интернет-магазины, многостраничные сайты и корпоративные порталы на Vue и Nuxt, а также AI-ассистенты.',
  path: '/cases'
})
</script>

<style lang="sass" scoped>
.page
  padding-top: var(--header-height)
  background: var(--color-bg-deep)

.head
  row-gap: 24px
  padding-block: clamp(54px, 5.3vw, 94px) clamp(40px, 4vw, 72px)

.head-label
  grid-column: 1 / -1
  align-self: start

  @include from(lg)
    grid-column: 1
    padding-top: 12px

.head-content
  grid-column: 1 / -1
  display: grid
  justify-items: start
  gap: clamp(24px, 3vw, 40px)

  @include from(lg)
    grid-column: 2 / 5
    padding-left: 24px

.tabs
  display: flex
  flex-wrap: wrap
  border: 1px solid var(--color-line-strong)

.tab
  display: inline-flex
  align-items: center
  gap: 10px
  padding: 14px 24px
  font-size: 12px
  font-weight: 700
  letter-spacing: 0.14em
  text-transform: uppercase
  color: var(--color-text-secondary)
  transition: color 0.3s, background-color 0.3s

  & + .tab
    border-left: 1px solid var(--color-line-strong)

  &:hover
    color: var(--color-text)

  &.active
    background: var(--color-accent)
    color: var(--color-bg-deep)

.tab-count
  font-size: 10px
  opacity: 0.7

.panel
  padding-bottom: clamp(64px, 8vw, 140px)

.empty
  max-width: 560px
  padding: 40px 0
  font-size: 17px
  line-height: 1.6
  color: var(--color-text-secondary)

  @include from(lg)
    margin-left: 25%
    padding-left: 24px
</style>
