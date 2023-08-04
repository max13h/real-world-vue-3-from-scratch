<template>
  <i class="admin-toggle " :class="adminStore.hasAuth ? 'ri-toggle-fill' : 'ri-toggle-line'" @click="adminToggle()"></i>
</template>

<script setup>
import { useAdminStore } from "../store/admin";

const adminStore = useAdminStore()
const adminToggle = () => {
  adminStore.hasAuth = !adminStore.hasAuth
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
