<script setup>
  const store = useModalStore()
  const heroesStore = useHeroesDataStore()
  const stopBodyScroll = useUtils().stopBodyScroll;
  const signOutUtil = useUtils().signOut;
  const isNavOpen = useIsNavOpen();
  const isLogedIn = useUtils().isLoged();

  const openModal = () => {
    store.changeState('authorization');
    stopBodyScroll()
  }

  const signOut = () => {
    signOutUtil();
    heroesStore.updateHeroesData({});

    setTimeout(() => {
      location.reload()
    }, 1000)
  }

</script>

<template>
  <a v-if="isLogedIn" href="/" @click.prevent="signOut" class="nav-link">Вийти</a>
  <a v-else href="/" @click.prevent="openModal" class="nav-link">Вхід</a>
</template>
