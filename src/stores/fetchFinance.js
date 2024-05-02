import { defineStore } from 'pinia'

export const useFinanceStore = defineStore('finance', {
  state: () => ({
    financeData: {}
  }),
  getters: {
    getFinanceData: (state) => state.financeData
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
        const response = await fetch(urlFinance, optionsFinance)
        const data = await response.json()
        this.financeData = data
      } catch (error) {
        console.error(error)
      }
    }
  }
})
