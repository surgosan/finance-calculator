<template>

  <h2>Welcome {{ user_first_name }}</h2>

  <h1 id="quote">{{ quote_tile }}</h1>

<!--  v-if savings exists-->
  <h2>You have $ in your saving account.</h2>

  <div class="net_worth section">
      <header class="row">
        <h2>Net Worth</h2>
        <div class="flex-spacer"></div>
        <h2>$500.00</h2>
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

    <div class="button_row">
      <h3 class="section_button">Add an account</h3>
    </div>
  </div>

  <div class="transactions section">
    <h2>Latest Transactions</h2>

    <transaction/>

    <div class="button_row">
      <h3 class="section_button">All Transactions</h3>
      <h3 class="section_button">New Transaction</h3>
    </div>
<!--    Similar to accounts. Object with name and price, then see all transactions button. Category? Use svg to have an icon for category before text-->
  </div>

  <div class="snapshot section">
    <h2>{{ month }} Snapshot</h2>

    <div class="pie_row">

      <div class="spending_locator">
        <h3>Where did my money go?</h3>

        <div class="row">
          <p class="merchant_selector" id="merchant_name">Select a merchant</p>
          <p class="merchant_selector" id="merchant_time_frame">Time Frame: {{ month }}</p>
        </div>
        <p id="merchant_category">Category: General</p>
        <p id="merchant_spending">Amount: $2500</p>
      </div>

      <div class="pie_wrapper">
        <Pie class="pie" :data="data" :options="options" />
      </div>

    </div>

  </div>

</template>

<script setup>
import {onMounted, ref} from "vue";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'vue-chartjs';
import {data, options} from '@/assets/snapshot_data';
import Account_balance from "@/components/account_balance.vue";
import Transaction from "@/components/transaction.vue";

ChartJS.register(ArcElement, Tooltip, Legend);

const user_first_name = ref("Sergio");
const quote_tile = ref("");

const currentDate = new Date();
const month = currentDate.toLocaleString('default', { month: 'long' });

const quotes = ["Take control over your finances.",
    "Earn your financial freedom.",
    "If not you ... then who?", "Another day, another dollar.",
    "Prove them wrong.",
    "Being kind can go a long way.",
    "An investment in knowledge pays the best interest.",
    "Pay it forward.",
    "The mind is everything. What you think, you become.",
    "In the midst of chaos, there is also opportunity.",
    "There are lessons everywhere. You just have to choose where to find them.",
    "The best way to predict the future is to create it. - Abraham Lincoln",
    "A journey of a thousand miles must begin with a single step. - Lao Tzu",
    "Control the outcome of your income.",
    "Never leave that till tomorrow which you can do today. - Benjamin Franklin",
    "There is no genius without some madness. - Aristotle"];


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
  }

  .bar {
    display: block;
    width: 100%;
    height: .5rem;
    border-radius: .5rem;
    background: var(--background-3);
  }

  #quote {
    width: 100%;
     text-align: center;
  }

  #assets_bar {
    width: 75%;
    background: var(--accent);
  }

  .pie_row {
    display: flex;
  }

  .spending_locator {
    width: 50%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .merchant_selector {
    cursor: pointer;
    padding: .5rem 1rem;
    background: var(--background-3);
    width: fit-content;
    //border: solid 1px var(--header);
    border-radius: .5rem;
    transition: .4s;
  }

  #merchant_spending {
    font-weight: bold;
  }

  .pie_wrapper {
    width: 50%;
    display: flex;
    justify-content: center;
    align-content: center;
    padding-bottom: 3rem;
  }

  .pie {
    width: 100%;
  }
</style>