<script setup lang="ts">
  import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

  const breakpoints = useBreakpoints(breakpointsTailwind)

  const isMobile = breakpoints.smallerOrEqual('md');

</script>

<template>
  <header class="header">
    <div class="container header-container">
      <div class="header-nav">
        <HeaderNavToggler v-if="isMobile" />
        <HeaderNavDesktop v-if="!isMobile" />
        <HeaderNavMobile v-if="isMobile" />
      </div>

      <div class="header-signup">
        <HeaderSignup />
      </div>
    </div>
  </header>

  <ModalAuthorization />
</template>

<style scoped lang="scss">
  .header {
    @apply fixed top-0 inset-y-0 z-999;
    @apply h-12 w-full bg-bg border-b border-theme;
  }

  .header-container {
    @apply flex items-center justify-between py-1 h-full;
  }
</style>