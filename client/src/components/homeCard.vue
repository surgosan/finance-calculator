<script setup>
  const props = defineProps({
    title: {
      type: String,
      required: false
    }
  })
</script>

<template>
  <main>
    <p>{{ title }}</p>
  </main>
</template>

<style scoped>
  main {
    border: solid 2px var(--header);
    padding: 1rem;
  }
</style>