import { defineRule } from 'vee-validate';
// import * as rules from '@vee-validate/rules';

export default defineNuxtPlugin(nuxtApp => {
	// Object.keys(rules)
	// 	.filter((k) => k !== 'default')
	// 	.forEach((rule) => {
	// 		defineRule(rule, rules[rule]);
	// 		console.log(rule)
	// 	})

	defineRule('required', value => {
		if (!value) {
			return 'Це поле обов\'язкове'
		}

		return true
	})

	defineRule('email', value => {
		// if the field is empty
		if (!value) {
			return 'Це поле обов\'язкове';
		}

		const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
		if (!regex.test(value)) {
			return 'Email має бути існуючим.';
		}

		return true;
	})

	defineRule('password', value => {
		// if the field is empty
		if (!value) {
			return 'Це поле обов\'язкове';
		}

		if (value.length < 8) {
			return 'Пароль повинен містити не менше 8 символів';
		}

		if (value.length < 8) {
			return 'Пароль повинен містити не менше 8 символів';
		}
		const regex = /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/;
		if (!regex.test(value)) {
			return 'Пароль повинен містити цифри і літери';
		}

		return true;
	})
})