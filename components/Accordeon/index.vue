<script setup lang="ts">

  const isOpenAccordeon = ref(true)
</script>

<template>
  <slot name="header" @click="!isOpenAccordeon" />
  <slot name="content" v-if="isOpenAccordeon" />
</template>

<style scoped lang="scss">

</style>