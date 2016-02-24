var mediaQuery = (function () {
	/* Dependencias*/
	
	const displayMenuAbout = require('../components/AboutMenu');
	
	const media = '(max-width: 767px)';

	/*
	*	Añadimos un media query para que la funcionalidad touch este disponible solo en moviles.
	*/

	function media_query () {
		
		if( displayMenuAbout.getInstance() ){
			displayMenuAbout.remove();
		}
		if(window.matchMedia(media).matches) {			
			displayMenuAbout.init();			         
		}
	}	

	return {
		init : function () {
			media_query();
		}
	};

})();

module.exports = mediaQuery;