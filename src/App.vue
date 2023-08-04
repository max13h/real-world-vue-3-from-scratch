<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { computed, inject } from 'vue'

const route = computed(() => useRoute().name)
const GStore = inject('GStore')

</script>

<template>
  <div class="container">

    <header>
      <div class="flashMessage" :class="GStore.statusMessage" v-if="GStore.flashMessage">
        <p>{{ GStore.flashMessage }}</p>
      </div>
      <div>
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

.flashMessage {
  position: absolute;
  background-color: (var(--primary));
  top: 5%;
  right: 2%;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 1px rgb(232, 232, 232);
  animation-name: flashMessage;
  animation-duration: 5s;
}

.flashMessage.success {
  background-color: rgb(124, 255, 112);
}

.flashMessage.error {
  background-color: rgb(255, 112, 112);
}

@keyframes flashMessage {
  from {
    opacity: 1;
  }

  75% {
    opacity: 0.85
  }

  to {
    opacity: 0;

  }
}
</style>
