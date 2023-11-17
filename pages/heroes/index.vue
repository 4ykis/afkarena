<script setup>
  import factions from '~/assets/data/db/faction.json'

  console.log(factions)
</script>

<template>
  <div class="container">
    <div class="form">
      <div class="form-main grid gap-3 mb-3">
        <section class="form-section bg-bg rounded px-2" v-for="(heroList, faction_id) in factions">
          <Accordeon>
            <template v-slot:header>
              <h3 class="form-section__title cursor-pointer capitalize flex gap-4 py-2 items-center" :data-bg="faction_id">
                <img width="32" height="32" :src='`/images/factions/${faction_id}.png`' :alt="faction_id">
                {{ faction_id }}
                <IconChevroneDown class="w-6 h-6 ml-auto" />
              </h3>
            </template>

            <template  v-slot:content>
              <div class="form-section__content" >
                <FormHero  />
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
