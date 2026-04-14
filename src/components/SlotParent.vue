<template>
  <SlotChild :columns="columns" :rows="rows">

    <!-- 🔥 name 컬럼 커스터마이징 -->
    <!-- <template #cell-name="{ row }">
      <b style="color:blue">{{ row.name }}</b>
    </template> -->

    <!-- 🔥 age 컬럼 커스터마이징 -->
    <!-- <template #cell-age="{ row }">
      <span>{{ row.age }}세</span>
    </template> -->

    <template v-for="col in columns" #[`cell-${col.key}`]="{ row }">
        <span>{{ row[col.key] }} (커스텀)</span>
        <button v-if="col.key=='age'" @click="()=>handleDetail(row)">상세</button>
    </template>  
    
    <template #default="{ user, isLogin }">
        <div v-if="isLogin">
        {{ user.name }} ({{ user.age }}세)
        </div>
    </template>    


    <template #header>
      <h2 class="text-lg font-bold">공지사항</h2>
    </template>

    <template #main>
      <p>이번 주 점검은 금요일 2시에 진행됩니다.</p>
    </template>

    <template #footer>
      <span>2025-09-24</span>
    </template>
    
    
    <template #[`${current}2`]>현재 슬롯은 {{ current }} 입니다.   
    <button @click="current = 'header'">header2로 변경</button>  
    <button @click="current = 'content'">Content로 변경</button>
    <button @click="current = 'footer'">Footer로 변경</button>
    </template>
  </SlotChild>

  <form>
    <FormSlot label="이메일" v-model="email" :error="errors.email">
      <template #formdefault="{ value, update }">
        <input
          type="email"
          :value="value"
          @input="update(($event.target as HTMLInputElement).value)"
          class="border p-2 rounded w-full"
        />
        <p>{{ value }}</p>
        <p>{{ errors }}</p>
      </template>
    </FormSlot>

    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
      제출
    </button>
  </form>
</template>


<script setup lang="ts">
import SlotChild from './SlotChild.vue'
import FormSlot from './FormSlot.vue'

import type { Column, Row } from './table'
import {ref, reactive} from 'vue'

const handleDetail = (row: Row) => {
  alert(`ID: ${row.id} 클릭됨!`)
  // 또는 더 복잡한 로직 추가 가능
}

const columns:Column[] = [
  { key: 'name', label: '이름' },
  { key: 'age', label: '나이' }
]

const rows:Row[] = [
  { id: 1, name: '홍길동', age: 20 },
  { id: 2, name: '김철수', age: 30 },
  { id: 3, name: '이영희', age: 22 }
]

const email = ref('')
const errors = reactive({
  email: ''
})

const current = ref("header") // 동적으로 바꿀 slot 이름
</script>