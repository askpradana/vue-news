import { defineStore } from 'pinia'

export const useFetchNewsStore = defineStore('news', {
  state: () => ({
    newsData: {},
    loading: false
  }),
  getters: {
    getNewsData: (state) => state.newsData,
    getLoading: (state) => state.loading
  },
  actions: {
    async getNews() {
      const url = import.meta.env.VITE_URL_NEWSAPI
      const headers = {
        method: 'GET'
      }

      try {
        this.loading = true
        const response = await fetch(url, headers)
        const data = await response.json()
        this.newsData = data
        this.loading = false
      } catch (error) {
        this.loading = false
        console.error(error)
      }
    }
  }
})
