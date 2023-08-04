<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { computed, inject } from 'vue'
import { useAdminStore } from "./store/admin";

import AdminToggle from "./components/AdminToggle.vue";

import './assets/components/flash-message.css'

const route = computed(() => useRoute().name)
const GStore = inject('GStore')
const adminStore = useAdminStore()
</script>

<template>
  <div class="container">

    <header>
      <div class="flashMessage" :class="GStore.statusMessage" v-if="GStore.flashMessage">
        <p>{{ GStore.flashMessage }}</p>
      </div>
      <div class="full-menu">
        <nav>
          <div>
            <RouterLink class="router-link" :class="route == 'events' ? '' : 'dynamic-underline'"
              :to="{ name: 'events' }">
              Events</RouterLink>
          </div>
          <span>/</span>
          <div>
            <RouterLink class="router-link" :class="route == 'about' ? '' : 'dynamic-underline'" :to="{ name: 'about' }">
              About</RouterLink>
          </div>
        </nav>
        <AdminToggle />
        <div v-if="adminStore.hasAuth" class="admin-pannel">
          SALUT LES LOUOLOUS
        </div>
      </div>
    </header>

    <RouterView />

  </div>
</template>

<style scoped>
.container {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

header {
  margin-bottom: 2rem;
}

.router-link-active {
  color: var(--primary);
  font-weight: bold;
}

.router-link {
  font-size: 1.5rem;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
}

nav * {
  flex-grow: 1;
  text-align: center;
}

.full-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
