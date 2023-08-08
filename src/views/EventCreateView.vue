<template>
  <div class="card-primary">
    <h1>Create your event:</h1>
    <p class="beta-warning">Form in BETA (no validation / no best practice)</p>
    <EventForm></EventForm>
  </div>
</template>

<script setup>
import EventForm from "../components/EventForm.vue";
</script>

<style scoped>
.beta-warning {
  font-weight: bold;
  background-color: yellow;
  display: inline;
}
</style>
