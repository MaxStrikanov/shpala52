const slider = () => {
	const sliderSelector = '.swiper-container',
		options = {
			init: false,
			loop: true,
			speed: 400,
			slidesPerView: 1,
			spaceBetween: 0,
			centeredSlides : true,
			effect: 'coverflow',
					coverflowEffect: {
						//угол
					rotate: 4,
					//тень
					slideShadows: false,
					//наложение
					stretch: 0,
					modifier: 2,
					//удаление
					depth: 400,  
					scale: 1,
			},
			grabCursor: true,
			parallax: false,
			navigation: {
				nextEl: '.next-btn',
				prevEl: '.prev-btn',
			},
			breakpoints: {
				1000: {
					slidesPerView: 2,
					spaceBetween: 0
				},
				767: {
					slidesPerView: 2,
					spaceBetween: -20
				}        
			}
		};

	const mySwiper = new Swiper(sliderSelector, options);
	mySwiper.init();
}

export default slider;