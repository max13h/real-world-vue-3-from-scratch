<template>
  <div v-if="event" class="card-primary" :class="{ 'isPersonalEvent': event.isPersonalEvent }">
    <h1>{{ event.data.title }}</h1>
    <p>The date: {{ event.data.date }}</p>
    <p>@ {{ event.data.location }}</p>
    <p>{{ event.data.description }}</p>
  </div>
</template>

<script>
export default {
  props: ['event'],
}
</script>

<style scoped>
h1 {
  font-size: 2rem;
}

p:nth-last-child(1) {
  margin-top: 2rem;
}

.isPersonalEvent {
  background-color: var(--light-primary);
}
</style>
