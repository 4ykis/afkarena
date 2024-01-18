import { defineStore } from 'pinia';

export const useModalStore = defineStore('modals',() => {
  const modals = {
    authorization: ref(false)
  }
  function getModalState(id) {
      return modals[id].value
  }
  function changeState(id) {
      modals[id].value = !modals[id].value
  }

	function openModal(id) {
		modals[id].value = true
	}
	function closeModal(id) {
		modals[id].value = false
	}

  return { modals, changeState, getModalState, closeModal, openModal}
})