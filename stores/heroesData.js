import { defineStore } from 'pinia';
import heroesTemplate from '~/assets/data/heroesTemplate.json'
export const useHeroesDataStore = defineStore('data',() => {
	const data = {
		template: heroesTemplate,
		isUpdated: ref(null),
		userHero: ref({...heroesTemplate})
	}
	function getHeroesData() {
		return data.userHero.value
	}
	function updateHeroesData(newData) {
		data.userHero.value = {...data.template, ...newData}
	}

	function setStatus(status) {
		data.isUpdated = status;
	}

	function getStatus() {
		return data.isUpdated;
	}

	async function getHeroesImage() {
		console.log(data.userHero.value)
		return await useCanvas().drawRoster(data.userHero.value)
	}

	return { data, getHeroesData, updateHeroesData, setStatus, getStatus, getHeroesImage }
})