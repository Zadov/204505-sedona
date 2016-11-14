var search = document.querySelector(".search_btn");
var form = document.querySelector(".hotel_search_form");
var map_hide = document.querySelector(".map_hide");

search.addEventListener("click", function(event) {
	event.preventDefault();
	form.classList.toggle("hotel_search_form_hide");
	map_hide.classList.toggle("map_hide_disable");
});