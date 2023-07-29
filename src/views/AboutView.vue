<template>
  <div>
    <p>I showcase my Vue.js skills through this first Proof of Concept.</p>
    <a href="https://github.com/max13h" class="dynamic-underline">Link to my github</a>
  </div>
</template>

<style scoped>
div {
  text-align: center;
  margin-top: 4rem;
}

p,
a {
  font-size: 2rem;
  font-weight: bolder;
}

p {
  margin-bottom: 2rem;
}

a {
  font-style: italic;
  color: var(--primary);
}

a:hover {
  filter: saturate(2);
}
</style>
