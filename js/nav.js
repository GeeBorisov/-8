// let dropdown_toggle = document.querySelectorAll('.navbar-toggle');
// let dropdown_menu = document.querySelectorAll('.navbar-menu');
 
// for (let i = 0; i < dropdown_toggle.length; i++) {
//     dropdown_toggle[i].addEventListener('click', (e) => {
//         e.preventDefault();
//             dropdown_menu[i].classList.toggle('show');
//     });
// }




// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

document.querySelectorAll('.navbar').forEach(function (dropDownWrapper) {
	const dropdown_toggle = dropDownWrapper.querySelector('.navbar-toggle');
	const dropdown_menu = dropDownWrapper.querySelector('.navbar-menu');
	
	// Клик по кнопке. Открыть/Закрыть select
	dropdown_toggle.addEventListener('click', function (e) {
		dropdown_menu.classList.toggle('show');
        this.classList.add('show');
	});



	// Клик снаружи дропдауна. Закрыть дропдаун
	document.addEventListener('click', function (e) {
		if (e.target !== dropdown_toggle) {
			dropdown_toggle.classList.remove('show');
			dropdown_menu.classList.remove('show');
		}
	});

	// Нажатие на Tab или Escape. Закрыть дропдаун
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});
});