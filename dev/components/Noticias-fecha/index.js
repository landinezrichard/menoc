var owl = (function () {

	/* Dependencias*/
	const $ = require('jquery');
	// const owlCarousel = require('../../../node_modules/owlcarousel/owl-carousel/owl.carousel.js');
	const owlCarousel = require('../../lib/owl-carousel/owl.carousel.js');

	
	var initialize = function() {
		$('#owl-noticias').owlCarousel();
	};

	return {
		init: initialize
	};

})();

module.exports = owl;