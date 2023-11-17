<script setup>
  import factions from '~/assets/data/db/faction.json'
  import heroData from '~/assets/data/db/template.json'

  console.log(heroData)
</script>

<template>
  <div class="container">
    <div class="form">
      <div class="form-main grid gap-3 mb-3">
        <section class="form-section" v-for="(heroList, faction_id) in factions">
          <Accordeon>
            <template v-slot:header>
              <h3 class="form-section__title bg-bg flex items-center cursor-pointer rounded gap-2 px-2 py-2 mb-2" :data-bg="faction_id">
                <img width="32" height="32" :src='`/images/factions/${faction_id}.png`' :alt="faction_id">
                <span class="capitalize">
                  {{ faction_id }}
                </span>
                <IconChevroneDown class="w-6 h-6 ml-auto" />
              </h3>
            </template>

            <template  v-slot:content>
              <div class="form-section__content grid gap-1" >
                <FormHero v-for="hero in heroList" :hero_id="hero" :faction_id="faction_id" :hero_data="heroData[faction_id][hero]" />
              </div>
            </template>
          </Accordeon>
        </section>
      </div>

      <div class="form-footer flex items-center gap-2 justify-end">
<!--    <button class="btn cursor-pointer min-w-[120px]" @click.prevent="showModal">change ID</button>-->
        <input class="btn cursor-pointer min-w-[120px]" type="reset" value="Скинути">
        <input class="btn cursor-pointer min-w-[220px]" type="submit" value="Зберегти">
      </div>
    </div>
  </div>
</template>
