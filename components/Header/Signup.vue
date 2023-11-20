<script setup>
  const store = useModalStore()

  console.log(store.modals['authorization'])

  const openModal = () => {
    store.changeState('authorization')
  }
</script>

<template>
  <a href="/" @click.prevent="openModal" class="nav-link">Вхід</a>
</template>
