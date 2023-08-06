<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { useAdminStore } from "./store/admin";
import { useFlashMessageStore } from "./store/flashMessage";

import AdminToggle from "./components/AdminToggle.vue";
import AdminPannel from "./components/AdminPannel.vue";

import './assets/components/flash-message.css'

const adminStore = useAdminStore()
const flashMessageStore = useFlashMessageStore()
const route = useRoute().name

const editHasAuth = (response) => {
  adminStore.hasAuth = response
}
</script>

<template>
  <div class="container">

    <header>
      <div class="flashMessage" :class="flashMessageStore.statusMessage" v-if="flashMessageStore.flashMessage">
        <p>{{ flashMessageStore.flashMessage }}</p>
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
        <AdminToggle title="Get admin access" :has-auth="adminStore.hasAuth" @edit-has-auth="editHasAuth"
          v-if="$route.name == 'events'" />
        <div v-if="adminStore.hasAuth && $route.name == 'events'" class="admin-pannel">
          <AdminPannel></AdminPannel>
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
  align-items: center;
}
</style>
