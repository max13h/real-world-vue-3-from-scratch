import { defineStore } from 'pinia'

export const useEventsStore = defineStore('events', {
  state: () => ({
    event: {
      data: null,
      isPersonalEvent: false,
    },
    personalEvents: [],
    personalEventsID: 100000
  })
})
