<template>
  <div class="admin-pannel">
    <RouterLink class="router-link btn-primary" data-btn="Create an event" :to="{ name: 'create' }">Create an event
    </RouterLink>
    <button type="button" class="btn btn-primary" data-btn="Quick create event" @click="createPersonalEvent">Quick create
      event</button>
  </div>
</template>

<script setup>
import { RouterLink, useRoute, useRouter } from "vue-router";
import { useCreateFakePersonalEvent } from "../utils/useCreateFakePersonalEvent";
const route = useRoute()
const router = useRouter()

const createPersonalEvent = () => {
  useCreateFakePersonalEvent()
  if (route.query.page && route.query.page != '1') {
    router.push({ name: 'events' })
  }
}
</script>

<style scoped>
.admin-pannel {
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
}

.router-link {
  display: inline;
}

.btn {
  display: inline;
  font-size: 1rem;
}

@media (max-width: 510px) {
  .admin-pannel {
    flex-direction: column;
    width: auto;
  }

  .admin-pannel * {
    margin-bottom: 1rem;
  }
}
</style>
