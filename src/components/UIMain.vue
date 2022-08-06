<script setup>
//
import UIFooter from "./UIFooter.vue";
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
        <input placeholder="Where do you want to call?">

        <button>
          <img
            src="../icons/searching.png"
            alt="Search icon"
          >
        </button>
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
<!--        <section class="flag">-->
<!--          <img-->
<!--            src="../pictures/indian.png"-->
<!--            alt="Indian flag"-->
<!--            class="flag_5"-->
<!--          >-->
<!--        </section>-->

        <img
          src="../pictures/girl.png"
          class="main-picture"
          alt="Girl picture"
        >

        <span class="green-ellipse" />
<!--        <span class="gray-ellipse" />-->
      </section>
    </section>
  </section>
</template>
