<script setup>
import EventCard from "../components/EventCard.vue";
import { ref, onMounted, watchEffect, computed } from "vue";
import EventService from "../services/EventService";
import EventPagination from "../components/EventPagination.vue";
import { useRouter } from 'vue-router';

const router = useRouter()
const events = ref(null)
const totalEvents = ref(0)

const props = defineProps({
  page: {
    require: true
  }
})

onMounted(() => {
  watchEffect(() => {
    EventService.getEvents(2, props.page)
      .then((response) => {
        events.value = response.data
        totalEvents.value = response.headers['x-total-count']
      })
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          console.log(error)
          router.push({ name: '404-resource', params: { resource: 'event' } })
        } else {
          router.push({ name: 'network-error' })
        }
      })
  })
})

const hasNextPage = computed(() => {
  const totalPage = totalEvents.value / 2
  return (totalPage - props.page) > 0
})

</script>

<template>
  <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>

  <EventPagination :hasNextPage="hasNextPage" :page="page" :totalEvents="parseInt(totalEvents)"></EventPagination>
</template>
