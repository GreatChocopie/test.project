var topMenu = document.querySelector(".header");
var menuButton = topMenu.querySelector(".header__nav-menu-open");
var menuOpen = topMenu.querySelector(".header__nav-menu");
var body = document.querySelector("body");
var numberButton = topMenu.querySelector(".desctop-number__text");
var numberToltip = document.querySelector(".desctop-number__toltip-wrapper");
var background = document.querySelector(".background-js");
var windowWidth = window.innerWidth;


if (windowWidth > 767) {
  const details = document.querySelectorAll("details");

  for (detail of details) {
    detail.open = true;
  }
}

menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuOpen.classList.toggle("header__nav-menu_open-js");
  topMenu.classList.toggle("header_menu-js");
  menuButton.classList.toggle("header__nav-menu-open_close");
  body.classList.toggle("modal-open-js");
});
numberButton.addEventListener("click", function (evt) {
  numberToltip.classList.toggle("desctop-number__toltip_open-js");
  background.classList.toggle("background-js-open")
});

// window.addEventListener('scroll', function (e) {







// });