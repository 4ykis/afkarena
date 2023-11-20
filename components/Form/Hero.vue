<script setup>
 const props = defineProps(['hero_id', 'faction_id', 'hero_data']);
 const bgClass = () => `bg-faction-${props.faction_id}`;

 const ascendedList = [
   "None",
   "Elite",
   "Elite+",
   "Legendary",
   "Legendary+",
   "Mythical",
   "Mythical+",
   "Ascended",
   "Ascended_1",
   "Ascended_2",
   "Ascended_3",
   "Ascended_4",
   "Ascended_5",
 ]

 const isCurrentFrame = (frame) => props.hero_data.ascended === frame;

 const changeToStar = (frame) => {
   let str = frame.split('_');
   let res = str[0];

   if (str[1]) {
     res += ' '
     for(let i = 0; i < str[1]; i++) {
       res += '★'
     }
   }

   return res;
 }

</script>

<template>
  <div :class="bgClass()" class="hero grid px-2 py-2 rounded gap-2 md:items-center">
    <div class="hero__image">
      <img :src="`images/heroes/${hero_data.name}_Icon.jpg`" width="72" height="72" alt="">
    </div>

    <p class="hero__name text-2xl md:text-xl ml-4 md:ml-0">
      {{hero_data.name}}
    </p>

    <div
      class="hero__content grid gap-1 grid-flow-row
      md:grid-cols-[160px_1fr_1fr_1fr]"
    >
      <div class="hero__select">
        <select class="select" :name="`${hero_id}-frame`" :id="`${hero_id}-frame`">
          <option v-for="frame in ascendedList" value="frame" :selected="isCurrentFrame(frame)">
            {{ changeToStar(frame) }}
          </option>
        </select>
      </div>

      <div class="hero__field hero__field--si flex gap-1">
        <FormHeroField
          :id="hero_id"
          :prefix="'si'"
          :val="hero_data.signature_item"
          :btnVal="[10, 20, 30, 40]"
        />
      </div>

      <div class="hero__field hero__field--furn flex gap-1">
        <FormHeroField
          :id="hero_id"
          :prefix="'furniture'"
          :val="hero_data.furniture"
          :btnVal="[3, 9, 36]"
        />
      </div>

      <div class="hero__field hero__field--engrave flex gap-1">
        <FormHeroField
          :id="hero_id"
          :prefix="'engrave'"
          :val="hero_data.engrave"
          :btnVal="[30, 60, 80, 100]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

  .hero {
    grid-template-columns: 72px 1fr;
    grid-template-areas:
      "img title"
      "form form";

    @media (min-width: 768px) {
      grid-template-areas:
        "img title"
        "img form";
    }

    &__image {
      grid-area: img;
    }

    &__name {
      grid-area: title;
      align-self: center;
    }

    &__content {
      grid-area: form;
    }
  }
</style>