<template>
  <nav>

    <div class="nav-container">
      <h1>Multi-Function Finance Application</h1>
      <span class="flex-spacer"></span>
      <button class="profile" @click="toggleUserMenu"></button>
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
    <div id="dialog_shroud" @click="shroudToggle" v-if="userMenu"></div>
    <teleport to="body" v-if="userMenu">
      <div class="user_menu">
        <div id="user_menu_head">
          <h1 id="user_menu_title">User Menu</h1>
          <div class="flex-spacer"></div>
          <button id="user_menu_close" @click="toggleUserMenu">Close</button>
        </div>
        <signIn/>
      </div>
    </teleport>

    <router-view/>
  </main>

  <footer>

    <h2>Inspired by Marcus from Goldman Sachs.</h2>
    <h2>Most quotes are from the Marcus app.</h2>
    <h2>All svg are from https://icons8.com/.</h2>
    <h2> Not in any way affiliated with Marcus or any other business.</h2>
    <h2>Created by Sergio Sanchez-Alvares. 2023</h2>
  </footer>

  <div class="basic_calculator_wrapper" id="basic_calculator">
    <button id="calculator_button" @click="toggle_calculator">Basic Calculator</button>
    <p id="calculator_reserve">{{  calculator_value_one }}</p>
    <h2 id="calculator_answer">{{ calculator_field }}</h2>

    <div class="calculator_buttons">
      <button id="clear" @click="calculator_clear">C</button>

      <button id="percentage" @click="calculator_percentage">%</button>
      <button id="negative" @click="calculator_backspace">&lt;</button>
      <button id="divide" @click="calculator_function('/')">/</button>
      <button id="seven" @click="calculator_edit(7)">7</button>
      <button id="eight" @click="calculator_edit(8)">8</button>
      <button id="nine" @click="calculator_edit(9)">9</button>
      <button id="multiply" @click="calculator_function('*')">x</button>
      <button id="four" @click="calculator_edit(4)">4</button>
      <button id="five" @click="calculator_edit(5)">5</button>
      <button id="six" @click="calculator_edit(6)">6</button>
      <button id="subtract" @click="calculator_function('-')">-</button>
      <button id="one" @click="calculator_edit(1)">1</button>
      <button id="two" @click="calculator_edit(2)">2</button>
      <button id="three" @click="calculator_edit(3)">3</button>
      <button id="add" @click="calculator_function('+')">+</button>
      <button id="zero" @click="calculator_edit(0)">0</button>
      <button id="negative" @click="calculator_negate">±</button>
      <button id="decimal" @click="calculator_edit('.')">.</button>
      <button id="equals" @click="solve">=</button>
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
    cursor: pointer;
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

  #calculator_reserve {
    padding: .1rem 1rem 0 0;
    margin: 0;
    text-align: right;
  }

  #calculator_answer {
    text-align: right;
    padding: 0 .5rem;
    margin: .5rem;
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

  .user_menu {
    background: var(--background-2);
    padding: 2rem;
    border-radius: 1rem;
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    transition: .5s;
  }

  #user_menu_head {
    display: flex;
  }

  #user_menu_title {
    text-decoration: solid var(--header) underline;
    text-underline-offset: .5rem;
  }

  #user_menu_close {
    height: fit-content;
    align-self: center;
  }
</style>

<script setup>
import {ref} from "vue";
import SignIn from "@/components/signIn.vue";

const userMenu = ref(false);
const calculator_field = ref("0");
  let calculator_active = false;
  let calculator_value_one = ref("");

  const toggleUserMenu = () => {userMenu.value = !userMenu.value };
  const toggle_calculator = () => {
    if(!calculator_active) {
      document.getElementById('basic_calculator').style.bottom = "0";
      calculator_active = true;
    }
    else {
      document.getElementById('basic_calculator').style.bottom = "-22rem";
      calculator_active = false;
    }
  }
  const calculator_clear = () => {
    calculator_field.value = "0";
    calculator_value_one.value = "";
  }

  const calculator_backspace = () => {
    let text = calculator_field.value.toString();
    calculator_field.value = text.substring(0, text.length-1);

    if(calculator_field.value.length === 0 || calculator_field.value === '-') {
      calculator_field.value = "0";
    }
  }

  const calculator_negate = () => {
    calculator_field.value = calculator_field.value * -1;
  }

  const calculator_percentage = () => {
    calculator_field.value = calculator_field.value / 100;
  }

  const calculator_edit = (input) => {
    if(calculator_field.value === "0")
    {
      calculator_field.value = input.toString();
    }
    else {
      calculator_field.value = calculator_field.value + input.toString();
    }
  }

  const calculator_function = (operator) => {
    calculator_value_one.value = calculator_field.value + ` ${operator }`;
    calculator_field.value = "0";
  }

  const solve = () => {
    let answer = eval(calculator_value_one.value + calculator_field.value);
    calculator_field.value = answer.toString();
    calculator_value_one.value = "";
  }

  document.addEventListener('keydown', (event) => {
    if(calculator_active) {
      const buttons = document.querySelectorAll('button');
      buttons.forEach((button) => button.blur());

      const pressedKey = event.key;

      if (!isNaN(pressedKey) || pressedKey === '.') {
        calculator_edit([pressedKey]);
      }

      if (['+', '-', '*', '/'].includes(pressedKey)) {
        calculator_function([pressedKey])
      }

      if (pressedKey === '%') {
        calculator_function([pressedKey]);
      }

      if (pressedKey === 'Enter') {
        solve();
      }

      if (pressedKey === 'Backspace') {
        calculator_backspace();
      }

      if (pressedKey === 'c' || pressedKey === 'C') {
        calculator_clear();
      }
    }
});
</script>