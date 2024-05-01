<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <p> Counter: {{ counter.count }}</p>
    <button @click="counter.increment()">Increment</button> -->
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

<script>
// import { useCounterStore } from '@/stores/counter';
// const counter = useCounterStore();

// counter.increment()

// fetch(import.meta.env.VITE_URL_NEWSAPI).then(res => res.json()).then(data => console.log(data))

const urlFinance = 'https://real-time-finance-data.p.rapidapi.com/search?query=Apple&language=en';
const optionsFinance = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2b45914a0dmsh97c59b900a15693p178667jsnc897f1a44da5',
    'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
  }
};

export default {
  methods: {
    getFinance() {
      fetch(urlFinance, optionsFinance)
        .then(response => response.json())
        .then(data => console.log(data))
    }
  },
  created() {
    this.getFinance()
  }
}

</script>