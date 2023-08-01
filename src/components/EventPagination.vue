<template>
  <div class="pagination">
    <div class="simple-nav">
      <RouterLink class="previous-link" :to="{ name: 'events', query: { page: page - 1 } }" rel="previous"
        v-if="page != 1">&#60; Previous</RouterLink>
    </div>

    <EventBarPages :page="page" :totalEvents="totalEvents"></EventBarPages>

    <div class="simple-nav">
      <RouterLink class="next-link" :to="{ name: 'events', query: { page: page + 1 } }" rel="next" v-if="hasNextPage">
        <span>Next &#62;</span>

      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import EventBarPages from "../components/_EventBarPages.vue";

defineProps({
  page: {
    type: Number,
    required: true,
  },
  totalEvents: {
    type: Number,
    required: true,
  },
  hasNextPage: {
    type: Boolean,
    required: true
  }
})
</script>

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

.previous-link:hover {
  transform: scale(1.1);
}
</style>
