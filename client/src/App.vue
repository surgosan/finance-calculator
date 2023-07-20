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

  <div class="basic_calculator_wrapper">
    <button id="calculator_button">Basic Calculator</button>
    <h2 id="calculator_answer">1578.83</h2>

    <div class="calculator_buttons">
      <button>C</button>
      <button>±</button>
      <button>%</button>
      <button>/</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>x</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button id="zero">0</button>
      <button>.</button>
      <button>=</button>
    </div>
  </div>
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
    transition: .2s;
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
    width: 60dvw;
    margin-top: 3rem;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .basic_calculator_wrapper {
    position: fixed;
    left: 1rem;
    bottom: -22rem;
    width: 18rem;
    aspect-ratio: 3/4;
    background: var(--background-2);
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
    border-radius: 1rem 1rem 0 0;
    transition: .7s;
  }

  #calculator_button {
    font-size: 1rem;
    letter-spacing: 1px;
    font-weight: bold;
    width: 100%;
    margin: 0;
    background: var(--theme);
    border: none;
    border-radius: 1rem 1rem 0  0;
    height: 2rem;
  }

  #calculator_answer {
    text-align: right;
    padding: 0 .5rem;
  }

  .calculator_buttons {
    flex-grow: 1;
    padding-bottom: .1rem;
    display: grid;
    gap: .25rem;
    grid-template-columns: auto auto auto auto;
  }

  .calculator_buttons > button {
    font-size: 1rem;
  }

  #zero {
    grid-column: span 2;
  }
</style>

<script setup>
</script>