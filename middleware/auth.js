

export default defineNuxtRouteMiddleware(async () => {
	const TOKEN = useCookie('UserToken').value;
	const isLogedIn = useCookie('isLogedIn').value;
	const heroesStore = useHeroesDataStore()

	if (isLogedIn && TOKEN.length) {
		let HEAD = new Headers();
		HEAD.append("Authorization", `Bearer ${TOKEN}`);

		const resp = await useFetch(useRuntimeConfig().public.API + '/data',  {
			method: 'GET',
			headers: HEAD
		})

		if ( resp.error.value ) {
			useUtils().signOut();
			heroesStore.updateHeroesData({})
			return false
		}

		heroesStore.setStatus(resp.data.value.is_updated)

		const data = toRaw(resp.data.value)
		delete data.is_updated;

		// console.log(data);

		heroesStore.updateHeroesData(data)
	} else {
		heroesStore.updateHeroesData({})
	}
})