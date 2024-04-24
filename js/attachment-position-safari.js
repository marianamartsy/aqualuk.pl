const header = document.querySelector('.header')
const heroImg = document.querySelector('.hero-img')

function isMobile() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

function isSafariMobile() {
	return /Safari/i.test(navigator.userAgent) && /iPhone|iPad|iPod/i.test(navigator.userAgent)
}

if (isMobile() && isSafariMobile()) {
	header.style.backgroundAttachment = 'scroll'
    heroImg.style.backgroundAttachment = 'scroll'
} else {
	header.style.backgroundAttachment = 'fixed'
    heroImg.style.backgroundAttachment = 'fixed'
}
