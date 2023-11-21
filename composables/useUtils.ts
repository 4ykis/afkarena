export const useUtils = () => {
	function toggleBodyScroll() {
		document.body.classList.toggle('off-scroll');
	}

	function stopBodyScroll() {
		document.body.classList.add('off-scroll');
	}

	function allowBodyScroll() {
		document.body.classList.remove('off-scroll');
	}

	return {
		toggleBodyScroll,
		stopBodyScroll,
		allowBodyScroll
	}
}