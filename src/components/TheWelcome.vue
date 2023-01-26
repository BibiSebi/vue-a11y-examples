<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Presentation</template>

    You can find the slides on
    <a
      href="https://github.com/BibiSebi/a11y-meetup"
      target="_blank"
      rel="noopener"
      >Github</a
    >
    or by going visiting
    <a href="https://a11y-meetup.vercel.app/1" target="_blank" rel="noopener"
      >this page</a
    >.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tools</template>

    Here you can find some tools that should help you check for accessibility
    issues:
    <a
      href="https://developer.chrome.com/docs/lighthouse/"
      target="_blank"
      rel="noopener"
      >Lighthouse</a
    >,
    <a
      href="https://webaim.org/resources/contrastchecker/"
      target="_blank"
      rel="noopener"
      >Contrast Checker</a
    >
    and
    <a href="https://www.deque.com/axe/devtools/" target="_blank" rel="noopener"
      >Axe DevTools</a
    >.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Resources</template>

    If you want to dive deeper into this topic, here are some good resources to
    help you start:

    <a href="w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener"
      >WCAG Quickref</a
    >,
    <a
      href="https://www.udacity.com/course/web-accessibility--ud891"
      target="_blank"
      rel="noopener"
      >Web Accessibility Course</a
    >,
    <a
      href="https://vue-a11y.com/project/#introduction"
      target="_blank"
      rel="noopener"
      >Vue A11y</a
    >, and
    <a
      href="https://vuejs.org/guide/best-practices/accessibility.html"
      target="_blank"
      rel="noopener"
      >Vue</a
    >. If you need more resources, I suggest paying
    <a
      href="https://github.com/vue-a11y/awesome-a11y-vue"
      target="_blank"
      rel="noopener"
      >Awesome A11y Vue</a
    >
    a visit.
  </WelcomeItem>
</template>
