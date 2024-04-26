const privacyMessageBox = document.querySelector('.privacy-message')
const buttons = document.querySelectorAll('.privacy-message__button, .privacy-message__icon')

buttons.forEach(button => {
	button.addEventListener('click', () => {
		privacyMessageBox.style.display = 'none'
	})
})
