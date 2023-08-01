<template>
  <div class="event-menu">
    <RouterLink :to="{ name: 'event-details' }">Details
    </RouterLink> /
    <RouterLink :to="{ name: 'event-register' }">Register</RouterLink> /
    <RouterLink :to="{ name: 'event-edit' }">Edit</RouterLink>
  </div>

  <RouterView :event="event"></RouterView>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router';
import EventService from "../services/EventService";

const props = defineProps({
  id: {
    require: true,
  }
})

const event = ref(null)

onMounted(() => {
  EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<style scoped>
.router-link-exact-active {
  color: var(--primary);
  font-weight: bold;
}

.event-menu {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.isNotActive {
  background-color: red;
}
</style>
