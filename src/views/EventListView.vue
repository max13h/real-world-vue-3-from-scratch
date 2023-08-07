<script>
import EventCard from "../components/EventCard.vue";
import EventService from "../services/EventService";
import EventPagination from "../components/EventPagination.vue";
import { useEventsStore } from "../store/events";
import { mapState } from "pinia";

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
      })
  },
  beforeRouteUpdate(to) {
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
    },
  },
  computed: {
    hasNextPage() {
      const totalPage = this.totalEvents / 4
      return (totalPage - this.page) > 0
    },
    ...mapState(useEventsStore, ['personalEvents'])
  },
  components: {
    EventCard,
    EventPagination
  }
}
</script>

<template>
  <div class="personal-events" v-if="personalEvents && ($route.query.page == 1 || !$route.query.page)">
    <EventCard class="personal-event" v-for="personalEvent in personalEvents" :key="personalEvent.id"
      :event="personalEvent">
    </EventCard>
  </div>
  <EventCard v-for="  event   in   events  " :key="event.id" :event="event"></EventCard>

  <EventPagination :hasNextPage="hasNextPage" :page="page" :totalEvents="parseInt(totalEvents)" class="event-pagination">
  </EventPagination>
</template>

<style scoped>
.event-pagination {
  margin-bottom: 3rem;
}

.personal-event {
  background-color: var(--light-primary);
}
</style>
