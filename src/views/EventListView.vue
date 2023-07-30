<script setup>
import EventCard from "../components/EventCard.vue";
import { ref, onMounted, watchEffect, computed } from "vue";
import { RouterLink } from 'vue-router'
import EventService from "../services/EventService";
import EventPagination from "../components/EventPagination.vue";

const events = ref(null)
const totalEvents = ref(0)

const props = defineProps({
  page: {
    require: true
  }
})

onMounted(() => {
  watchEffect(() => {
    EventService.getEvents(2, props.page)
      .then((response) => {
        events.value = response.data
        totalEvents.value = response.headers['x-total-count']
      })
      .catch((error) => {
        console.log(error)
      })
  })
})

const hasNextPage = computed(() => {
  const totalPage = totalEvents.value / 2
  return (totalPage - props.page) > 0
})

</script>

<template>
  <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>

  <div class="pagination">
    <div class="simple-nav">
      <RouterLink class="previous-link" :to="{ name: 'events', query: { page: page - 1 } }" rel="previous"
        v-if="page != 1">&#60; Previous</RouterLink>
    </div>
    <EventPagination :page="page" :totalEvents="parseInt(totalEvents)"></EventPagination>
    <div class="simple-nav">
      <RouterLink class="next-link" :to="{ name: 'events', query: { page: page + 1 } }" rel="next" v-if="hasNextPage">
        <span>Next &#62;</span>

      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.pagination {
  width: 100%;
  max-width: 500px;
  display: flex;
}

.pagination .simple-nav {
  flex: 1;
  display: flex;
}

.page-list {
  flex: 2;
  display: flex;
  justify-content: center;
}

.next-link {
  width: 100%;
  text-align: right;
}

.next-link span {
  display: inline-block;
}

.next-link span:hover {
  transform: scale(1.1);
}

.previous-link:hover,
.notActive:hover {
  transform: scale(1.1);
}
</style>
