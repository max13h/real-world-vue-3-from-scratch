<template>
  <div>
    <h1>Uh-Oh!</h1>

    <h3>
      It looks like you're experiencing some network issues
    </h3>
    <button type="button" @click="$router.go(-1)" data-btn="Try again" class="btn-secondary">Try again</button>
  </div>
</template>

<script setup>

</script>

<style scoped>
div {
  text-align: center;
}

h1 {
  margin-top: 3rem;
  margin-bottom: 1rem;
}

h3 {
  margin-bottom: 1rem;
}
</style>
