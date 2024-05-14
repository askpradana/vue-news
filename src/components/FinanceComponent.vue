<script setup>
import { useFinanceStore } from '../stores/fetchFinance'
import { computed } from 'vue'
const store = useFinanceStore()

store.getFinance()

const financeData = computed(() => {
    console.log(store.getFinanceData);
    return store.getFinanceData
})

const isLoading = computed(() => {
    return store.getLoading
})
</script>

<template>
    <main class="main">
        <p v-if="isLoading">Loading...</p>

        <div class="single-indicator" v-else-if="financeData && !isLoading">
            <li v-for="d in financeData.data.stock" :key="d.exchange" class="list-indicator">
                <p>{{ d.exchange }}</p>
                <p v-if="d.change_percent > 0" class="green">&uarr;{{ d.price }}</p>
                <p v-else class="red">&darr;{{ d.price }}</p>
            </li>


        </div>

        <div v-else>
            <p>No Data</p>
        </div>

    </main>
</template>

<style scoped>
.main {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    overflow-x: scroll;
    -ms-overflow-style: none;
    /* for IE and Edge */
    scrollbar-width: none;
    /* for Firefox */
    gap: 1rem;
    background-color: blanchedalmond;
}

.list-indicator {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    list-style: none;
    padding: 4px 12px;
    cursor: default;
}

.list-indicator:hover {
    transform: scale(1.1);
    transition: ease-in-out 0.1s;
}

.single-indicator {
    display: flex;
    flex-direction: row;
    gap: 4px;
}

.green {
    color: green;
}

.red {
    color: red;
}
</style>