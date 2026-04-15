<template>
  <VmodelChild v-model="username" v-model:min="minValue" v-model:max="maxValue"/>
  <p>입력한 값: {{ username }}</p>
  <p>입력한 값: {{ minValue }}</p>
  <p>입력한 값: {{ maxValue }}</p>

  <div>
    <h3>computed v-model</h3>
    <input v-model="value" />
    <p>{{ value }}</p>
  </div>


  <FormField v-model="username2">
    <template #default="{ value, updatee }">
      <input :value="value" @input="updatee($event.target.value)" />
    </template>
  </FormField>

  <p>부모 값: {{ username2 }}</p>  

   <input v-model="text" placeholder="입력해보세요" />


    <label>
      <input type="checkbox" value="apple" v-model="selectedFruits" />
      🍎 사과
    </label>
    <label>
      <input type="checkbox" value="banana" v-model="selectedFruits" />
      🍌 바나나
    </label>
    <label>
      <input type="checkbox" value="orange" v-model="selectedFruits" />
      🍊 오렌지
    </label>

    <p>선택된 과일: {{ selectedFruits }}</p>

  <div>
    <select v-model="selectedCities" multiple>
      <option value="seoul">서울</option>
      <option value="busan">부산</option>
      <option value="daegu">대구</option>
    </select>

    <p>선택된 도시: {{ selectedCities }}</p>
  </div>  

  <div>
    <CheckboxGroup v-model="items" />
    <p>부모가 받은 값: {{ items }}</p>
  </div>
</template>

<script setup lang="ts">
import VmodelChild from './VmodelChild.vue'
import FormField from './FormField.vue'
import CheckboxGroup from './CheckboxGroup.vue'
import {ref, watch, computed} from 'vue'

const username = ref('')
const minValue = ref(0)
const maxValue = ref(100)
const items = ref<string[]>([])

const selectedFruits = ref<string[]>([])
const selectedCities = ref<string[]>([])

const props = defineProps<{ modelValue: string }>()
const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()

const value = computed({
  get: () => props.modelValue,
  set: (val: string) => emit('update:modelValue', val)
})

const username2 = ref('홍길동')

const text = ref('')

watch(text, (newVal, oldVal) => {
  console.log('새 값:', newVal)
  console.log('이전 값:', oldVal)
})
</script>