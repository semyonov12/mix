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

	if (imageButtons.length) {
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

		if (document.querySelector('.possibilities__slider')) {
			// Создаем слайдер
			new Swiper('.possibilities__slider', {
				observer: true,
				observeParents: true,
				slidesPerView: 2,
				spaceBetween: 0,
				speed: 500,

				scrollbar: {
					el: '.possibilities__scrollbar',
					draggable: true,
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

		if (document.querySelector('.chips__slider')) {
			// Создаем слайдер
			new Swiper('.chips__slider', {
				observer: true,
				observeParents: true,
				slidesPerView: 2,
				spaceBetween: 0,
				speed: 500,

				scrollbar: {
					el: '.chips__scrollbar',
					draggable: true,
				},


				breakpoints: {
					320: {
						slidesPerView: 1.3,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 0,
					},
				},
				
			});
		}
		
		if (document.querySelector('.design__slider')) {
			// Создаем слайдер
			new Swiper('.design__slider', {
				observer: true,
				observeParents: true,
				slidesPerView: 2,
				spaceBetween: 0,
				speed: 500,

				scrollbar: {
					el: '.design__scrollbar',
					draggable: true,
				},


				breakpoints: {
					320: {
						slidesPerView: 1.3,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 0,
					},
				},
				
			});
		}

		if (document.querySelector('.user__slider')) {
			// Создаем слайдер
			new Swiper('.user__slider', {
				observer: true,
				observeParents: true,
				slidesPerView: 2,
				spaceBetween: 0,
				speed: 500,

				scrollbar: {
					el: '.user__scrollbar',
					draggable: true,
				},


				breakpoints: {
					320: {
						slidesPerView: 1.3,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 0,
					},
				},
				
			});
		}

		if (document.querySelector('.menu-crap__slider')) {
			// Создаем слайдер
			new Swiper('.menu-crap__slider', {
				observer: true,
				observeParents: true,
				slidesPerView: 2,
				spaceBetween: 0,
				speed: 500,
				breakpoints: {
					320: {
						slidesPerView: 1.5,
						spaceBetween: 0,
					},
					768: {
						slidesPerView: 2.5,
						spaceBetween: 0,
					},
					992: {
						slidesPerView: 3.5,
						spaceBetween: 0,
					},
					1300: {
						slidesPerView: 4,
						spaceBetween: 0,
					},
				},
				
			});
		}

		if (document.querySelector('.examples__slider')) {
			// Создаем слайдер
			new Swiper('.examples__slider', {
				observer: true,
				observeParents: true,
				slidesPerView: 2,
				spaceBetween: 0,
				speed: 500,

				scrollbar: {
					el: '.examples__scrollbar',
					draggable: true,
				},


				breakpoints: {
					320: {
						slidesPerView: 1.3,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 0,
					},
				},
				
			});
		}

		if (document.querySelector('.freedom__slider')) {
			// Создаем слайдер
			new Swiper('.freedom__slider', {
				observer: true,
				observeParents: true,
				slidesPerView: 2,
				spaceBetween: 0,
				speed: 500,


				breakpoints: {
					320: {
						slidesPerView: 1.3,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 0,
					},
				},
				
			});
		}

		if (document.querySelector('.school__slider')) {
			// Создаем слайдер
			new Swiper('.school__slider', {
				observer: true,
				observeParents: true,
				slidesPerView: 2,
				spaceBetween: 0,
				speed: 500,

				scrollbar: {
					el: '.school__scrollbar',
					draggable: true,
				},


				breakpoints: {
					320: {
						slidesPerView: 1.3,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 0,
					},
				},
				
			});
		}
	}

	window.addEventListener("load", function (e) {
		// Запуск инициализации слайдеров
		initSliders();
		window.addEventListener('resize', function (event) {
			initSliders();
		});
	});

// Получение хеша в адресе сайта
function getHash() {
	if (location.hash) { return location.hash.replace('#', ''); }
}

// Модуль плавной проктутки к блоку
let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
	const targetBlockElement = document.querySelector(targetBlock);
	if (targetBlockElement) {
		let headerItem = '';
		let headerItemHeight = 0;
		if (noHeader) {
			headerItem = 'header.header';
			headerItemHeight = document.querySelector(headerItem).offsetHeight;
		}
		let options = {
			speedAsDuration: true,
			speed: speed,
			header: headerItem,
			offset: offsetTop,
			easing: 'easeOutQuad',
		};
		// Закрываем меню, если оно открыто
		document.documentElement.classList.contains("menu-open") ? menuClose() : null;

		if (typeof SmoothScroll !== 'undefined') {
			// Прокрутка с использованием дополнения
			new SmoothScroll().animateScroll(targetBlockElement, '', options);
		} else {
			// Прокрутка стандартными средствами
			let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
			targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
			targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
			window.scrollTo({
				top: targetBlockElementPosition,
				behavior: "smooth"
			});
		}
	}
};

	// Плавная навигация по странице
function pageNavigation() {
	// data-goto - указать ID блока
	// data-goto-header - учитывать header
	// data-goto-top - недокрутить на указанный размер
	// data-goto-speed - скорость (только если используется доп плагин)
	// Работаем при клике на пункт
	document.addEventListener("click", pageNavigationAction);
	// Если подключен scrollWatcher, подсвечиваем текущий пукт меню
	document.addEventListener("watcherCallback", pageNavigationAction);
	// Основная функция
	function pageNavigationAction(e) {
		if (e.type === "click") {
			const targetElement = e.target;
			if (targetElement.closest('[data-goto]')) {
				const gotoLink = targetElement.closest('[data-goto]');
				const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : '';
				const noHeader = gotoLink.hasAttribute('data-goto-header') ? true : false;
				const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
				const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
				gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
				e.preventDefault();
			}
		} else if (e.type === "watcherCallback" && e.detail) {
			const entry = e.detail.entry;
			const targetElement = entry.target;
			// Обработка пунктов навигации, если указано значение navigator подсвечиваем текущий пукт меню
			if (targetElement.dataset.watch === 'navigator') {
				const navigatorActiveItem = document.querySelector(`[data-goto]._navigator-active`);
				let navigatorCurrentItem;
				if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) {
					navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`);
				} else if (targetElement.classList.length) {
					for (let index = 0; index < targetElement.classList.length; index++) {
						const element = targetElement.classList[index];
						if (document.querySelector(`[data-goto=".${element}"]`)) {
							navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
							break;
						}
					}
				}
				if (entry.isIntersecting) {
					// Видим объект
					// navigatorActiveItem ? navigatorActiveItem.classList.remove('_navigator-active') : null;
					navigatorCurrentItem ? navigatorCurrentItem.classList.add('_navigator-active') : null;
				} else {
					// Не видим объект
					navigatorCurrentItem ? navigatorCurrentItem.classList.remove('_navigator-active') : null;
				}
			}
		}
	}
	// Прокрутка по хешу
	if (getHash()) {
		let goToHash;
		if (document.querySelector(`#${getHash()}`)) {
			goToHash = `#${getHash()}`;
		} else if (document.querySelector(`.${getHash()}`)) {
			goToHash = `.${getHash()}`;
		}
		goToHash ? gotoBlock(goToHash, true, 500, 20) : null;
	}
}
pageNavigation();


});



