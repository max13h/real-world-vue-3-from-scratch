import { defineStore } from 'pinia'

export const useFlashMessageStore = defineStore('flashMessage', {
  state: () => ({
    flashMessage: '',
    statusMessage: '',
  })
})
