<template>
  <SlotChild :columns="columns" :rows="rows">

    <!-- 🔥 name 컬럼 커스터마이징 -->
    <template #cell-name="{ row }">
      <b style="color:blue">{{ row.name }}</b>
    </template>

    <!-- 🔥 age 컬럼 커스터마이징 -->
    <template #cell-age="{ row }">
      <span>{{ row.age }}세</span>
    </template>

  </SlotChild>
</template>

<script setup>
import SlotChild from './SlotChild.vue'

const columns = [
  { key: 'name', label: '이름' },
  { key: 'age', label: '나이' }
]

const rows = [
  { id: 1, name: '홍길동', age: 20 },
  { id: 2, name: '김철수', age: 30 }
]
</script>