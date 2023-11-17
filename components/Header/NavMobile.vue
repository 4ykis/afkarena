<script setup lang="ts">
  const isNavOpen = useIsNavOpen()
</script>

<template>
  <nav class="nav bg-bg px-3 py-2 md:hidden" :class="{'is-open': isNavOpen}">
    <ul class="nav__list flex flex-col items-center h-full text-xl justify-center gap-4">
      <li>
        <NuxtLink class="nav-link" to="/">Головна</NuxtLink>
      </li>
      <li>
        <NuxtLink class="nav-link" to="/heroes">Герої</NuxtLink>
      </li>
      <!--      <li>-->
      <!--        <NuxtLink class="nav-link" to="/heroes">Beasts</NuxtLink>-->
      <!--      </li>-->
      <!--      <li>-->
      <!--        <NuxtLink class="nav-link" to="/tree">Support</NuxtLink>-->
      <!--      </li>-->
      <li>
        <NuxtLink class="nav-link gap-1" to="https://t.me/afkarenaua">
          <IconTelegramLogo class="w-7 h-7 text-[#2AABEE]"/>
          Telegram
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
  nav {
    position: fixed;
    inset: 48px 0 36px;
    z-index: 1000;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s;

    &.is-open {
      opacity: 1;
      pointer-events: all;
    }
  }

  .nav-link {
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 50px;
  }
</style>