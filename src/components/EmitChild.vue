<!-- Child.vue -->
<template>
  <button @click="emitHello">Hello 보내기</button>

  <input :value="modelValue" @input="emit('update:modelValue', $event.target.value)" />

</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'say-hello', message: string): void
  (e: 'update:modelValue', value: string): void
}>()

const props = defineProps<{ modelValue: string }>()

const emitHello = () => {
  emit('say-hello', '안녕하세요!' + props.modelValue)
}
</script>