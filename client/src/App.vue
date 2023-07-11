<template>
  <nav>

    <h1>Multi-Function Finance Application</h1>

    <div class="nav-container">
      <router-link class="nav-link" to="/">Home</router-link> |
      <router-link class="nav-link" to="/">Calculator</router-link> |
      <router-link class="nav-link" to="/">Investments</router-link> |
      <router-link class="nav-link" to="/">Planning</router-link>

      <span class="flex-spacer"></span>

      <router-link class="nav-link" to="/">Profile</router-link>
    </div>

  </nav>
  <router-view/>
</template>

<style scoped>
  .nav-container {
    display: flex;
    justify-content: space-evenly;
  }
</style>

<script setup>
</script>