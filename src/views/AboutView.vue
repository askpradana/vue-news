<template>
  <div class="about">
    <div v-if="data">
      <!-- <li v-for="item in financeData.data.stock" :key="item.symbol">
        {{ item.name }}
      </li> -->
      <p>Data: </p>
      <p>{{ data }}</p>
    </div>

    <div v-else>
      <p>No Data</p>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup>
import { computed, onMounted } from 'vue';
import { useFinanceStore } from '../stores/fetchFinance'
const finance = useFinanceStore()

const data = computed(() => {
  return finance.financeData
})

onMounted(() => {
  finance.getFinance()
})



</script>