<script setup lang="ts">
  const isNavOpen = useIsNavOpen()
</script>

<template>
  <div class="nav-toggler group md:hidden" :class="{'is-open': isNavOpen}">
    <IconMenu class="w-8 h-8 cursor-pointer hover:text-theme-light group-[.is-open]:hidden" @click="isNavOpen = !isNavOpen"/>
    <IconClose class="w-8 h-8 cursor-pointer hover:text-theme-light hidden group-[.is-open]:block" @click="isNavOpen = !isNavOpen"/>
  </div>
</template>

<style scoped lang="scss">

</style>