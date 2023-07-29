<script setup>
import EventCard from "../components/EventCard.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

const events = ref(null)

onMounted(() => {
  axios
    .get("https://my-json-server.typicode.com/max13h/real-world-vue-3-from-scratch/events")
    .then((response) => {
      events.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})

function displayEvent(id) {
  console.log(id);
}
</script>

<template>
  <EventCard v-for="event in events" :key="event.id" :event="event" @display-event="displayEvent"></EventCard>
</template>
