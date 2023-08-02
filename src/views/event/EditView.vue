<template>
  <div>
    <h3>Click to edit this event</h3>
    <br>
    <button type="button" class="btn-primary" data-btn="Edit event" @click="register">Edit event</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter()

const register = () => {
  router.push({ name: 'event-details' })
}
</script>

<style scoped>
</style>
