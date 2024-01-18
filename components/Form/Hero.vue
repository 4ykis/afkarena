<script setup>
  const props = defineProps(['modalId', 'size', 'onClose']);
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
  <div>
    <div class="hero-image">
      <slot name="image" />
    </div>

    <p class="hero-name">
      <slot name="name" />
    </p>

    <div class="hero-content">
      <div class="hero-select">
        <slot name="ascended" :list="ascendedList" :toStar="changeToStar" />
      </div>

      <div class="hero-si">
        <slot name="signatureItem"></slot>
      </div>

      <div class="hero-furniture">
        <slot name="furniture"></slot>
      </div>

      <div class="hero-engrave">
        <slot name="engrave"></slot>
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
      @apply grid gap-1 grid-flow-row md:grid-cols-[180px_1fr_1fr_1fr];

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