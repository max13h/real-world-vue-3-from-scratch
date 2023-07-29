<script setup>
import EventCard from "../components/EventCard.vue";
import { ref, onMounted } from "vue";
import EventService from "../services/EventService";

const events = ref(null)

onMounted(() => {
  EventService.getEvents()
    .then((response) => {
      events.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
</template>
