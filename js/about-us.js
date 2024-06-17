document.addEventListener('DOMContentLoaded', function () {
	const titles = document.querySelectorAll('.about-us__title')

	titles.forEach(function (title) {
		title.addEventListener('click', function (event) {
			const clickedTitle = event.currentTarget
			const description = clickedTitle.nextElementSibling

			titles.forEach(function (t) {
				if (t !== clickedTitle) {
					const desc = t.nextElementSibling
					desc.style.display = 'none'
				}
			})

			if (description.style.display === 'block') {
				description.style.display = 'none'
			} else {
				description.style.display = 'block'
			}
		})
	})
})
