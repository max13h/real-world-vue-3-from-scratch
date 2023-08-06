<template>
  <div class="admin-pannel">
    <RouterLink class="btn-primary" data-btn="Create an event" :to="{ name: 'create' }">Create an event</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.admin-pannel {
  margin-top: 1.5rem;
}
</style>
