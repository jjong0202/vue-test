<template>
  <input
    type="text"
    :value="modelValue"
    @input="onInput"
    class="border p-2 rounded"
  />
  <div>
    <input
      type="number"
      :value="min"
      @input="handleMinInput"
    />
    ~
    <input
      type="number"
      :value="max"
      @input="emit('update:max', +($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  min: number
  max: number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'update:min', value: number): void
  (e: 'update:max', value: number): void
}>()

function onInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

function handleMinInput(e: Event) {
  const target = e.target as HTMLInputElement
  emit('update:min', +target.value)
}
</script>