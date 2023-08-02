<template>
  <div>
    <h3>Click to edit this event</h3>
    <br>
    <button type="button" class="btn-secondary" data-btn="Edit event" @click="register">Edit event</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { inject } from "vue";
import { useSetFlashMessage } from "@/utils/useSetFlashMessage";

const router = useRouter()
const GStore = inject('GStore')

const register = () => {
  useSetFlashMessage(GStore, 'error', "You don't have the permission to modify the event")
  router.push({ name: 'event-details' })
}
</script>

<style scoped>
</style>
