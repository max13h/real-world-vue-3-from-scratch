<template>
  <div>
    <h3>Click to register to this event</h3>
    <br>
    <button type="button" class="btn-secondary" data-btn="Register Me" @click="register">Register Me</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useSetFlashMessage } from "../../utils/useSetFlashMessage";

const router = useRouter()
const props = defineProps(['event'])

const register = () => {
  if (props.event && props.event.isPersonalEvent) {
    useSetFlashMessage('error', "You can't register to your own event")
    router.push({ name: 'event-details' })
  } else {
    useSetFlashMessage('success', 'Successfully registered for the event!')
    router.push({ name: 'event-details' })
  }
}
</script>

<style scoped>
</style>
