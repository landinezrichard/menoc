(function () {
	/* Dependencias*/
	
	const showMenu = require('./components/MainMenu');
	

	/*Listeners*/
	document.addEventListener('DOMContentLoaded', onDOMload);

	function onDOMload() {		
		showMenu.init();
		
	}

}())