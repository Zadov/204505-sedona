// делаем меню активным

var active_menu = document.querySelectorAll(".main_nav a");

for (var i = 0; i < active_menu.length; i++) {
	if (active_menu[i].href == location.protocol + '//' + location.host + document.location.pathname) {
		active_menu[i].classList.add("active_mnu");
	}
};


// показываем форму

var search = document.querySelector(".search_btn");
var form = document.querySelector(".hotel_search_form");
var map_hide = document.querySelector(".map_hide");

// если включен js, то добавляем классы, чтобы спрятать форму по умолчанию

if (form) {
	form.classList.add("form_animate");
	map_hide.classList.add("hide_block");
};

if (search) {
	search.addEventListener("click", function(event) {
		event.preventDefault();
		form.classList.toggle("form_animate");
		map_hide.classList.toggle("hide_block");
});
};

// проверяем на наличие данных

var date_in = document.querySelector("[name=date_in]");
var date_out = document.querySelector("[name=date_out]");
var adults = document.querySelector("[name=adults]");





// отключаем переход по ссылке, если включен javascript

var filter = document.querySelector(".show_btn");

if (filter) {
	filter.addEventListener("click", function(event) {
		event.preventDefault();
	});
};

