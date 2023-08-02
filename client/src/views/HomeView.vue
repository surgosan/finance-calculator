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
      <button class="section_button" @click="toggleAccount">Add an account</button>
    </div>
  </div>

  <teleport to="body" v-if="account_dialog || transaction_dialog">
    <div id="dialog_shroud" @click="shroudToggle"></div>
  </teleport>

  <teleport to="body" v-if="account_dialog">

    <div class="dialog" id="account_dialog">
      <div class="dialog_title">
        <h1>Add an Account</h1>
        <button class="dialog_button" @click="toggleAccount">Close</button>
      </div>

      <div class="row">

        <div class="dialog_column right_column">

          <p id="account_type">Type of Account</p>

          <div  class="radio_row"  id="middle_column">
            <input type="radio" id="account_auto" class="account_type_radio account_liability" name="account_type">
            <label class="dialog_label  radio_label" for="account_auto">Auto Loan</label>
          </div>

          <div  class="radio_row">
            <input type="radio" id="account_cash" class="account_type_radio" name="account_type">
            <label class="dialog_label  radio_label" for="account_cash">Cash Balance</label>
          </div>

          <div  class="radio_row">
            <input type="radio" id="account_checking" class="account_type_radio account_digits" name="account_type">
            <label class="dialog_label  radio_label" for="account_checking">Checking Account</label>
          </div>

          <div  class="radio_row">
            <input type="radio" id="account_credit" class="account_type_radio account_liability account_digits" name="account_type">
            <label class="dialog_label  radio_label" for="account_credit">Credit Card</label>
          </div>

          <div  class="radio_row">
            <input type="radio" id="account_investment" class="account_type_radio account_digits" name="account_type">
            <label class="dialog_label  radio_label" for="account_investment">Investment Account</label>
          </div>

          <div  class="radio_row">
            <input type="radio" id="account_medical" class="account_type_radio account_liability" name="account_type">
            <label class="dialog_label  radio_label" for="account_medical">Medical Bill</label>
          </div>

          <div  class="radio_row">
            <input type="radio" id="account_mortgage" class="account_type_radio account_liability" name="account_type">
            <label class="dialog_label  radio_label" for="account_mortgage">Mortgage</label>
          </div>

          <div  class="radio_row">
            <input type="radio" id="account_payable" class="account_type_radio" name="account_type">
            <label class="dialog_label  radio_label" for="account_payable">Payable</label>
          </div>

          <div  class="radio_row">
            <input type="radio" id="account_personal" class="account_type_radio account_liability" name="account_type">
            <label class="dialog_label  radio_label" for="account_personal">Personal Loans</label>
          </div>
        </div>

        <div class="dialog_column right_most_column">
          <div  class="radio_row">
            <input type="radio" id="account_real_estate" class="account_type_radio" name="account_type">
            <label class="dialog_label  radio_label" for="account_real_estate">Real Estate</label>
          </div>

          <div  class="radio_row">
            <input type="radio" id="account_retirement" class="account_type_radio account_digits" name="account_type">
            <label class="dialog_label  radio_label" for="account_retirement">Retirement Account</label>
          </div>

          <div  class="radio_row">
            <input type="radio" id="account_savings" class="account_type_radio account_digits" name="account_type">
            <label class="dialog_label  radio_label" for="account_savings">Savings Account</label>
          </div>

          <div  class="radio_row">
            <input type="radio" id="account_student" class="account_type_radio account_liability" name="account_type">
            <label class="dialog_label  radio_label" for="account_student">Student Loan</label>
          </div>

          <div  class="radio_row">
            <input type="radio" id="account_taxes" class="account_type_radio account_liability" name="account_type">
            <label class="dialog_label  radio_label" for="account_taxes">Taxes Owed</label>
          </div>

          <div  class="radio_row">
            <input type="radio" id="account_other" class="account_type_radio account_other" name="account_type">
            <label class="dialog_label  radio_other" for="account_other">Other</label>
          </div>
        </div>

