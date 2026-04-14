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
</template>

<script setup>
defineProps({
  columns: Array,
  rows: Array
})
</script>