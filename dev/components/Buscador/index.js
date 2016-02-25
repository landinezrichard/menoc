var showSearch = (function () {

	const btnMenu = document.getElementById('showSearch');
	const search = document.getElementById('search');
	const clase = 'Buscador--show';

	function suscribeEvents () {
		btnMenu.addEventListener('click',onClickMenu);
	}

	function onClickMenu () {
		search.classList.toggle(clase);
	}

	return {
		init : function () {
			suscribeEvents();
		},
		close : onClickMenu
	};

})();

module.exports = showSearch;