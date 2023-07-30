<template>
  <div class="page-list">
    <RouterLink class="page-list" :class="page == pageNb ? 'isActive' : 'notActive'"
      v-for="(pageNb, index) in arrayOfPages" :key="index" :to="{ name: 'events', query: { page: pageNb } }"
      :rel="'page number' + pageNb">{{ pageNb }}
    </RouterLink>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";

const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
  totalEvents: {
    type: Number,
    required: true,
  },
})

let arrayOfPages = ref([1, 2, 3, 4, 5])

// Le watcheffect doit retourner un tableau avec le chiffre de la page actuelle au milieu

watchEffect(() => {
  return props.page
})
</script>

<style scoped>
.page-list {
  flex: 2;
  display: flex;
  justify-content: center;
}

.isActive {
  color: var(--primary);
  font-weight: bold;
  position: relative;
  width: 10px;
}

.isActive:before {
  content: '';
  position: absolute;
  z-index: -1;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid black;
  box-shadow: 2px 2px 1px 1px var(--primary);
  top: -5px;
}
</style>
