<template>
  <div class="about">

    <div v-if="isLoading">
      Loading...
    </div>

    <div v-else-if="data && !isLoading">
      <li v-for="d in data.data.stock" :key="d.symbol">
        <p>{{ d.name }}</p>
        <p>{{ d.price }}</p>
      </li>
    </div>

    <div v-else>
      <p>No Data</p>
    </div>
  </div>
</template>

<style scoped>
li {
  display: flex;
  flex-direction: row;
  list-style: none;
}

li,
p {
  padding: 0 2px;
}
</style>

<script setup>
import { computed, onMounted } from 'vue';
import { useFinanceStore } from '../stores/fetchFinance'
const finance = useFinanceStore()

const data = computed(() => {
  console.log(finance.getFinanceData);
  return finance.getFinanceData
})

const isLoading = computed(() => {
  return finance.getLoading
})

onMounted(() => {
  finance.getFinance()
})

</script>