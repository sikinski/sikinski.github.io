<template>
  <div class="tabs" role="tablist" aria-label="Разделы портфолио">
    <button
      v-for="tab in tabs"
      :id="`tab-${tab.id}`"
      :key="tab.id"
      type="button"
      role="tab"
      class="tab"
      :class="{ active: modelValue === tab.id }"
      :aria-selected="modelValue === tab.id"
      :aria-controls="`panel-${tab.id}`"
      @click="emit('update:modelValue', tab.id)"
    >
      {{ tab.title }}
      <span class="count">{{ tab.items.length }}</span>
    </button>
  </div>
</template>

<script setup>
// Панели с id `panel-${tab.id}` рисует сама страница
defineProps({
  tabs: { type: Array, required: true },
  modelValue: { type: String, required: true }
})

const emit = defineEmits(['update:modelValue'])
</script>

<style lang="sass" scoped>
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

.count
  font-size: 10px
  opacity: 0.7
</style>
