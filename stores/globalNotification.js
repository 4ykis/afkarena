import { defineStore } from 'pinia';
import { v4 as uuid } from 'uuid';
export const useNotifications = defineStore('notifications',() => {
	const notificationList =  ref([])
	function getAllNotifications() {
		return notificationList.value
	}
	function notify(type = "default", msg = "", time = 10) {
		let id = uuid();
		notificationList.value.push({
			type: type.toLowerCase(),
			message: msg,
			time: time * 1000,
			id: id
		});
	}

	function removeItem(id) {
		notificationList.value = notificationList.value.filter(item => {
			item.id !== id;
		})
	}

	return { notificationList, getAllNotifications, notify, removeItem }
})