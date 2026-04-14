<template>
  <VmodelChild v-model="username" v-model:min="minValue" v-model:max="maxValue"/>
  <p>입력한 값: {{ username }}</p>
  <p>입력한 값: {{ minValue }}</p>
  <p>입력한 값: {{ maxValue }}</p>
</template>

<script setup lang="ts">
import VmodelChild from './VmodelChild.vue'
import {ref} from 'vue'

const username = ref('')
const minValue = ref(0)
const maxValue = ref(100)
</script>