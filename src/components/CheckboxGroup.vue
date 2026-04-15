<!-- CheckboxGroup.vue -->
<script setup lang="ts">
const props = defineProps<{ modelValue: string[] }>()
const emit = defineEmits(['update:modelValue'])

function toggle(value: string) {
  const newArr = [...props.modelValue]
  const index = newArr.indexOf(value)
  if (index > -1) newArr.splice(index, 1)
  else newArr.push(value)
  emit('update:modelValue', newArr)
}
</script>

<template>
  <label><input type="checkbox" @change="toggle('A')" :checked="props.modelValue.includes('A')" /> A</label>
  <label><input type="checkbox" @change="toggle('B')" :checked="props.modelValue.includes('B')" /> B</label>
</template>