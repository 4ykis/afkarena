<script setup lang="ts">
  const isOpenAccordeon = ref(true);

  const toggleAccordeon = () => {
    isOpenAccordeon.value = !isOpenAccordeon.value;
  }
</script>

<template>
  <div class="accordeon">
    <div class="accordeon-header" @click="toggleAccordeon">
      <slot name="header"/>

      <IconChevroneDown class="w-6 h-6 ml-auto duration-200" :class="{'rotate-180' : isOpenAccordeon}" />
    </div>

    <div class="accordeon-content" v-show="isOpenAccordeon">
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .accordeon {
    @apply grid gap-2
  }

  .accordeon-header {
    @apply bg-bg flex items-center cursor-pointer rounded gap-2 px-2 py-2 hover:text-theme-light;
  }

  .accordeon-content {
    @apply grid gap-1
  }
</style>