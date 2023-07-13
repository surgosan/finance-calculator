<template>

  <h2>Welcome Name</h2>

  <h1>{{ quote_tile }}</h1>

<!--  v-if savings exists-->
  <h2>You have $ in your saving account.</h2>

  <div class="net_worth section">
      <header class="row">
        <p>Net Worth</p>
        <div class="flex-spacer"></div>
        <p>$750.00</p>
      </header>
  </div>

  <div class="assets_to_liability section">
      <main>
        <div class="row">
          <p>$750.00</p>
          <div class="flex-spacer"></div>
          <p>$250.00</p>
        </div>

          <span class="bar_container bar">
            <span id="assets_bar" class="bar"></span>
          </span>

          <div class="row">
            <p>Assets</p>
            <div class="flex-spacer"></div>
            <p>Liabilities</p>
          </div>
      </main>
  </div>

  <div class="accounts section">
    <h2>Accounts</h2>

    <account_balance/>

    <h3 class="section_button">Add an account</h3>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import Account_balance from "@/components/account_balance.vue";

const quotes = ["Take control over your finances.",
    "Earn your financial freedom.",
    "If not you ... then who?", "Another day, another dollar.",
    "Prove them wrong.",
    "Being kind can go a long way.",
    "An investment in knowledge pays the best interest.",
    "Pay it forward."];

  const quote_tile = ref("");

  const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quote_tile.value = quotes[randomIndex];
  }

  onMounted(randomQuote);
</script>

<style scoped>
  .section {
    width: 75%;
    padding: 0 2rem;
    margin-top: 1rem;
    background: var(--background-2);
    border-radius: .5rem;
  }

  .section_button {
    cursor: pointer;
    width: fit-content;
    background: var(--background-3);
    padding: .25rem 1rem;
    border-radius: .75rem;
    text-align: right;
    margin-left: 50%;
    transform: translate(-50%);
  }

  .bar {
    display: block;
    width: 100%;
    height: .5rem;
    border-radius: .5rem;
    background: var(--background-3);
  }

  #assets_bar {
    width: 75%;
    background: var(--accent);
  }
</style>