import { defineStore } from 'pinia'

export const useFinanceStore = defineStore('finance', {
  state: () => ({
    financeData: {},
    loading: false
  }),
  getters: {
    getFinanceData: (state) => state.financeData,
    getLoading: (state) => state.loading
  },
  actions: {
    async getFinance() {
      const urlFinance = import.meta.env.VITE_URL_FINANCEAPI
      const optionsFinance = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_URL_FINANCE_KEY,
          'X-RapidAPI-Host': import.meta.env.VITE_URL_FINANCE_HOST
        }
      }

      try {
        this.loading = true
        const response = await fetch(urlFinance, optionsFinance)
        const data = await response.json()
        this.financeData = data
        this.loading = false
      } catch (error) {
        this.loading = false
        console.error(error)
      }
    }
  }
})
