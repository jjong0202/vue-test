<!-- Parent.vue -->
<template>
  <EmitChild v-model="username" @say-hello="onHello" />
</template>

<script setup lang="ts">
import EmitChild from './EmitChild.vue'
import {ref} from 'vue'

const username = ref('이영희')

const onHello = (msg: string) => {
  console.log('자식이 보낸 메시지:', msg)
  alert('자식이 보낸 메시지:' +  msg)
}
</script>