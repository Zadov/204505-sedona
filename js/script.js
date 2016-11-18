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

var date_in = document.querySelector("[name=date_in]");
var date_out = document.querySelector("[name=date_out]");
var adults = document.querySelector("[name=adults]");

var storage = localStorage.getItem("adults");

if (form) {
	// заполняем колличество взрослых, если уже была отправка формы
	if (storage) {
		adults.value = storage;
	};
	// если включен js, то добавляем классы, чтобы спрятать форму по умолчанию
	form.classList.add("form_animate");
	map_hide.classList.add("hide_block");
	// проверяем на наличие данных
	form.addEventListener("submit", function(event) {
		if (!date_in.value || !date_out.value || !adults.value) {
			event.preventDefault();
			console.log("Нужно ввести логин и пароль"); 
			alert ("Введите пожалуйста дату въезда, дату выезда и колличество взрослых");
		} else {
			localStorage.setItem("adults", adults.value);
		}
	});
};

// показываем и скрываем форму, если форма открыта, то работать с картой не возможно
if (search) {
	search.addEventListener("click", function(event) {
		event.preventDefault();
		form.classList.toggle("form_animate");
		map_hide.classList.toggle("hide_block");
});
};

// отключаем переход по ссылке, если включен javascript

var filter = document.querySelector(".show_btn");

if (filter) {
	filter.addEventListener("click", function(event) {
		event.preventDefault();
	});
};

