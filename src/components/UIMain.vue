<script setup>
import { ref, watch } from "vue";
// Components
import UIFooter from "./UIFooter.vue";

const isWarningVisible = ref(false);
const inputValue = ref("");

const preventSymbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

watch(inputValue, (newValue) => {
  isWarningVisible.value = newValue && newValue.length <= 4 || newValue.length >= 12;
});

const nameValidation = event => {
  if (preventSymbols.some(s => event.key.includes(s))) {
    event.preventDefault();
  }
}
</script>

<template>
  <section class="row">
    <section class="col">
      <section class="row">
        <span class="title_bold">
          Now Buy Your PIN or
          <span class="title_bold_orange">
            Top Up
          </span>
        </span>
      </section>
      <span class="title_bold_wider">With Bank Transfer</span>

      <span class="description">
        We Make international calling simple,
        relible, and cheap basedon your unique
        calling behavior.
      </span>

      <button class="button_get-started">
        Get Started
      </button>

      <section class="searching">
        <input
          v-model="inputValue"
          placeholder="Where do you want to call?"
          type="text"
          minlength="4"
          maxlength="12"
          @keydown="nameValidation($event)"
        >

        <button>
          <img
            src="../icons/searching.png"
            alt="Search icon"
          >
        </button>
      </section>

      <section v-if="isWarningVisible" class="row warning">
        <span>Minimum length of calling is 4 and maximum is 12 symbols</span>
      </section>

      <footer class="row">
        <UIFooter />
      </footer>
    </section>

    <section class="col">
      <section class="pictures-container">
        <div class="flag">
          <span class="big-img" />

          <img src="../pictures/indian.png" class="sm-img one" alt="Indian flag">
          <img src="../pictures/british.png" class="sm-img two" alt="British flag">
          <img src="../pictures/italian.png" class="sm-img three" alt="Italian flag">
          <img src="../pictures/indian.png" class="sm-img four" alt="Indian flag">
          <img src="../pictures/indian.png" class="sm-img five" alt="Indian flag">
        </div>

        <img
          src="../pictures/girl.png"
          class="main-picture"
          alt="Girl picture"
        >

        <span class="green-ellipse" />
      </section>
    </section>
  </section>
</template>
