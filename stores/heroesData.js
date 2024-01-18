import { defineStore } from 'pinia';
import heroesTemplate from '~/assets/data/heroesTemplate.json'
export const useHeroesDataStore = defineStore('data',() => {
	const data = {
		template: heroesTemplate,
		userHero: ref({...heroesTemplate})
	}
	function getHeroesData() {
		return data.userHero.value
	}
	function updateHeroesData(newData) {
		data.userHero.value = {...data.template, ...newData}
	}

	return { data, getHeroesData, updateHeroesData }
})