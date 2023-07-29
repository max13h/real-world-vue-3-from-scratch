<template>
  <div class="card" @click="$emit('displayEvent', event.id)">
    <h2>{{ event.title }}</h2>
    <p>@{{ event.date }}</p>
    <p>{{ event.location }}</p>
  </div>
</template>

<script setup>
defineProps({
  event: {
    type: Object,
    required: true,
  },
})

</script>

<style scoped>
.card {
  width: 24rem;
  height: 16rem;
  border: 2px solid black;
  background-color: rgba(242, 242, 242, 0.555);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 2rem;
  cursor: pointer;
  text-align: center;
}

.card:hover {
  transform: scale(1.01);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
}

h2 {
  padding: 1rem;
  font-size: 2rem;
}
</style>
