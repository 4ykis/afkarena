<script setup>
  import { breakpointsTailwind, useBreakpoints} from "@vueuse/core";

  definePageMeta({middleware: 'auth'})

  const store = {...useModalStore(), ...useNotifications(), ...useHeroesDataStore()}
  const breakpoints = useBreakpoints(breakpointsTailwind)
  const observer = ref(null);
  const heroes = ref(store.getHeroesData());

  const img = await useCanvas().drawRoster(heroes.value);

  const bgClass = (id) => `hero-${id}`
  const setInputValue = (name, value = 0) => {
    if (name) {
      observer.value.setFieldValue(name, value)
    }
  }
  const scrollTo = (id) => {
    const target = document.getElementById(id);
    const pageContainer = document.querySelector('#page');

    if (target) {
      pageContainer.scrollTo({
        top: target.offsetTop - (breakpoints.smallerOrEqual('sm').value ? 114 : 62),
        behavior: 'smooth'
      })
    }
  }
  const submitForm = async (values) => {
    let formData = values;
    let resp;

    store.updateHeroesData(formData)

    for (let f in formData) {
      for (let h in formData[f]) {
        if (formData[f][h].ascended === "None") {
          delete formData[f][h]
        }
      }

      if (Object.keys(formData[f]).length === 0) {
        delete formData[f]
      }
    }

    if (!useUtils().isLoged()) {
      store.changeState('authorization');
      useUtils().stopBodyScroll();
    } else {
      const KEY = useCookie('UserToken');
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${KEY.value}`);

      resp = await useFetch(useRuntimeConfig().public.API + '/data', {
        method: "POST",
        headers: myHeaders,
        body: values
      }).then(resp => resp)
    }

    if (resp.error.value) {
      const error = useUtils().handleResponseError(resp.error.value);
      if (error.statusCode === 401) {
        useUtils().signOut();
        store.changeState('authorization');
        useUtils().stopBodyScroll();
      } else {
        console.error(`ERROR ${error.statusCode}: \n Message: ${error.message}`);
        store.notify('error',error.message, 15)
      }
      return false;
    } else {
      console.log('Success: Data Sended');
      console.log(resp.data.value);
      store.notify('success', 'Данні успішно збереженно', 15)
      return true;
    }
  }

  const generate = () => {
    const data = observer.value.getValues();
    store.updateHeroesData(data);
    store.openModal('roster');
  }
</script>

<template>
<!--  <img :src="img" alt="">-->
  <div class="container">
    <veeForm ref="observer" v-slot="{ setFieldValue, handleSubmit, values}" as="div">
      <form class="form relative" @submit="handleSubmit($event, submitForm)">
        <div class="form-header">
          <div class="form-filter flex gap-3">
            <button v-for="(heroList, faction) in heroes" @click="scrollTo(faction)" :data-id="faction" type="button"  class="filter-btn">
              <img width="40" height="40" :src='`/images/factions/${faction}.png`' :alt="faction">
            </button>
          </div>
          <div class="form-action flex items-center gap-2 justify-end">
            <button class="btn min-w-[165px]" type="button" @click="generate">Згенерувати</button>
            <button class="btn min-w-[165px]" type="submit">Зберегти</button>
          </div>
        </div>

        <div class="form-main grid gap-3 mt-3">
          <section class="form-section grid" v-for="(heroList, faction) in heroes" :id="faction">
            <Accordeon>
              <template #header>
                <img width="28" height="28" :src='`/images/factions/${faction}.png`' :alt="faction">
                <span class="capitalize text-xl duration-200">
                  {{ faction }}
                </span>
              </template>

              <template #content>
                <div class="form-section__wrapper grid xl:grid-cols-2 gap-2">
                  <veeFieldArray :name="faction" v-slot="{ fields, push, remove }">
                    <FormHero :class="bgClass(faction)" class="hero"
                        v-for="(hero, heroId) in heroList"
                    >
                      <template #image>
                        <img :src="`images/heroes/${hero.name}_Icon.jpg`" width="72" height="72" alt="">
                      </template>

                      <template #name>
                        <veeField :name="`${faction}.${heroId}.name`" :value="hero.name">
                          {{hero.name.replaceAll('_', ' ')}}
                        </veeField>
                      </template>

                      <template #ascended="{ list, toStar }">
                        <veeField
                            novalidate
                            as="select"
                            class="input cursor-pointer"
                            :value="hero.ascended"
                            :name="`${faction}.${heroId}.ascended`">
                            <option v-for="frame in list" :value="frame" :selected="frame===hero.ascended">
                              {{ toStar(frame) }}
                            </option>
                        </veeField>
                      </template>

                      <template #signatureItem>
                        <veeField
                            novalidate
                            as="div"
                            v-slot="{ field }"
                            :value="hero.signature_item"
                            :name="`${faction}.${heroId}.signature_item`">
                          <FormHeroField
                              :veebind="field"
                              @setVal="setInputValue"
                              :fieldName="`${faction}.${heroId}.signature_item`"
                              :val="hero.signature_item"
                              :btnsArr="hero.isMax ? [10, 20, 30, 40] : [10, 20, 30]"
                          />
                        </veeField>
                      </template>

                      <template #furniture>
                        <veeField
                          novalidate
                          as="div"
                          v-slot="{ field }"
                          :value="hero.furniture"
                          :name="`${faction}.${heroId}.furniture`">

                          <FormHeroField
                              :veebind="field"
                              @setVal="setInputValue"
                              :fieldName="`${faction}.${heroId}.furniture`"
                              :val="hero.furniture"
                              :btnsArr="[3, 9, 36]"
                          />

                        </veeField>

                      </template>

                      <template #engrave>
                        <veeField
                            novalidate
                            as="div"
                            v-slot="{ field }"
                            :value="hero.engrave"
                            :name="`${faction}.${heroId}.engrave`">
                          <FormHeroField
                              :veebind="field"
                              @setVal="setInputValue"
                              :fieldName="`${faction}.${heroId}.engrave`"
                              :val="hero.engrave"
                              :btnsArr="hero.isMax ? [30, 60, 80, 100] : [30, 60, 80]"
                          />
                        </veeField>
                      </template>
                    </FormHero>
                  </veeFieldArray>
                </div>
              </template>
            </Accordeon>
          </section>
        </div>
      </form>
    </veeForm>
  </div>

  <ModalCanvasRoster />
</template>


<style scoped>
  .filter-btn {
    @apply rounded-full cursor-pointer hover:scale-110 duration-300 hover:shadow-theme-light hover:shadow-btnxl
  }

  .form-header {
    @apply sticky -top-[12px] z-[11] bg-bg-light py-3 flex justify-between border-theme border-b
      items-center gap-3 flex-col-reverse
    md:flex-row md:gap-0
  }
</style>
