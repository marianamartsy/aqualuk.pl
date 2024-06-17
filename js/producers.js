$(document).ready(function () {
	$('.producers__boxes').slick({
		slidesToShow: 3,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: false,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 8,
					slidesToScroll: 1,
				},
			},
		],
	})
})