<!--        Split-->

        <div class="dialog_column left_column">
          <label class="dialog_label" for="account_name">Account Name</label>
          <input type="text" id="account_name" placeholder="Amex Gold Card">


          <div class="radio_row liability_selector">
            <input class="account_liability" type="checkbox" id="account_asset">
            <label class="dialog_label" for="account_asset">Liability?</label>
          </div>

          <label class="dialog_label account_default_payment_class" for="account_default_payment">Default Payment</label>
          <input class="account_default_payment_class" type="number" id="account_default_payment" placeholder="$217.85">

          <label class="dialog_label account_digits_input" for="account_digits">Last Four Digits</label>
          <input class="account_digits_input" type="number" id="account_digits" placeholder="1234">

          <label class="dialog_label account_balance_input" for="account_balance">Current Balance</label>
          <input class="account_balance_input" type="number" id="account_balance" placeholder="$1250.11">
        </div>
      </div>

      <button class="dialog_button" type="submit">Add Account</button>
    </div>
  </teleport>

  <div class="transactions section">
    <h2>Latest Transactions</h2>

    <transaction class="transaction"/>

    <div class="button_row">
      <button class="section_button">All Transactions</button>
      <button class="section_button" @click="toggleTransactions">New Transaction</button>
    </div>
  </div>

  <teleport to="body">
    <div class="dialog" id="transactions_dialog" v-if="transaction_dialog">

      <div class="dialog_title">
        <h1>New Transaction</h1>
        <button class="dialog_button" @click="toggleTransactions">Close</button>
      </div>

      <div class="row">

        <div class="dialog_column" id="transaction_categories_two">
          <div class="radio_row">
            <input class="transaction_radio"  id="transaction_health" type="radio" name="transaction_category">
            <label class="radio_label" for="transaction_health">Health</label>
          </div>

          <div class="radio_row">
            <input class="transaction_radio"  id="transaction_income" type="radio" name="transaction_category">
            <label class="radio_label" for="transaction_income">Income</label>
          </div>

          <div class="radio_row">
            <input class="transaction_radio"  id="transaction_insurance" type="radio" name="transaction_category">
            <label class="radio_label" for="transaction_insurance">Insurance</label>
          </div>

          <div class="radio_row">
            <input class="transaction_radio"  id="transaction_personal" type="radio" name="transaction_category">
            <label class="radio_label" for="transaction_personal">Personal</label>
          </div>

          <div class="radio_row">
            <input class="transaction_radio"  id="transaction_transfer" type="radio" name="transaction_category">
            <label class="radio_label transaction_transfer" for="transaction_transfer">Transfer</label>
          </div>

          <div class="radio_row">
            <input class="transaction_radio"  id="transaction_transportation" type="radio" name="transaction_category">
            <label class="radio_label" for="transaction_transportation">Transportation</label>
          </div>

          <div class="radio_row">
            <input class="transaction_radio"  id="transaction_travel" type="radio" name="transaction_category">
            <label class="radio_label" for="transaction_travel">Travel</label>
          </div>
        </div>

        <div class="dialog_column right_column_two" id="transaction_categories">

          <h2>Category</h2>

          <div class="radio_row">
            <input class="transaction_radio"  id="transaction_general" type="radio" name="transaction_category">
            <label class="radio_label" for="transaction_general">General</label>
          </div>

          <div class="radio_row">
            <input class="transaction_radio"  id="transaction_business" type="radio" name="transaction_category">
            <label class="radio_label" for="transaction_business">Business</label>
          </div>

          <div class="radio_row">
            <input class="transaction_radio"  id="transaction_education" type="radio" name="transaction_category">
            <label class="radio_label" for="transaction_education">Education</label>
          </div>

          <div class="radio_row">
            <input class="transaction_radio"  id="transaction_finance" type="radio" name="transaction_category">
            <label class="radio_label" for="transaction_finance">Finance / Bills</label>
          </div>

          <div class="radio_row">
            <input class="transaction_radio"  id="transaction_entertainment" type="radio" name="transaction_category">
            <label class="radio_label" for="transaction_entertainment">Entertainment</label>
          </div>

          <div class="radio_row">
            <input class="transaction_radio"  id="transaction_giving" type="radio" name="transaction_category">
            <label class="radio_label" for="transaction_giving">Giving</label>
          </div>

          <div class="radio_row">
            <input class="transaction_radio"  id="transaction_groceries" type="radio" name="transaction_category">
            <label class="radio_label" for="transaction_groceries">Groceries</label>
          </div>

          <div class="radio_row">
            <input class="transaction_radio"  id="transaction_home" type="radio" name="transaction_category">
            <label class="radio_label" for="transaction_home">Home</label>
          </div>
        </div>

        <div class="dialog_column right_column" id="transaction_accounts">
          <h2>Account</h2>

          <div class="radio_row">
            <input class="transaction_radio" id="amex" type="radio" name="transaction_account">
            <label class="radio_label" for="amex">Amex Gold</label>
          </div>
        </div>

        <div class="dialog_column left_column">
          <h2>Info</h2>

          <label class="dialog_label" for="transaction_name">Name or Merchant</label>
          <input type="text" id="transaction_name" maxlength="50" placeholder="Headphones | Best Buy">

          <label class="dialog_label" for="transaction_date">Transaction Date</label>
          <input type="date" id="transaction_date">

          <label class="dialog_label" for="transaction_amount">Transaction Amount</label>
          <input type="number" id="transaction_amount" placeholder="237.43">

          <label class="dialog_label" for="transaction_note">Note</label>
          <input type="text" id="transaction_note" maxlength="255" placeholder="My new favorites!!!">
        </div>

      </div>

      <button class="dialog_button" type="submit">Confirm Transaction</button>
    </div>
  </teleport>


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
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'vue-chartjs';
import {data, options} from '@/assets/snapshot_data';
import Account_balance from "@/components/account_balance.vue";
import Transaction from "@/components/transaction.vue";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const user_first_name = ref("Sergio");
const quote_tile = ref("");
const account_dialog = ref(false);
const transaction_dialog = ref(false);

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
    "There is no genius without some madness. - Aristotle",
    "Wealth is the ability to fully experience life. - H.D Thoreau"];

