<script setup>
 const props = defineProps(['hero_id', 'faction_id', 'hero_data']);
 const bgClass = () => `hero-${props.faction_id}`;

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
  <div :class="bgClass()" class="hero">
    <div class="hero-image">
      <img :src="`images/heroes/${hero_data.name}_Icon.jpg`" width="72" height="72" alt="">
    </div>

    <p class="hero-name">
      {{hero_data.name}}
    </p>

    <div class="hero-content">
      <div class="hero-select">
        <select class="select" :name="`${hero_id}-frame`" :id="`${hero_id}-frame`">
          <option v-for="frame in ascendedList" value="frame" :selected="isCurrentFrame(frame)">
            {{ changeToStar(frame) }}
          </option>
        </select>
      </div>

      <div class="hero-field hero--si">
        <FormHeroField
          :id="hero_id"
          :prefix="'si'"
          :val="hero_data.signature_item"
          :btnVal="[10, 20, 30, 40]"
        />
      </div>

      <div class="hero-field hero--furn">
        <FormHeroField
          :id="hero_id"
          :prefix="'furniture'"
          :val="hero_data.furniture"
          :btnVal="[3, 9, 36]"
        />
      </div>

      <div class="hero-field hero--engrave">
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
    @apply grid px-2 py-2 rounded gap-2 md:items-center grid-cols-[72px_1fr];

    grid-template-areas:
      "img title"
      "form form";

    @media (min-width: 768px) {
      grid-template-areas:
        "img title"
        "img form";
    }

    &-image {
      grid-area: img;
    }

    &-name {
      @apply text-2xl md:text-xl ml-4 md:ml-0;

      grid-area: title;
      align-self: center;
    }

    &-content {
      @apply grid gap-1 grid-flow-row md:grid-cols-[160px_1fr_1fr_1fr];

      grid-area: form;
    }

    &-field {
      @apply flex gap-1;
    }
  }

  // needed because of dynamic classes and issue with Tailwind
  .hero-lightbearer {
    @apply bg-faction-lightbearer;
  }

  .hero-wilder {
    @apply bg-faction-wilder;
  }

  .hero-mauler {
    @apply bg-faction-mauler;
  }

  .hero-graveborn {
    @apply bg-faction-graveborn;
  }

  .hero-hypogean {
    @apply bg-faction-hypogean;
  }

  .hero-celestial {
    @apply bg-faction-celestial;
  }

  .hero-dimensional {
    @apply bg-faction-dimensional;
  }
</style>