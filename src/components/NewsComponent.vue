<script setup>
import { computed } from 'vue';
import { useFetchNewsStore } from '../stores/fetchNews'
const news = useFetchNewsStore()

news.getNews()

const data = computed(() => {
    return news.getNewsData
})

const isLoading = computed(() => {
    return news.getLoading
})

</script>

<template>
    <main>
        <div v-if="isLoading">
            <p>Loading...</p>
        </div>

        <div v-else-if="data && !isLoading" class="newspresent">
            <li v-for="d in data.articles" :key="d.title" class="news">
                <img :src="d.urlToImage" />
                <div class="overlay-text-h4">
                    <h4>{{ d.title }}</h4>

                </div>
            </li>
        </div>

        <div v-else>
            <p>No Data</p>
        </div>

    </main>
</template>

<style scoped>
.newspresent {
    display: flex;
    flex-direction: column;
    align-items: center;
}


.news {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    width: min-content;
    justify-content: center;
    align-items: center;
    position: relative;
}

li:nth-child(3) {
    background-color: red;
}



.overlay-text-h4 {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 10px;
    font-size: 20px;
}

img {
    width: 24rem;
}
</style>