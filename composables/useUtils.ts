export const useUtils = () => {
	const toggleBodyScroll = () => {
		document.body.classList.toggle('off-scroll');
	}

	const stopBodyScroll = () => {
		document.body.classList.add('off-scroll');
	}

	const allowBodyScroll = () => {
		document.body.classList.remove('off-scroll');
	}

	const handleResponseError = (resp:any) => {
		let errorObject = {
			statusCode: resp.statusCode,
			message: ''
		}

		errorObject.statusCode = resp.statusCode;

		if (errorObject.statusCode >= 500) {
			errorObject.message = 'Щось пішло не так... Попробуйте знову.\nЯкщо ви продовжуєте отримувати цю помилку, спробуйте пізніше.'
		}

		if (errorObject.statusCode >= 400) {
			if (resp.data && resp.data.detail) {
				errorObject.message = resp.data.detail.message || resp.data.detail
			} else {
				errorObject.message = resp
			}
		}

		console.log(typeof errorObject.message)

		errorObject.message = errorObject.message.toString().replace(useRuntimeConfig().public.API, 'server');

		return errorObject;
	}

	// Auth
	const signOut = () => {
		useCookie('UserToken').value = null;
		useCookie('isLogedIn').value = 'false';
	}
	const signIn = async (token: string) => {
		const UserToken = useCookie('UserToken');
		const isLogedIn = useCookie('isLogedIn');

		if (token) {
			UserToken.value = token
			isLogedIn.value = 'true';
		} else {
			UserToken.value = null
			isLogedIn.value = 'false';
		}

		let HEAD = new Headers();
		HEAD.append("Authorization", `Bearer ${token}`);

		const resp = await useFetch(useRuntimeConfig().public.API + '/data',  {
			method: 'GET',
			headers: HEAD
		})

		if ( resp.error.value ) {
			return {}
		}

		return resp.data.value
	}

	const isLoged = () => {
		return useCookie('isLogedIn')
	}

	return {
		toggleBodyScroll,
		stopBodyScroll,
		allowBodyScroll,
		handleResponseError,
		signIn,
		signOut,
		isLoged
	}
}