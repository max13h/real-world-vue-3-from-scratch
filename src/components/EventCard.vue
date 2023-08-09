<template>
  <RouterLink class="card" :to="{ name: 'event-details', params: { id: event.id } }">
    <div>
      <h2>{{ event.title }}</h2>
      <p class="organizer">By {{ event.organizer }}</p>
      <p>@{{ event.date }}</p>
      <p>{{ event.location }}</p>
    </div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  event: {
    type: Object,
    required: true,
  },
})

</script>

<style scoped>
.card {
  width: 24rem;
  height: 16rem;
  border: 2px solid black;
  background-color: var(--light);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 2rem;
  cursor: pointer;
  text-align: center;
}

@media (max-width: 24rem) {
  .card {
    width: 18rem;
  }
}

@media (max-width: 18rem) {
  .card {
    width: 12rem;
  }
}

.card:hover {
  transform: scale(1.01);
  box-shadow: 5px 5px 1px 1px var(--primary);
}

h2 {
  padding: 1rem;
  font-size: 2rem;
}

.organizer {
  margin-bottom: 1rem;
}
</style>
