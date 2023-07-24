<script setup>
import {computed, ref} from "vue";

  const balance = ref(50);
  const asset = ref(true);

  const balanceClass = computed(() => {
    return asset.value ? 'asset': "";
  })

//   If balance is +, green
</script>

<template>
  <main>
    <div class="row">
      <p>Credit - 6667</p>
      <div class="flex-spacer"></div>
      <p :class="balanceClass" class="balance">${{ balance }}</p>
    </div>
    <p class="smaller">Credit Card</p>
  </main>
</template>

<style scoped>
  main {
    border-bottom: solid 2px var(--header);
  }

  main p {
    margin: 0;
  }

  .smaller {
    font-size: .7rem;
  }

  .asset {
    color: var(--theme);
  }

  .balance {
    font-weight: bold;
  }
</style>