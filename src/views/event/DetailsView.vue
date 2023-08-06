<template>
  <div v-if="event" class="card-primary">
    <h1>{{ event.title }}</h1>
    <p>The date: {{ event.date }}</p>
    <p>@ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
export default {
  props: ['event']
}
</script>

<style scoped>
h1 {
  font-size: 2rem;
}

p:nth-last-child(1) {
  margin-top: 2rem;
}
</style>
