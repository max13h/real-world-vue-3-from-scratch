<template>
  <i class="admin-toggle " :class="props.hasAuth ? 'ri-toggle-fill' : 'ri-toggle-line'" @click="adminToggle()"></i>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['hasAuth'])
const emit = defineEmits(['editHasAuth'])

const hasAuth = ref(props.hasAuth)

const adminToggle = () => {
  hasAuth.value = !hasAuth.value
  emit('editHasAuth', hasAuth.value)
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
