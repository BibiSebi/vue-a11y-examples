<template>
  <div
    class="flex items-start flex-col border-b border-emerald-600 last:border-0"
  >
    <h3 class="w-full">
      <button
        class="w-full p-4 text-start bg-transparent border-2 border-transparent hover:border-orange-500"
        :aria-expanded="isExpanded"
        :aria-controls="'sect' + props.id"
        :id="'accor' + props.id"
        @click="onExpand"
      >
        <span class="accordion-title flex justify-between">
          <span class="font-semibold">{{ props.title }}</span>
          <IconArrowDown
            class="w-6 h-6 transition-transform duration-500 dark:fill-gray-400"
          />
        </span>
      </button>
    </h3>

    <div
      :id="'sect' + props.id"
      role="region"
      :aria-labelledby="'accor' + props.id"
      class="accordion-panel p-4 w-full"
      hidden
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IconArrowDown from "@/components/icons/IconArrowDown.vue";

const props = defineProps({
  id: String,
  title: String,
});

const isExpanded = ref(false);

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value;
};

const onExpand = (e: Event) => {
  const buttonElement: HTMLButtonElement = e.currentTarget as HTMLButtonElement;
  const controlsId = buttonElement.getAttribute("aria-controls");

  if (!controlsId) {
    return;
  }

  const panel = document.getElementById(controlsId);

  if (!panel) {
    return;
  }

  if (isExpanded.value) {
    panel.setAttribute("hidden", "");
  } else {
    panel.removeAttribute("hidden");
  }

  toggleExpanded();
};
</script>

<style scoped>
button[aria-expanded="true"] svg {
  transform: rotate(180deg);
}
</style>
