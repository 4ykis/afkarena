<script setup lang="ts">
  const canvas = useCanvas()
  const data = defineProps(['data'])
  const store = useModalStore()

  const openModal = () => {
    store.changeState('roster');
    useUtils().stopBodyScroll();
  }
</script>

<template>
  <button class="btn min-w-[165px]" type="button" @click="openModal">Згенерувати</button>
</template>

<style scoped lang="scss">

</style>