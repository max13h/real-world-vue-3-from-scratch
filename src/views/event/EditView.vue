<template>
  <div>
    <h3>Click to edit this event</h3>
    <br>
    <button type="button" class="btn-secondary" data-btn="Edit event" @click="edit">Edit event</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useSetFlashMessage } from "@/utils/useSetFlashMessage";

const router = useRouter()
const props = defineProps(['event'])

const edit = () => {
  if (props.event && props.event.isPersonalEvent) {
    router.push({ name: 'event-edit' })
  } else {
    useSetFlashMessage('error', "You don't have the permission to modify the event")
    router.push({ name: 'event-details' })
  }
}
</script>

<style scoped>
</style>
