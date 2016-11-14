var search = document.querySelector(".search_btn");
var form = document.querySelector(".hotel_search_form");

search.addEventListener("click", function(event) {
	event.preventDefault();
	form.classList.toggle("hotel_search_form_hide");
});