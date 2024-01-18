<script setup lang="ts">
  const isNavOpen = useIsNavOpen()
</script>

<template>
  <nav class="nav" :class="{'is-open': isNavOpen}">
    <ul class="nav-list">
<!--      <li>-->
<!--        <NuxtLink @click="isNavOpen = false" class="nav-link" to="/">Головна</NuxtLink>-->
<!--      </li>-->
<!--      <li>-->
<!--        <NuxtLink @click="isNavOpen = false" class="nav-link" to="/heroes">Герої</NuxtLink>-->
<!--      </li>-->
      <!--      <li>-->
      <!--        <NuxtLink class="nav-link" to="/heroes">Beasts</NuxtLink>-->
      <!--      </li>-->
      <!--      <li>-->
      <!--        <NuxtLink class="nav-link" to="/tree">Support</NuxtLink>-->
      <!--      </li>-->
      <li>
        <NuxtLink @click="isNavOpen = false" target="_blank" class="nav-link" to="https://t.me/afkarenaua">
          <IconTelegramLogo class="w-7 h-7 text-[#2AABEE]"/>
          Telegram
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
  nav {
    @apply fixed top-[48px] bottom-[36px] left-0 right-0 z-1000;
    @apply opacity-0 pointer-events-none duration-200;
    @apply bg-bg px-3 py-2 md:hidden;

    &.is-open {
      @apply opacity-100 pointer-events-auto;
    }
  }

  .nav-list {
    @apply flex flex-col items-center h-full text-xl justify-center gap-4;
  }

  .nav-link {
    @apply uppercase content-center items-center w-full min-h-[50px] gap-1;
  }
</style>