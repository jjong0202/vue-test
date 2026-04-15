<template>
  <div class="border p-2 mt-2 bg-gray-50">
    <h4>GrandChild</h4>
    <input :value="modelValue" @input="updateValue" />
    <p>손자 값: {{ modelValue }}</p>

    <div class="mb-2">
      <input
        :value="title"
        @input="updateTitle"
        class="border p-1"
        placeholder="손자에서 제목 수정"
      />
    </div>

    <div class="mb-2">
      <input
        :value="content"
        @input="updateContent"
        class="border p-1"
        placeholder="손자에서 내용 수정"
      />
    </div>

    <p>🧩 손자 값: {{ title }} / {{ content }}</p>    
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  title: string
  content: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'update:title': [value: string]
  'update:content': [value: string]
}>()

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