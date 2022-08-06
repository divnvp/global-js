<script setup>
import { defineProps, ref } from "vue";

const isMenuOpened = ref(false);

defineProps({
  items: { type: Array, required: true }
});

const showMenu = () => {
  isMenuOpened.value = !isMenuOpened.value;
}
</script>

<template>
  <section class="dropdown">
    <button @click="showMenu" class="dropdown__btn">
      <img src="../icons/menu.png" alt="menu">
    </button>

    <div v-if="isMenuOpened" class="dropdown__list">
      <span
        v-for="(item, index) in items"
        :key="index"
      >
        {{ item }}
      </span>
    </div>
  </section>
</template>
