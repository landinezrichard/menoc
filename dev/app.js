(function () {
	/* Dependencias*/
	
	const showMenu = require('./components/MainMenu');
	const asideAcordeon = require('./components/Aside');
	const slides   = require('./components/Slider');

	/*Listeners*/
	document.addEventListener('DOMContentLoaded', onDOMload);

	function onDOMload() {		
		showMenu.init();
		asideAcordeon.init();
		slides.init();
	}

}())