<script setup>
  const store = useHeroesDataStore();

  const canvas = ref(null)
  const img = store.getHeroesImage();

  console.log(canvas.value)
</script>

<template>
  <img :src="img"  width="1000px"/>
  <Modal class="roster" :modal-id="'roster'" :size="'lg'">
    <template #header>
      <span>Ваш Ростер</span>
    </template>

    <template #content="props">
      <canvas ref="canvas"></canvas>
    </template>
  </Modal>
</template>

<style scoped lang="scss">

</style>