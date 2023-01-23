<template>
  <div
    id="accordionGroup"
    class="accordion w-full flex flex-col border border-emerald-600 rounded-md overflow-hidden"
  >
    <AccordionItem title="Accordion Item" id="2">
      An accessible accordion is an interactive element which allows users to hide and reveal additional content.

    </AccordionItem
    >
    <AccordionItem title="Checkbox ✅" id="1"> <Checkbox /> </AccordionItem>
  </div>
</template>

<script setup lang="ts">
import AccordionItem from "@/components/AccordionItem.vue";
import Checkbox from "@/components/Checkbox";
</script>
