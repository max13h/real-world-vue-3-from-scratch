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

  <RouterView :event="eventsStore.event" class="router-view"></RouterView>
</template>

<script setup>
import { useEventsStore } from "../store/events";
import { defineProps } from "vue";

const eventsStore = useEventsStore()
defineProps(['id', 'isPersonalEvent'])
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
