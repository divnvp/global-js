<script setup>
//
import UINavigation from "./UINavigation.vue";
import UIDropdownNav from "./UIDropdownNav.vue";

const items = ["Mobile Top Up", "About", "Rate", "Help"];
</script>

<template>
  <section class="row justify-content__space-between align-items__center">
    <label class="row align-items__center">
      <span class="logo">G</span>
      <span>Global</span>
    </label>

    <nav>
      <UINavigation />

      <UIDropdownNav :items="items" />
    </nav>

    <button class="button_sign-up">
      Sign Up
    </button>
  </section>
</template>
