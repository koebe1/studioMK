// project 1
const info1 = document.getElementById("info-1");
const infoCard1 = document.querySelector(".info-card-1");
const slider1ArrLeft = document.getElementById("slider1-arr-left");
const slider1ArrRight = document.getElementById("slider1-arr-right");
const slider1CounterCurr = document.getElementById("slider1-counter-current");
const slider1CounterEnd = document.getElementById("slider1-counter-end");
const slider1 = document.getElementById("slider-1");
window["counter1"] = 0;

//  slider pictures
const sliderList1 = [
  "../../pictures/index/01_yes/yes1.jpg",
  "../../pictures/index/01_yes/yes2.jpg",
  "../../pictures/index/01_yes/yes3.jpg",
  "../../pictures/index/01_yes/yes4.jpg",
  "../../pictures/index/01_yes/yes5.jpg",
  "../../pictures/index/01_yes/yes6.jpg",
  "../../pictures/index/01_yes/yes7.jpg",
  "../../pictures/index/01_yes/yes8.jpg",
  "../../pictures/index/01_yes/yes9.jpg"
];

let swipeWrap = document.querySelector(".swipe-wrap");
let slider = document.querySelectorAll(".slider");
let ClickLeft = document.querySelectorAll(".arr-container-left");
let ClickRight = document.querySelectorAll(".arr-container-right");

// getting length of the sliders
slider1CounterEnd.innerHTML = sliderList1.length;

let listenDesktop = () => {
  if (window.innerWidth > 480) {
    // set swipeWrapper property "display" to "none"

    swipeWrap.style.display = "none";

    // remove class "swipe" from grid items so background image gets visible for desktop version
    for (let element of slider) {
      element.classList.remove("swipe");
      element.style.display = "flex";
    }
    // add click surfaces for slider in desktop version
    for (let element of ClickLeft) {
      element.style.display = "block";
    }
    for (let element of ClickRight) {
      element.style.display = "block";
    }

    // info slider event listeners
    info1.addEventListener("click", () => infoSlide(info1, infoCard1, slider1));

    // event listener for the slider

    slider1ArrLeft.addEventListener("click", () =>
      slideLeft(sliderList1, "counter1", slider1CounterCurr, slider1)
    );

    slider1ArrRight.addEventListener("click", () =>
      slideRight(sliderList1, "counter1", slider1CounterCurr, slider1)
    );
  }
};

let listenMobile = () => {
  if (window.innerWidth <= 480) {
    // remove elements and add elements and classes for mobile slider support

    swipeWrap.style.display = "block";

    for (let element of slider) {
      element.classList.add("swipe");
      element.style.display = "block";
    }

    for (let element of ClickLeft) {
      element.style.display = "none";
    }
    for (let element of ClickRight) {
      element.style.display = "none";
    }

    // slider 1
    window.mySwipe = new Swipe(document.getElementById("slider-1"), {
      startSlide: 0,
      speed: 400,
      draggable: false,
      continuous: true,
      disableScroll: false,
      stopPropagation: false,
      ignore: ".scroller",
      callback: function(index, elem, dir) {},
      transitionEnd: function(index, elem) {}
    });
  }
};

let slideLeft = (pictureList, counter, counterCurr, slider) => {
  if (window[counter] === 0) {
    window[counter] = pictureList.length - 1;
    counterCurr.innerHTML = window[counter] + 1;
  } else {
    window[counter] -= 1;
    counterCurr.innerHTML = window[counter] + 1;
  }

  slider.style.backgroundImage = `url("${pictureList[window[counter]]}")`;
};

let slideRight = (pictureList, counter, counterCurr, slider) => {
  if (window[counter] === pictureList.length - 1) {
    window[counter] = 0;
    counterCurr.innerHTML = window[counter] + 1;
  } else {
    window[counter] += 1;
    counterCurr.innerHTML = window[counter] + 1;
  }
  slider.style.backgroundImage = `url("${pictureList[window[counter]]}")`;
};

// function to show the info box of the slider
let clicked = false;
let infoSlide = (button, infoCard, slider) => {
  if (!clicked) {
    infoCard.style.display = "flex";
    slider.style.opacity = "0";
    button.innerHTML = "CLOSE";

    clicked = true;
  } else {
    slider.style.opacity = "1";
    infoCard.style.display = "none";
    button.innerHTML = "INFO";
    clicked = false;
  }
};

listenDesktop();
listenMobile();
window.addEventListener("resize", () => listenDesktop());
window.addEventListener("resize", () => listenMobile());
