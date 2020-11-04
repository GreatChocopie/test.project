var topMenu = document.querySelector(".header");
var menuButton = topMenu.querySelector(".header__nav-menu-open");
var menuOpen = topMenu.querySelector(".header__nav-menu");
var body = document.querySelector("body");
var numberButton = topMenu.querySelector(".desctop-number__text");
var numberToltip = document.querySelector(".desctop-number__toltip-wrapper");
var background = document.querySelector(".background-js");
var buttonSearch = document.querySelector(".header__search-open");
var popapSearch = document.querySelector(".header__search-form");
var windowWidth = window.innerWidth;






if (windowWidth > 767) {
  const details = document.querySelectorAll("details");

  for (detail of details) {
    detail.open = true;
  };

  let prevY = 0;

window.addEventListener('scroll', function(e) {
    let elem = document.querySelector(".header__category-wrapper"); // элемент который хотим спрятать
    let currentY = window.scrollY;
    if (currentY > prevY) {
	// прокрутка вниз
	// console.log('down');
	elem.style.margin = "-130px 0 0 0";
    }
    else {
	// прокрутка вверх, возвращение назад
	console.log('up')
	elem.style.margin = "0";
    }
    prevY = currentY;
});

}







buttonSearch.addEventListener("click", function (evt) {
  evt.preventDefault();
  popapSearch.classList.toggle("header__search-form-open-js");
});
menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuOpen.classList.toggle("header__nav-menu_open-js");
  menuButton.classList.toggle("header__nav-menu-open_close");
  body.classList.toggle("modal-open-js");

});
numberButton.addEventListener("click", function (evt) {
  numberToltip.classList.toggle("desctop-number__toltip_open-js");
  background.classList.toggle("background-js-open")
});