<template>
  <div class="card-primary">
    <h1>Create your event:</h1>
    <p class="beta-warning">Form in BETA (no validation / no best practice)</p>
    <form @submit.prevent="onSubmit">
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
      <button type="submit" value="Create your event" class="btn-secondary" data-btn="Create your event"></button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useEventsStore } from "../store/events";
import { useRouter } from 'vue-router';

const eventsStore = useEventsStore()
const router = useRouter()

const title = ref(null)
const description = ref(null)
const location = ref(null)
const date = ref(null)
const organizer = ref(null)

const onSubmit = () => {
  eventsStore.personalEventsID++

  const newEvent = {
    id: eventsStore.personalEventsID,
    title: title.value,
    description: description.value,
    location: location.value,
    date: date.value,
    organizer: organizer.value,
  }

  eventsStore.personalEvents.push(newEvent)
  router.push({ name: 'events' })

}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
}

.beta-warning {
  font-weight: bold;
  background-color: yellow;
  display: inline;
}

label {
  font-weight: bold;
}

input {
  padding: 0.3rem 1rem;
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 0.3rem;
}

label {
  margin-top: 0.7rem;
}

button {
  margin-top: 1.5rem;
  padding: 1rem;
  align-self: flex-end;
}
</style>
