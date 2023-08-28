<script setup>
  import {ref} from "vue";

  const signUp = ref(false);
  const username = ref("");
  const password = ref("");
  const first_name = ref("");
  const last_name = ref("");
  const photo = ref("");

  const signingUp = () => {signUp.value = !signUp.value};
</script>

<template>

  <button @click="signingUp" :class="{ active: signUp }">
    {{ signUp ? 'Signing Up' : 'Sign Up' }}
  </button>

  <div class="row">
    <div class="signIn_div">
      <label for="username">Username:</label>
      <input  type="text" id="username" placeholder="myUsername" :value="username">
    </div>

    <div class="signIn_div" v-if="signUp">
      <label for="first_name">First Name:</label>
      <input type="text" id="first_name" placeholder="John" :value="first_name">
    </div>
  </div>

  <div class="row">
    <div class="signIn_div">
      <label for="password">Password:</label>
      <input type="password" id="password" placeholder="myPassword" :value="password">
    </div>

    <div class="signIn_div" v-if="signUp">
      <label for="last_name">Last Name:</label>
      <input type="text" id="last_name" placeholder="Appleseed" :value="last_name">
    </div>
  </div>

  <div class="signIn_div">
    <label for="photo">Profile Picture:</label>
    <input type="file" id="photo" accept="image/*" :value="photo">
  </div>

  <button id="login_submit">Sign In</button>
</template>

<style scoped>
  .active {
    color: var(--accent);
  }

  .signIn_div {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
  }

  #login_submit {
    float: right;
  }
</style>