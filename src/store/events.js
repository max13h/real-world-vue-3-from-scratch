import { defineStore } from 'pinia'

export const useEventsStore = defineStore('events', {
  state: () => ({
    event: null,
    personalEvents: []
  })
})
