<template>
  <nav>

    <div class="nav-container">
      <h1>Multi-Function Finance Application</h1>
      <span class="flex-spacer"></span>
      <router-link class="profile" to="/"></router-link>
    </div>

    <div class="nav-container">
      <router-link class="nav-link" to="/">Home</router-link> |
      <router-link class="nav-link" to="/">Calculator</router-link> |
      <router-link class="nav-link" to="/">Investments</router-link> |
      <router-link class="nav-link" to="/">Planning</router-link>

      <span class="flex-spacer"></span>
    </div>

  </nav>

  <main>
    <router-view/>
  </main>
</template>

<style scoped>
  .nav-container {
    display: flex;
    justify-content: space-evenly;
    align-content: center;
  }

  .nav-link {
    transition: .4s;
  }

  .nav-link:hover {
    color: var(--accent);
  }

  .profile {
    width: 3rem;
    height: 3rem;
    background: var(--accent);
    border: solid 2px var(--header);
    border-radius: 2rem;
    margin-right: 1rem;
    margin-top: 1rem;
  }

  main {
    width: 50dvw;
    margin-top: 3rem;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<script setup>
</script>