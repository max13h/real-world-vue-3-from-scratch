import { defineStore } from 'pinia'

export const useAdminStore = defineStore('admin', {
  state: () => ({
    hasAuth: false
  })
})
