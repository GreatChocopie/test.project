var topMenu = document.querySelector(".header");
var menuButton = topMenu.querySelector(".header__nav-menu-open");
var categoryButton = topMenu.querySelector(".header__category-open");
var categoryOpen  = topMenu.querySelector(".header__category-container");
var categoryClose = categoryOpen.querySelector(".header__category-close");
var menuOpen = topMenu.querySelector(".header__nav-menu");
var body = document.querySelector("body");
var numberButton = topMenu.querySelector(".desctop-number__text");
var numberToltip = document.querySelector(".desctop-number__toltip-wrapper");
var background = document.querySelector(".background-js");
var buttonSearch = document.querySelector(".header__search-open");
var popapSearch = document.querySelector(".header__search-form");
var windowWidth = window.innerWidth;

var categoryFirst =topMenu.querySelector(".header__category-item_first");
var categorySecond =topMenu.querySelector(".header__category-item_second");
var popapFirst = document.querySelector(".popap__category-first");





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


function openPopapFirst(evt) {
  if (popapFirst.classList.contains("popap-open-js")) {
    console.log("already opened map");
    evt.preventDefault();
    return false;
  }
  console.log("opening map");
  evt.preventDefault();
  evt.stopPropagation();
  popapFirst.classList.add("popap-open-js");
  body.classList.add("modal-open-js_body");
  document.addEventListener("click", closePopapFirst);
};

function openNumberPopap(evt) {
  if (numberToltip.classList.contains("desctop-number__toltip_open-js")) {
    console.log("already opened map");
    evt.preventDefault();
    return false;
  }
  console.log("opening map");
  evt.preventDefault();
  evt.stopPropagation();
  numberToltip.classList.add("desctop-number__toltip_open-js");
  // body.classList.add("modal-open-js_body");
  background.classList.add("background-js-open");
  document.addEventListener("click", closeNumberPopap);
};




// Ищем среди родителей elem присутствует ли neelde
function elemHasParent(elem, needle) {
  while (elem != null) {
    elem = elem.parentNode;
    if (elem == needle)
      return true;
  }
  return false;
}



function closePopapFirst(evt) {
  console.log("close start");
  console.log(evt.target);
  var target = evt.target;
  // если это кнопка закрытия или элемент среди родителей которого нет popupMap и
  // то закрываем
  if (!elemHasParent(target, popapFirst) || target == closeMap) {
    console.log("closing map");
    evt.preventDefault();
    popapFirst.classList.remove("popap-open-js");
    body.classList.remove("modal-open-js_body");
    document.removeEventListener("click", closePopapFirst);
    console.log("listener removed");
  } else {
    console.log("close - wrong elem, do nothing");
  }
}
function closeNumberPopap(evt) {
  console.log("close start");
  console.log(evt.target);
  var target = evt.target;
  // если это кнопка закрытия или элемент среди родителей которого нет popupMap и
  // то закрываем
  if (!elemHasParent(target, numberToltip) || target == numberButton) {
    console.log("closing map");
    evt.preventDefault();
    numberToltip.classList.remove("desctop-number__toltip_open-js");
    // body.classList.remove("modal-open-js_body");
    background.classList.remove("background-js-open");
    numberButton.blur();
    document.removeEventListener("click", closeNumberPopap);
    console.log("listener removed");
  } else {
    console.log("close - wrong elem, do nothing");
  }
}




categoryFirst.addEventListener("click", openPopapFirst);






buttonSearch.addEventListener("click", function (evt) {
  evt.preventDefault();
  popapSearch.classList.toggle("modal-open-js");
});
menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuOpen.classList.toggle("modal-open-js");
  menuButton.classList.toggle("header__nav-menu-open_close");
  body.classList.toggle("modal-open-js_body");
});
categoryButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  categoryOpen.classList.add("modal-open-js");
  body.classList.add("modal-open-js_body");
});
categoryClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  categoryOpen.classList.remove("modal-open-js");
  body.classList.remove("modal-open-js_body");
});
numberButton.addEventListener("click", openNumberPopap);



