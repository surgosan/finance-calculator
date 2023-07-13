<template>

  <div class="cards">
    <div class="row">

      <div class="easyInput cards_item">
        <label for="ezInput">Input changes here</label>
        <input id="ezInput" type="number">
        <button type="submit">Enter</button>
      </div>

      <div class="net_worth_card cards_item">
        <h3>Your current net worth is</h3>
        <h2 class="card_price">#0</h2>
      </div>
    </div>

    <div class="row">
      <h1 id="quote"> {{ quote_tile }} </h1>
    </div>

    <div class="row">
      <div class="todays_spending cards_item">
        <h3>So far today, you have spent</h3>
        <h1 class="card_price">$0</h1>
      </div>

      <div class="week_comparison cards_item">
        <h3>Compared to yesterday, you have spent</h3>
        <h2 class="card_price">$0</h2>
        <h3>more than last week.</h3>
      </div>

      <div class="montly_spending cards_item">
        <h3>This month you have spent</h3>
        <h2 class="card_price">$0</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const quotes = ["Take control over your finances.", "Earn your financial freedom.", "If not you ... then who?", "Another day, another dollar."];

  const quote_tile = ref("");

  const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quote_tile.value = quotes[randomIndex];
  }

  onMounted(randomQuote);
</script>

<style scoped>

.row {
  flex-grow: 1;
  line-height: .8;
  gap: 1rem;
}

.cards {
  display: flex;
  flex-direction: column;
  margin: 3rem;
  align-items: center;
}

.cards_item {
  margin: 3rem;
  background: var(--background-2);
  padding: 1rem 1.5rem;
  border: solid 2px var(--header);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card_price {
  color: var(--accent);
  font-size: 2.5rem;
}

#quote {
  letter-spacing: 1px;
}

label[for='ezInput'] {
  font-size: 1rem;
  font-weight: bold;
}

</style>