var asideAcordeon = (function () {
	/* Dependencias*/
	const $ = require('jquery');

	/*variables*/
	let menuList   = $('.Aside-menuList'); 
	const menu = $('.Aside-menu');
	const clase = 'Aside-menuItem--active'

	function suscribeEvents () {
		// menuList.css('display','none');

		menu.on('click','.Aside-menuItem', function () {
			menu.find('.Aside-menuItem').removeClass(clase);
			$(this).toggleClass(clase);			
			
			if($(this).next().is(':visible')){
				$(this).next().slideUp();
			}
			if($(this).next().is(':hidden')){
				$('.Aside-menuItem').next().slideUp();
				$(this).next().slideDown();
			}
		});

	}	

	return {
		init : function () {
			suscribeEvents();
		}
	};

})();

module.exports = asideAcordeon;