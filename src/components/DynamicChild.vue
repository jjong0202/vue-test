<!-- Child.vue -->
<template>
  <h2>동적슬롯 slotName="title"이면 h1이 나오고, "sub"로 바꾸면 p가 나옵니다.</h2>
  <component :is="slots[slotName]" />
</template>

<script setup lang="ts">
import { useSlots } from 'vue'
// const props = defineProps({ slotName?: String })
// const slots = useSlots()

const props = defineProps<{
  slotName: string   // 필요하다면
}>()

const slots = useSlots()

// defineSlots<{
//   [key: string]: () => any     // 모든 문자열 이름을 슬롯으로 허용
// }>()
</script>