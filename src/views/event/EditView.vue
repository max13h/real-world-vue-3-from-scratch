<template>
  <div>
    <div class="edit-btn" v-if="!isEditing">
      <h3>Click to edit this event</h3>
      <br>
      <button type="button" class="btn-secondary" data-btn="Edit event" @click="edit">Edit event</button>
    </div>
    <div class="edit-panel card-primary" v-if="isEditing">
      <h1>Edit your event: </h1>
      <EventForm :event="event"></EventForm>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useSetFlashMessage } from "@/utils/useSetFlashMessage";
import { ref } from "vue";
import EventForm from "../../components/EventForm.vue";
const router = useRouter()
const props = defineProps(['event'])
const isEditing = ref(true)

const edit = () => {
  if (props.event && props.event.isPersonalEvent) {
    isEditing.value = true
  } else {
    useSetFlashMessage('error', "You don't have the permission to modify the event")
    router.push({ name: 'event-details' })
  }
}
</script>

<style scoped>
@media (min-width: 900px) {
  .edit-panel {
    width: 48rem;
  }
}
</style>
