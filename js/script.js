var topMenu = document.querySelector(".header");
var menuButton = topMenu.querySelector(".header__nav-menu-open");
var menuOpen = topMenu.querySelector(".header__nav-menu");
var body = document.querySelector("body");





menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuOpen.classList.toggle("header__nav-menu_open-js");
  topMenu.classList.toggle("header_menu-js");
  menuButton.classList.toggle("header__nav-menu-open_close");
  body.classList.toggle("modal-open-js");
});