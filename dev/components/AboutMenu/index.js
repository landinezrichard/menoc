var displayMenuAbout = (function () {
	const Hammer = require('hammerjs');
	let bodyTouch;	
	let body = document.querySelector('body');

	const clase = 'is-open';
	const aboutMenu = document.getElementById('aboutMenu');

	function suscribeEvents () {
		bodyTouch.on('swiperight',showAboutMenu);
		bodyTouch.on('swipeleft',showAboutMenu);
	}	

	function showAboutMenu () {
		bodyTouch.off('swipeleft',showAboutMenu);
		bodyTouch.off('swiperight',showAboutMenu);
		
		aboutMenu.classList.toggle(clase);

		setTimeout(function() {
			bodyTouch.on('swipeleft',showAboutMenu);
			bodyTouch.on('swiperight',showAboutMenu);
		}, 400);
	}

	function initialize () {
		//Convertimos el body en un receptor de eventos touch
		bodyTouch = new Hammer(body);		
	}

	function removeTouch () {
		bodyTouch.destroy();
	}

	function getTouchElement () {
		return bodyTouch;
	}

	return {
		init : function () {
			initialize();
			suscribeEvents();
		},
		remove : removeTouch,
		getInstance : getTouchElement
	}	

})();

module.exports = displayMenuAbout;