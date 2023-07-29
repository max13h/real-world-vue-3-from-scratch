<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">

    <header>
      <div>
        <nav>
          <RouterLink class="router-link" to="/">Home</RouterLink> /
          <RouterLink class="router-link" to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
.container {
  margin: 2rem 200px 0 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.router-link {
  font-size: x-large;
}

header {
  margin-bottom: 2rem;
}
</style>
