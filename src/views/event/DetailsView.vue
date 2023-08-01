<template>
  <div v-if="event">
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
div {
  max-width: 48rem;
  max-height: 16rem;
  width: 100%;
  height: 100%;
  padding: 2rem;
  position: relative;
  background-color: var(--secondary);
  border: 3px black solid;
  border-radius: 10px;
  box-shadow: 5px 5px 1px 1px var(--primary);
}

@media (max-width: 60rem) {
  div {
    width: 36rem;
  }
}

@media (max-width: 45rem) {
  div {
    width: 24rem;
  }
}

@media (max-width: 30rem) {
  div {
    width: 16rem;
  }
}

@media (max-width: 20rem) {
  div {
    width: 66%;
  }
}

h1 {
  font-size: 2rem;
}

p:nth-last-child(1) {
  margin-top: 2rem;
}
</style>
