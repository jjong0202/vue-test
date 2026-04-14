<template>
  <div class="mb-4">
    <label class="block mb-1 font-semibold">{{ label }}</label>
    <slot name="formdefault" :value="modelValue" :update="updateValue"></slot>
    <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string
  modelValue: string | number
  error?: string
}
const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

function updateValue(val: string | number) {
  emit('update:modelValue', val)
}
</script>