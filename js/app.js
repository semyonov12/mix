document.addEventListener("DOMContentLoaded", function (event) {

	/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});

	const imageButtons = document.querySelectorAll('.offer-guests__column');

	if (imageButtons) {
		imageButtons.forEach(imageButton => {
			imageButton.addEventListener("click", function (e) {
				imageButtons.forEach(el => {
					el.classList.remove('offer-guests__column-act');
				});
				this.classList.add('offer-guests__column-act');
			});
		});
	}


	function initSliders() {
		if (document.querySelector('.offer-guests__slider')) {
			// Создаем слайдер
			new Swiper('.offer-guests__slider', {
				observer: true,
				observeParents: true,
				slidesPerView: 'auto',
				spaceBetween: 0,
				speed: 500,
				freeMode: true,
				freeModeMomentum: true,
			});
		}

		if (document.querySelector('.guests-black__slider')) {
			// Создаем слайдер
			new Swiper('.guests-black__slider', {
				observer: true,
				observeParents: true,
				slidesPerView: 2,
				spaceBetween: 0,
				speed: 500,

				scrollbar: {
					el: '.guests-black__scrollbar',
					draggable: true,
					dragSize: 175,
				},


				breakpoints: {
					320: {
						slidesPerView: 1.3,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 0,
					},
				},
				
				// События
				on: {

				}
			});
		}
	}

	window.addEventListener("load", function (e) {
		// Запуск инициализации слайдеров
		initSliders();

	});


});



