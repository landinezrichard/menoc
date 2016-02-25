(function () {
	/* Dependencias*/
	
	const showMenu = require('./components/MainMenu');
	const asideAcordeon = require('./components/Aside');
	const slides   = require('./components/Slider');
	const mediaQuery       = require('./lib/mediaQuery.js');
	const showSearch = require('./components/Buscador');
	// const coments  = require('./components/Coments');

	/*Listeners*/
	document.addEventListener('DOMContentLoaded', onDOMload);

	function onDOMload() {		
		showMenu.init();
		showSearch.init();
		mediaQuery.init();
		asideAcordeon.init();
		slides.init();
		// coments.init();

		// require('./lib/livefyre.js');
		// require('./components/Coments');
	}

}())