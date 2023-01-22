<template>
  <div
    class="flex items-start flex-col border-b border-emerald-600 last:border-0"
  >
    <h3 class="w-full">
      <button
        class="w-full p-4 text-start hover:bg-emerald-100"
        aria-expanded="false"
        :aria-controls="'sect' + props.id"
        :id="'accor' + props.id"
        @click="onExpand"
      >
        <span class="accordion-title flex justify-between">
          <span class="font-semibold">{{ props.title }}</span>
          <img id="arrow-icon" alt="" src="@/assets/arrow_down.png" />
        </span>
      </button>
    </h3>

    <div
      :id="'sect' + props.id"
      role="region"
      :aria-labelledby="'accor' + props.id"
      class="accordion-panel p-4 w-full"
      hidden=""
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  id: String,
  title: String,
});

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

  const isExpanded = buttonElement.getAttribute("aria-expanded") === "true";
  buttonElement.setAttribute("aria-expanded", `${!isExpanded}`);

  if (isExpanded) {
    panel.setAttribute("hidden", "");
    return;
  }

  panel.removeAttribute("hidden");
};
</script>

<style scoped></style>
