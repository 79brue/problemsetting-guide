<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="guide-box guide-box--done">
    <p class="guide-box__title">{{ title ?? 'Definition of done' }}</p>
    <div class="guide-box__content">
      <slot />
    </div>
  </div>
</template>