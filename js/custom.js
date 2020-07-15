function menuToggle() {
	var hamburger = document.querySelector(".hamburger");
	hamburger.classList.toggle("is-active");

	var nav = document.getElementsByClassName("menu-overlay");
	nav[0].classList.toggle("active");
}
