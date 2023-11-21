<script setup lang="ts">
  const isNavOpen = useIsNavOpen()
  const toggleBodyScroll = useUtils().toggleBodyScroll

  const toggleNav = () => {
    isNavOpen.value = !isNavOpen.value
    toggleBodyScroll();
  }
</script>

<template>
  <div class="nav-toggler group md:hidden" :class="{'is-open': isNavOpen}">
    <IconMenu class="icon group-[.is-open]:hidden" @click="toggleNav"/>
    <IconClose class="icon hidden group-[.is-open]:block" @click="toggleNav"/>
  </div>
</template>

<style scoped lang="scss">
  .icon {
    @apply w-8 h-8 cursor-pointer hover:text-theme-light
  }
</style>