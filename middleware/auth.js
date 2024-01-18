

export default defineNuxtRouteMiddleware(async (to, from) => {
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

		heroesStore.updateHeroesData(resp.data.value)
	} else {
		heroesStore.updateHeroesData({})
	}
})