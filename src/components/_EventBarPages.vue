<template>
  <div class="page-list">
    <RouterLink class="page-list" :class="page == pageNb ? 'isActive' : 'notActive'"
      v-for="(pageNb, index) in arrayOfPages" :key="index"
      :to="{ name: 'events', query: { page: toWhichPage(pageNb, index) } }" :rel="'page number' + pageNb">{{ pageNb }}
    </RouterLink>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";

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

const nbOfEventPerPage = 4

const totalOfPage = computed(() => Math.ceil(props.totalEvents / nbOfEventPerPage))
let arrayOfPages = ref([])

const toWhichPage = (pageNb, index) => {
  if (typeof pageNb == 'string' && index == 0) {
    return 1
  } else if (typeof pageNb == 'string' && index > 0) {
    return totalOfPage.value
  }
  else {
    return pageNb
  }
}

const paginationLittle = () => {
  let page = 1
  const array = []
  while (page < totalOfPage.value + 1) {
    array.push(page)
    page++
  }
  return array
}

const _paginationPageAtTheEnd = () => {
  const array = []
  let startPageIteration = totalOfPage.value - 5
  array.push('..')
  while (startPageIteration < totalOfPage.value + 1) {
    array.push(startPageIteration)
    startPageIteration++
  }
  return array
}

const paginationPageOnTheMiddle = () => {
  const page = props.page
  let startPageIteration = page - 2
  const array = []

  array.push("..")
  while (startPageIteration < page + 3) {
    array.push(startPageIteration)
    startPageIteration++
  }
  array.push("..")

  return array
}

const paginationBig = () => {
  if (props.page <= 3) {
    return [1, 2, 3, 4, 5, 6, '..']
  }

  if ((totalOfPage.value - 3) <= props.page && props.page <= totalOfPage.value) {
    return _paginationPageAtTheEnd()
  }

  return paginationPageOnTheMiddle()
}


watchEffect(() => {
  if (totalOfPage.value == 1) {
    return arrayOfPages.value = [1]
  }
  if (totalOfPage.value < 7) {
    return arrayOfPages.value = paginationLittle()
  }
  if (totalOfPage.value >= 7) {
    return arrayOfPages.value = paginationBig()
  }
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

.notActive:hover {
  transform: scale(1.1);
}
</style>
