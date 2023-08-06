<script>
import EventCard from "../components/EventCard.vue";
import EventService from "../services/EventService";
import EventPagination from "../components/EventPagination.vue";
import NProgress from 'nprogress'

export default {
  data() {
    return {
      events: null,
      totalEvents: 0
    }
  },
  props: {
    page: {
      require: true
    }
  },
  beforeRouteEnter(to, from, next) {
    NProgress.start()
    EventService.getEvents(4, to.query.page || 1)
      .then((response) => {
        next(comp => {
          comp.events = response.data
          comp.totalEvents = response.headers['x-total-count']
        })
      })
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          console.log(error)
          next({ name: '404-resource', params: { resource: 'event' } })
        } else {
          next({ name: 'network-error' })
        }
      })
      .finally(() => {
        NProgress.done()
      })
  },
  beforeRouteUpdate(to) {
    NProgress.start()
    return EventService.getEvents(4, to.query.page || 1)
      .then((response) => {
        this.events = response.data
        this.totalEvents = response.headers['x-total-count']
      })
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          console.log(error)
          return { name: '404-resource', params: { resource: 'event' } }
        } else {
          return { name: 'network-error' }
        }
      })
      .finally(() => {
        NProgress.done()
      })
  },
  methods: {
    getEvents() {
      EventService.getEvents(4, this.page)
        .then((response) => {
          this.events = response.data
          this.totalEvents = response.headers['x-total-count']
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            console.log(error)
            this.$router.push({ name: '404-resource', params: { resource: 'event' } })
          } else {
            this.$router.push({ name: 'network-error' })
          }
        })
    }
  },
  watch: {
    page() {
      this.getEvents()
    }
  },
  computed: {
    hasNextPage() {
      const totalPage = this.totalEvents / 4
      return (totalPage - this.page) > 0
    }
  },
  components: {
    EventCard,
    EventPagination
  }
}
</script>

<template>
  <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>

  <EventPagination :hasNextPage="hasNextPage" :page="page" :totalEvents="parseInt(totalEvents)" class="event-pagination">
  </EventPagination>
</template>

<style scoped>
.event-pagination {
  margin-bottom: 3rem;
}
</style>
