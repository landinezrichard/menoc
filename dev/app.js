(function () {
	/* Dependencias*/
	
	const showMenu = require('./components/MainMenu');
	const asideAcordeon = require('./components/Aside');

	/*Listeners*/
	document.addEventListener('DOMContentLoaded', onDOMload);

	function onDOMload() {		
		showMenu.init();
		asideAcordeon.init();
	}

}())