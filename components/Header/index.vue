<script setup lang="ts">
  import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

  const breakpoints = useBreakpoints(breakpointsTailwind)

  const isMobile = breakpoints.smallerOrEqual('md');

</script>

<template>
  <header class="header h-12 bg-bg border-b border-theme">
    <div class="container flex items-center justify-between py-1 h-full">
      <div class="header__nav">
        <HeaderNavToggler v-if="isMobile" />
        <HeaderNavDesktop v-if="!isMobile" />
        <HeaderNavMobile v-if="isMobile" />
      </div>

      <div class="header__signup">
        <HeaderSignup />
      </div>
    </div>
  </header>

  <ModalAuthorization />
</template>

<style scoped lang="scss">
  .header {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 999;
  }
</style>