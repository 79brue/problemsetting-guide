<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="guide-box guide-box--caution">
    <p class="guide-box__title">{{ title ?? 'Caution' }}</p>
    <div class="guide-box__content">
      <slot />
    </div>
  </div>
</template>