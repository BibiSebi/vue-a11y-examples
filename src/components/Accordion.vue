<template>
  <div
    id="accordionGroup"
    class="accordion w-full flex flex-col border border-emerald-600 rounded-md overflow-hidden"
  >
    <AccordionItem title="Title 1" id="1"> Panel content </AccordionItem>

    <AccordionItem title="Title 2" id="2"> Panel content 2 </AccordionItem>
  </div>
</template>

<script setup lang="ts">
import AccordionItem from "@/components/AccordionItem.vue";
</script>
