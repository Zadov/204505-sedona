var site_list = document.querySelector(".site_list");
var open_btn = document.querySelector(".open_site_list");
var line = document.querySelector(".line");

if (open_btn) {
	open_btn.addEventListener("click", function(event) {
		event.preventDefault();
		open_btn.classList.toggle("cross_line");
		line.classList.toggle("hide_line");
		site_list.classList.toggle("site_list_show");
	});
}