<script setup lang="ts">
type RuleLevel = 'required' | 'recommended' | 'preference' | 'consult'

const props = defineProps<{
  id: string
  level: RuleLevel
  title: string
}>()

const levelLabels: Record<RuleLevel, string> = {
  required: 'Required',
  recommended: 'Recommended',
  preference: 'Preference',
  consult: 'Consult Director'
}

const levelDescriptions: Record<RuleLevel, string> = {
  required: 'Must be followed unless an exception is approved.',
  recommended: 'Should usually be followed, but exceptions are acceptable with a reason.',
  preference: 'A style or personal-choice guideline; consistency is preferred.',
  consult: 'Do not decide alone; consult a director before proceeding.'
}
</script>

<template>
  <section class="rule-block" :class="`rule-block--${props.level}`">
    <div class="rule-block__header">
      <div>
        <p class="rule-block__eyebrow">
          Rule · {{ levelLabels[props.level] }} · {{ props.id }}
        </p>
        <h4 class="rule-block__title">{{ props.title }}</h4>
      </div>
    </div>

    <p class="rule-block__description">
      {{ levelDescriptions[props.level] }}
    </p>

    <div class="rule-block__content">
      <slot />
    </div>
  </section>
</template>