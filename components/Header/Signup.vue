<script setup>
  const store = useModalStore()
  const stopBodyScroll = useUtils().stopBodyScroll
  const openModal = () => {
    store.changeState('authorization');
    stopBodyScroll()
  }
</script>

<template>
  <a href="/" @click.prevent="openModal" class="nav-link">Вхід</a>
</template>
