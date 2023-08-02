<template>
  <div>
    <h1>Oops 404</h1>
    <h2>{{ capitalize(resource) }} not found</h2>
  </div>
  <p>But if you don't change your direction, and if you keep looking, you may end up where you are heading.</p>
  <RouterLink :to="{ name: 'events' }" data-btn="Take me home" class="btn-secondary">>
    <button type="button"></button>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from "vue-router";
defineProps({
  resource: {
    type: String,
    required: true,
    default: 'page'
  }
})

const capitalize = (word) => {
  return word[0].toUpperCase() + word.substring(1)
}
</script>

<style scoped>
div {
  text-align: center;
}

h1 {
  margin-top: 3rem;
}

h2 {
  margin-bottom: 3rem;
}

p {
  max-width: 200px;
  text-align: center;
  margin-bottom: 1rem;
}

.btn-secondary {
  padding: 1rem;
  max-width: 150px;
}
</style>
