<template>
  <div class="border p-2 mt-2">
    <h3>Child</h3>
    <p>자식에서 받은 값: {{ modelValue }}</p>

    <!-- 자식에서도 직접 수정 가능 -->
    <input :value="modelValue" @input="updateValue" />

    <p>자식이 받은 title: {{ title }}</p>
    <p>자식이 받은 content: {{ content }}</p>

    <div class="mb-2">
      <input
        :value="title"
        @input="updateTitle"
        class="border p-1"
        placeholder="자식에서 제목 수정"
      />
    </div>

    <div class="mb-2">
      <input
        :value="content"
        @input="updateContent"
        class="border p-1"
        placeholder="자식에서 내용 수정"
      />
    </div>

    <!-- 손자 컴포넌트에 전달 -->
    <GrandChild 
      v-model="innerValue" 
      v-model:title="innerTitle"
      v-model:content="innerContent"/>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import GrandChild from './GrandChild.vue'

const props = defineProps<{
  modelValue: string
  title: string
  content: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  // (e: 'update:modelValue', value: string): void
  'update:title': [value: string]
  'update:content': [value: string]
}>()

// 자식-손자간 v-model 연결
const innerValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

// 손자에게 넘길 computed 연결
const innerTitle = computed({
  get: () => props.title,
  set: (val) => emit('update:title', val),
})

const innerContent = computed({
  get: () => props.content,
  set: (val) => emit('update:content', val),
})

function updateValue(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
function updateTitle(e: Event) {
  emit('update:title', (e.target as HTMLInputElement).value)
}
function updateContent(e: Event) {
  emit('update:content', (e.target as HTMLInputElement).value)
}
</script>