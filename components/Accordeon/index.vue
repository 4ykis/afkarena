<script setup lang="ts">
  const isOpenAccordeon = ref(true);

  const toggleAccordeon = () => {
    isOpenAccordeon.value = !isOpenAccordeon.value;
  }
</script>

<template>
  <div class="accordeon grid gap-2">
    <div class="accordeon__header bg-bg flex items-center cursor-pointer rounded gap-2 px-2 py-2" @click="toggleAccordeon">
      <slot name="header"/>

      <IconChevroneDown class="w-6 h-6 ml-auto" />
    </div>

    <div class="accordeon__content grid gap-1" v-if="isOpenAccordeon">
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>