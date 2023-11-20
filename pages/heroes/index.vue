<script setup>
  import factions from '~/assets/data/db/faction.json'
  import heroData from '~/assets/data/db/template.json'

  // console.log(heroData)
</script>

<template>
  <div class="container">
    <div class="form">
      <div class="form-main grid gap-3 mb-3">
        <section class="form-section grid" v-for="(heroList, faction_id) in factions">
          <Accordeon>
            <template v-slot:header>
              <img width="32" height="32" :src='`/images/factions/${faction_id}.png`' :alt="faction_id">
              <span class="capitalize text-xl">
                {{ faction_id }}
              </span>
            </template>

            <template  v-slot:content>
              <div class="form-section__wrapper grid xl:grid-cols-2 gap-2">
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
