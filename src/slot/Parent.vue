<template>
  <div>
    <h2>Parent</h2>
    <input v-model="text" placeholder="부모 입력" class="border p-1" />
    <p>부모 값: {{ text }}</p>


    <div class="mb-3">
      <label>제목:</label>
      <input v-model="title" class="border p-1 ml-2" />
    </div>

    <div class="mb-3">
      <label>내용:</label>
      <input v-model="content" class="border p-1 ml-2" />
    </div>

    <p>📦 부모 데이터 → {{ title }} / {{ content }}</p>    

    <Child v-model="text" v-model:title="title" v-model:content="content" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Child from './Child.vue'

const text = ref('Hello from Parent')
const title = ref('Nuxt Multi v-model')
const content = ref('This is a nested example')
</script>