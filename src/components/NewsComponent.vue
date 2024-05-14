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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin: 8rem;
}

.news {
    position: relative;
}

.news img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
}

.overlay-text-h4 {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    color: #fff;
    width: 100%;
    text-align: center;
}

.overlay-text-h4 h4 {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
}

li {
    list-style: none;
}

img {
    width: 24rem;
}
</style>