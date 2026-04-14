<!-- FormField.vue -->
<template>
  <slot :value="modelValue" :updatee="updateValue" />
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: string }>()
const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()

const updateValue = (val: string) => emit('update:modelValue', val)
</script>