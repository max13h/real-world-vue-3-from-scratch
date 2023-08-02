<template>
  <div>
    <h3>Click to register to this event</h3>
    <br>
    <button type="button" class="btn-primary" data-btn="Register Me" @click="register">Register Me</button>
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
