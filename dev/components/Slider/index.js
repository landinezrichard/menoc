var slides = (function () {
	/* Dependencias*/
	let $ = require('jquery');
	const rs = require('../slides/responsiveslides.js');

	function initialize () {
		$(".rslides").responsiveSlides({
			maxwidth: 800,
			pager: true
		});
	}

	return {
        init : function () {
            initialize();   
        }
    };

})();

module.exports = slides;