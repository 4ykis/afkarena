<script setup lang="ts">
 const props = defineProps(['hero_id', 'faction_id', 'hero_data']);
 const bgClass = () => `bg-faction-${props.faction_id}`

 console.log(props.hero_data)
</script>

<template>
  <div :class="bgClass()" class="px-2 py-2 rounded">
    <img :src="`images/heroes/${hero_data.name}_Icon.jpg`" width="48" height="48" alt="">
    {{hero_data.name}}
  </div>
</template>

<style scoped lang="scss">

</style>