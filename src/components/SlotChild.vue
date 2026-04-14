<template>
  <table border="1">
    <thead>
      <tr>
        <th v-for="col in columns" :key="col.key">
          {{ col.label }}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="row in rows" :key="row.id">
        <td v-for="col in columns" :key="col.key">

          <!-- 🔥 동적 슬롯 -->
          <slot 
            :name="`cell-${col.key}`" 
            :row="row"
          >
            <!-- 기본 fallback -->
            {{ row[col.key] }}
          </slot>

        </td>
      </tr>
    </tbody>
  </table>

  <slot :user="{ name: '홍길동', age: 25 }" :isLogin="true"></slot>
  
  <div class="rounded-2xl shadow p-4 bg-white">
      <header v-if="$slots.header" class="mb-2">
      <slot name="header"></slot>
      </header>

      <main>
      <slot name="main"></slot>
      </main>

      <footer v-if="$slots.footer" class="mt-2 text-sm text-gray-500">
      <slot name="footer"></slot>
      </footer>
  </div>

  <div>
    <h2>동적슬롯</h2>
    <slot name="header2"></slot>
    <slot name="content2"></slot>
    <slot name="footer2"></slot>
  </div>

</template>



<script setup lang="ts">
import type { Column, Row } from './table'

// interface Column{
//     key:string
//     label:string
// }

// interface Row{
//     id:number
//     // [key: string]: any
//     name:string
//     age:number
// }

defineProps<{
  columns: Column[]
  rows: Row[]
}>()

</script>