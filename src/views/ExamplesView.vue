<template>
  <main class="examples">
    <Accordion />
  </main>
</template>

<script setup lang="ts">
import Accordion from "./../components/Accordion.vue";
</script>

<style>
@media (min-width: 1024px) {
  .examples {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
