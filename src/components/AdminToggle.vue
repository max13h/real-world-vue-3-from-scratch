<template>
  <i class="admin-toggle " :class="isOn ? 'ri-toggle-fill' : 'ri-toggle-line'" @click="adminToggle()"></i>
</template>

<script setup>
import { ref } from "vue";

const isOn = ref(false)

const adminToggle = () => {
  isOn.value = !isOn.value
}
</script>

<style scoped>
.admin-toggle {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 3rem;
  cursor: pointer;
}

.ri-toggle-fill {
  color: var(--primary);
}

@media (max-width: 385px) {
  .admin-toggle {
    position: inherit;
    text-align: center;
  }
}
</style>
