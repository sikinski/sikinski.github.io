<template>
  <div class="page">
    <section class="section">
      <div class="container page-padding">
        <div class="head grid crosses">
          <span class="head-label label">Портфолио</span>
          <div class="head-content">
            <h1 class="title-xl">Кейсы</h1>

            <ProjectTabs :model-value="activeTab" :tabs="projectTabs" @update:model-value="selectTab" />
          </div>
        </div>

        <!-- Оба раздела в разметке, чтобы поисковики видели все кейсы -->
        <div
          v-for="tab in projectTabs"
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
import { projectTabs } from '#shared/projects'

const route = useRoute()
const router = useRouter()

// Раздел хранится в адресе, чтобы ссылкой можно было поделиться; по умолчанию — AI-ассистенты
const activeTab = computed(() => (route.query.tab === 'web' ? 'web' : 'ai'))

const selectTab = (id) => {
  router.replace({ query: id === 'ai' ? {} : { tab: id } })
}

useSiteSeo({
  title: 'Кейсы — AI-ассистенты, боты и сайты | sikinski.dev',
  description: 'Портфолио: AI-ассистенты и Telegram-боты, маркетплейсы, интернет-магазины, многостраничные сайты и корпоративные порталы под ключ.',
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
