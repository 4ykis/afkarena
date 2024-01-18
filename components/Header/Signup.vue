<script setup>
  const store = useModalStore()
  const heroesStore = useHeroesDataStore()
  const isNavOpen = useIsNavOpen();
  const isLogedIn = useUtils().isLoged();

  const openModal = () => {
    store.changeState('authorization');
    useUtils().stopBodyScroll();
  }

  const signOut = () => {
    useUtils().signOut();
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
