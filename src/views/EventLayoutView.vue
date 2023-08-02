<template>
  <div class="event-menu">
    <RouterLink :to="{ name: 'event-details' }" :class="$route.name != 'event-details' ? 'isNotActive' : ''">Details
    </RouterLink>
    <span>/</span>
    <RouterLink :to="{ name: 'event-register' }" :class="$route.name != 'event-register' ? 'isNotActive' : ''">Register
    </RouterLink>
    <span>/</span>
    <RouterLink :to="{ name: 'event-edit' }" :class="$route.name != 'event-edit' ? 'isNotActive' : ''">Edit</RouterLink>
  </div>

  <RouterView :event="event" class="router-view"></RouterView>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router';
import EventService from "../services/EventService";

const props = defineProps({
  id: {
    require: true,
  }
})

const event = ref(null)
const router = useRouter()

onMounted(() => {
  EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.log(error)
      router.push({ name: '404Resource', params: { resource: 'event' } })
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
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  width: 100%;
}

.event-menu * {
  flex-grow: 1;
  text-align: center;
}


.isNotActive:hover {
  display: inline-block;
  transform: scale(1.1);
}

.router-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
