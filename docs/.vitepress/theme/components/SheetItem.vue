<script setup lang="ts">
defineProps<{
  id: string
  phase?: string
}>()
</script>

<template>
  <div class="sheet-item">
    <span class="sheet-item__label">Spreadsheet item</span>
    <code class="sheet-item__id">{{ id }}</code>
    <span v-if="phase" class="sheet-item__phase">{{ phase }}</span>
  </div>
</template>