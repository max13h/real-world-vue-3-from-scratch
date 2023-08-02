<template>
  <div>
    <h3>Click to register to this event</h3>
    <br>
    <button type="button" class="btn-secondary" data-btn="Register Me" @click="register">Register Me</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { inject } from "vue";
import { useSetFlashMessage } from "../../utils/useSetFlashMessage";

const router = useRouter()
const GStore = inject('GStore')

const register = () => {
  useSetFlashMessage(GStore, 'success', 'Successfully registered for the event!')
  router.push({ name: 'event-details' })
}
</script>

<style scoped>
</style>
