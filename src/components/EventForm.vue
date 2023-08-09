<template>
  <div>
    <form @submit.prevent="props.isCreating ? onSubmitCreate() : onSubmitUpdate()">
      <label for="title">Title:</label>
      <input v-model="title" type="text" name="title">
      <label for="description">Description:</label>
      <input v-model="description" type="text" name="description" />
      <label for="location">City:</label>
      <input v-model="location" type="text" name="location">
      <label for="date">Date:</label>
      <input v-model="date" type="datetime-local" name="date">
      <label for="organizer">Organizer's name</label>
      <input v-model="organizer" type="text" name="organizer">
      <div class="button-area" :style="props.event ? 'justify-content: space-between' : 'justify-content: flex-end'">
        <button v-if="props.event" @click="deleteEvent()" type="button" value="Delete your event"
          class="btn-secondary btn-delete" data-btn="Delete your event"></button>
        <button type="submit" value="Create your event" class="btn-secondary btn-submit"
          data-btn="Create your event"></button>
      </div>

    </form>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useEventsStore } from "../store/events";
import { useRouter } from 'vue-router';

const props = defineProps(['event', 'isCreating'])
const eventsStore = useEventsStore()
const router = useRouter()

const title = ref(null)
const description = ref(null)
const location = ref(null)
const date = ref(null)
const organizer = ref(null)

const onSubmitCreate = async () => {
  const { default: dayjs } = await import('dayjs/dayjs.min')
  const formatedDate = dayjs(date.value).format("YYYY-MM-DD HH:mm")
  eventsStore.personalEventsID++

  const newEvent = {
    id: eventsStore.personalEventsID,
    title: title.value,
    description: description.value,
    location: location.value,
    date: formatedDate,
    organizer: organizer.value,
  }

  eventsStore.personalEvents.unshift(newEvent)
  router.push({ name: 'event-details', params: { id: newEvent.id } })

}

const onSubmitUpdate = async () => {
  const { default: dayjs } = await import('dayjs/dayjs.min')
  const { useEventsStore } = await import('../store/events')

  const eventsStore = useEventsStore()
  const eventToEdit = eventsStore.personalEvents.find(x => x.id == props.event.data.id)

  const formatedDate = dayjs(date.value).format("YYYY-MM-DD HH:mm")
  eventsStore.personalEventsID++

  eventToEdit.id = eventsStore.personalEventsID
  eventToEdit.title = title.value
  eventToEdit.description = description.value
  eventToEdit.location = location.value
  eventToEdit.date = formatedDate
  eventToEdit.organizer = organizer.value

  router.push({ name: 'event-details' })
}

const deleteEvent = async () => {
  const { useEventsStore } = await import('../store/events')
  const eventsStore = useEventsStore()

  const eventToDelete = eventsStore.personalEvents.find(x => x.id == props.event.data.id)
  const i = eventsStore.personalEvents.indexOf(eventToDelete)

  eventsStore.personalEvents.splice(i, 1)

  router.push({ name: 'events' })
}

onMounted(() => {
  if (props.event) {
    title.value = props.event.data.title
    description.value = props.event.data.description
    location.value = props.event.data.location
    date.value = props.event.data.date
    organizer.value = props.event.data.organizer
  }
})
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;

}

label {
  margin-top: 0.7rem;
  font-weight: bold;
}

input {
  padding: 0.3rem 1rem;
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 0.3rem;
}

.button-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  margin-top: 1.5rem;
  padding: 1rem;
  align-self: flex-end;
}

.btn-delete::before {
  color: red;
}
</style>
