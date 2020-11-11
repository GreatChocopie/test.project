var topMenu = document.querySelector(".header");
var menuButton = topMenu.querySelector(".header__nav-menu-open");
var categoryButton = topMenu.querySelector(".header__category-open");
var categoryWrapper  = topMenu.querySelector(".header__category-container");
var categoryCloseButton = categoryWrapper.querySelector(".header__category-close");
var menuWrapper = topMenu.querySelector(".header__nav");
var body = document.querySelector("body");
var numberButton = topMenu.querySelector(".desctop-number__text");
var numberToltip = document.querySelector(".desctop-number__toltip");
var background = document.querySelector(".background-js");
var buttonSearch = document.querySelector(".header__search-open");
var popapSearch = document.querySelector(".header__search-form");
var windowWidth = window.innerWidth;
var categoryFirst =topMenu.querySelector(".header__category-item_first");
var categorySecond =topMenu.querySelector(".header__category-item_second");
var popapFirst = document.querySelector(".popap__category-first");


 /* SLIDE UP */
    var slideUp = function(target, duration=500)  {

        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.boxSizing = 'border-box';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout( function() {
              target.style.display = 'none';
              target.style.removeProperty('height');
              target.style.removeProperty('padding-top');
              target.style.removeProperty('padding-bottom');
              target.style.removeProperty('margin-top');
              target.style.removeProperty('margin-bottom');
              target.style.removeProperty('overflow');
              target.style.removeProperty('transition-duration');
              target.style.removeProperty('transition-property');
              //alert("!");
        }, duration);
    }

    /* SLIDE DOWN */
    var slideDown = function (target, duration=500) {

        target.style.removeProperty('display');
        var display = window.getComputedStyle(target).display;
        if (display === 'none') display = 'block';
        target.style.display = display;
        var height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.boxSizing = 'border-box';
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout( function() {
          target.style.removeProperty('height');
          target.style.removeProperty('overflow');
          target.style.removeProperty('transition-duration');
          target.style.removeProperty('transition-property');
        }, duration);
    }

    /* TOOGLE */
    var slideToggle = function(target, duration = 500) {
        if (window.getComputedStyle(target).display === 'none') {
          return slideDown(target, duration);
        } else {
          return slideUp(target, duration);
        }
    }



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
  if (background.classList.contains("background-js-open")) {
    console.log("already opened map");
    evt.preventDefault();
    return false;
  }
  console.log("opening map");
  evt.preventDefault();
  evt.stopPropagation();
  // numberToltip.classList.add("desctop-number__toltip_open-js");
  background.classList.add("background-js-open");
  document.addEventListener("click", closeNumberPopap);
};

function openSearch(evt) {
  console.log("openSearch start2");
  if (popapSearch.classList.contains("modal-open-js")) {
    console.log("already opened map");
    evt.preventDefault();
    return false;
  }
  evt.preventDefault();

  popapSearch.classList.add("modal-open-js");
  slideDown(popapSearch.firstElementChild);

  setTimeout(function(){
      // Вызываем код отложенно, у него не будет этой цепочки вызовов
      document.addEventListener("click", closeSearch);
  }, 1);

};



function openMenu(evt) {
  if (menuWrapper.style.display == "block") {
    console.log("already opened menu");
    evt.preventDefault();
    return false;
  }
  console.log("opening menu");
  evt.preventDefault();
  
  slideDown(menuWrapper, 500);

  menuButton.classList.add("header__nav-menu-open_close");
  body.classList.add("modal-open-js_body");


  // disableScroll();

  setTimeout(function(){
    // Вызываем код отложенно, у него не будет этой цепочки вызовов
    document.addEventListener("click", closeMenu);
    
  }, 1);
  
};
function openCategory(evt) {
  if (categoryWrapper.style.display == "block") {
    console.log("already opened menu");
    evt.preventDefault();
    return false;
  }
  console.log("opening menu");
  evt.preventDefault();
  
  slideDown(categoryWrapper, 500);
  body.classList.add("modal-open-js_body");

  categoryCloseButton.addEventListener("click", closeCategory);
  
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
  if (!elemHasParent(target, numberToltip) || target == numberButton) {
    console.log("closing map");
    evt.preventDefault();
    // numberToltip.classList.remove("desctop-number__toltip_open-js");
    // body.classList.remove("modal-open-js_body");
    background.classList.remove("background-js-open");
    numberButton.blur();
    document.removeEventListener("click", closeNumberPopap);
    console.log("listener removed");
  } else {
    console.log("close - wrong elem, do nothing");
  }
}

function closeMenu(evt) {
  console.log("closeMenu start");
  console.log(evt.target);
  var target = evt.target;
  if (!elemHasParent(target, menuWrapper) || target == menuButton) {
    console.log("closing menu");
    evt.preventDefault();
    slideUp(menuWrapper);
    menuButton.classList.remove("header__nav-menu-open_close");
    body.classList.remove("modal-open-js_body");
    document.removeEventListener("click", closeMenu);


    console.log("closeMenu: listener removed");
  } else {
    console.log("closeMenu: wrong elem, do nothing");
  }
}

function closeCategory(evt) {
    evt.preventDefault();
    slideUp(categoryWrapper);
    body.classList.remove("modal-open-js_body");

}



function closeSearch(evt) {
  console.log("closeSearch");
  console.log(evt.target);
  var target = evt.target;
  if (!elemHasParent(target, popapSearch) || target == buttonSearch) {
    console.log("closeSearch: closing ");
    evt.preventDefault();
    
    setTimeout(function(){
      popapSearch.classList.remove("modal-open-js");
    }, 500);
    
    slideUp(popapSearch.firstElementChild);
    document.removeEventListener("click", closeSearch);
    console.log("closeSearch: listener removed");
  } else {
    console.log("closeSearch: wrong elem, do nothing");
  }
};


categoryFirst.addEventListener("click", openPopapFirst);






buttonSearch.addEventListener("click", openSearch);
menuButton.addEventListener("click", openMenu);

categoryButton.addEventListener("click", openCategory);

numberButton.addEventListener("click", openNumberPopap);






