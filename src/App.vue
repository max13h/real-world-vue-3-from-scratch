<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = computed(() => useRoute().name)

</script>

<template>
  <div class="container">

    <header>
      <div>
        <nav>
          <RouterLink class="router-link" :class="route == 'events' ? '' : 'dynamic-underline'" :to="{ name: 'events' }">
            Events</RouterLink> /
          <RouterLink class="router-link" :class="route == 'about' ? '' : 'dynamic-underline'" :to="{ name: 'about' }">
            About</RouterLink>
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
</style>