const toggleAccount = () => {
  account_dialog.value = !account_dialog.value;

  if(account_dialog.value)
  {
    setTimeout(() => {
      dialogWidth();
    }, 1);
  }
}

const toggleTransactions = () => {
  transaction_dialog.value = !transaction_dialog.value;

  if(transaction_dialog.value)
  {
    setTimeout(() => {
      transactionWidth();
    }, 1);
  }
}

const shroudToggle = () => { account_dialog.value = false; transaction_dialog.value = false;};


  const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quote_tile.value = quotes[randomIndex];
  }

const dialogWidth = () => {
  const computedWidth = getComputedStyle(document.getElementById('account_dialog')).width;
  const columnComputedWidth = getComputedStyle(document.getElementById('middle_column')).width;

  document.getElementById('account_dialog').style.width = `calc(${computedWidth} + 6rem)`;
  document.getElementById('middle_column').style.width = `calc(${columnComputedWidth} + 2rem)`;
};

const transactionWidth = () => {
  const dialogWidth = getComputedStyle(document.getElementById('transactions_dialog')).width;
  const columnWidth = getComputedStyle(document.getElementById('transaction_accounts')).width;
  const categoryWidth = getComputedStyle(document.getElementById('transaction_categories')).width;

  document.getElementById('transactions_dialog').style.width=`calc(${dialogWidth} + 6rem`;
  document.getElementById('transaction_accounts').style.width = `calc(${columnWidth} + 2rem`;
  document.getElementById('transaction_categories').style.width = `calc(${categoryWidth} + 2rem`;
}


  onMounted(() => {
    randomQuote();
  })
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
    font-size: 1.1rem;
    font-weight: bold;
    margin: 1rem .25rem;
    cursor: pointer;
    width: fit-content;
    background: var(--background-3);
    padding: .5rem 1rem;
    border: none;
    border-radius: .5rem;
    text-align: right;
    transition: .2s;
  }

  .section_button:hover {
    color: var(--theme);
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

  .transaction {
    transition: .5s;
  }

  .transaction:hover {
    scale: 1.008;
    translate: 0 -1px;
  }

  .snapshot {
    padding-bottom: 2rem;
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
    padding-right: 1rem;
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
    border-left: solid 2px var(--accent);
  }

  .pie {
    width: fit-content;
  }

  #dialog_shroud {
    display: block;
    width: 100%;
    height: 100%;
    background: var(--background);
    opacity: .7 ;
    position: fixed;
    top: 0;
    left: 0;

  }

  .dialog {
    display: flex;
    flex-direction: column;
    background: var(--background-2);
    padding: 2rem;
    border-radius: 1rem;
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
  }

  #transactions_dialog {
    z-index: 1;
  }

  .dialog_title {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .dialog_column {
    display: flex;
    flex-direction: column;
  }

  .dialog_label {
    font-weight: bold;
  }

  #account_type {
    font-weight: bold;
  }

  .radio_label {
    font-weight: initial;
  }

  .account_type_radio {
    border-radius: 0;
  }

  .account_default_payment_class, .liability_selector, .account_digits_input {
    display: none;
  }

  .account_type_radio:checked + label, .transaction_radio:checked + label {
    font-weight: bold;
    color: var(--accent);
  }

  .left_column {
    order: 1;
  }

  .right_column {
    order: 2;
  }

  .right_most_column {
    order: 3;
    padding-top: 3.5rem;
  }

  .right_column_two {
    order: 3;
  }

  #transaction_categories_two {
    order: 4;
    padding-top: 4.5rem;
}

  .dialog_column:has(.radio_row):has(.account_liability:checked) ~ .left_column > .account_default_payment_class {
    display: initial;
  }
   .dialog_column:has(.radio_row):has(.account_digits:checked) ~ .left_column > .account_digits_input {
    display: initial;
  }

   .dialog_column:has(.radio_row):has(.account_other:checked) ~ .left_column > .liability_selector {
      display: initial;
    }

   .liability_selector:has(.account_liability:checked) ~ .account_default_payment_class {
     display: initial;
   }

   .dialog_button {
     cursor: pointer;
     width: fit-content;
     font-size: 1rem;
     font-weight: bold;
     padding: .5rem 1rem;
     background: var(--background-3);
     margin-top: 1rem;
     align-self: flex-end;
     border: none;
   }

   .dialog_button:hover {
     color: var(--theme);
   }

</style>