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

  <footer>

    <h2>Inspired by Marcus by Goldman Sachs.</h2>
    <h2>Most quotes are from the Marcus app.</h2>
    <h2>All svg are from https://icons8.com/.</h2>
    <h2> Not in any way affiliated with Marcus or any other business.</h2>
    <h2>Created by Sergio Sanchez-Alvares. 2023</h2>
  </footer>
</template>

<style scoped>
  footer {
    margin-top: 5rem;
    border-top: solid 2px var(--header);
  }

  footer h2 {
    text-align: right;
  }

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