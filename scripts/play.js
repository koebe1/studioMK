// grid-item-1
const gridItem2 = document.getElementById("slider2");
const gridItem2Left = document.getElementById("grid-item-2-left");
const gridItem2Right = document.getElementById("grid-item-2-right");
window["counter2"] = 0;

const gridItemList2 = [
  "../pictures/play/01/01_pingpongtanja.jpg",
  "../pictures/play/02/02_pingpongtanja.jpg",
  "../pictures/play/03/03_pingpong_tanja.gif"
];

// grid-item-4
const gridItem4 = document.getElementById("slider4");
const gridItem4Left = document.getElementById("grid-item-4-left");
const gridItem4Right = document.getElementById("grid-item-4-right");
window["counter4"] = 0;

const gridItemList4 = [
  "../pictures/play/01/01_frida.jpg",
  "../pictures/play/02/02_frida.jpg"
];

// grid-item-6
const gridItem6 = document.getElementById("slider6");
const gridItem6Left = document.getElementById("grid-item-6-left");
const gridItem6Right = document.getElementById("grid-item-6-right");
window["counter6"] = 0;

const gridItemList6 = [
  "../pictures/play/01/01_rudi.jpg",
  "../pictures/play/02/02_rudi.jpg",
  "../pictures/play/03/03_rudi.jpg",
  "../pictures/play/04/04_rudi.jpg"
];

// grid-item-10
const gridItem10 = document.getElementById("slider10");
const gridItem10Left = document.getElementById("grid-item-10-left");
const gridItem10Right = document.getElementById("grid-item-10-right");
window["counter10"] = 0;

const gridItemList10 = [
  "../pictures/play/01/01_stone.jpg",
  "../pictures/play/02/02_stone.jpg",
  "../pictures/play/03/03_stone.jpg"
];

// grid-item-14
const gridItem14 = document.getElementById("slider14");
const gridItem14Left = document.getElementById("grid-item-14-left");
const gridItem14Right = document.getElementById("grid-item-14-right");
window["counter14"] = 0;

const gridItemList14 = [
  "../pictures/play/01/01_blueman.jpg",
  "../pictures/play/02/02_blueman.jpg"
];

// grid-item-21
const gridItem21 = document.getElementById("slider21");
const gridItem21Left = document.getElementById("grid-item-21-left");
const gridItem21Right = document.getElementById("grid-item-21-right");
window["counter21"] = 0;

const gridItemList21 = [
  "../pictures/play/01/01_parapluie.jpg",
  "../pictures/play/02/02_parapluie.jpg"
];

// grid-item-23
const gridItem23 = document.getElementById("slider23");
const gridItem23Left = document.getElementById("grid-item-23-left");
const gridItem23Right = document.getElementById("grid-item-23-right");
window["counter23"] = 0;

const gridItemList23 = [
  "../pictures/play/01/01_blueman_sitting.jpg",
  "../pictures/play/02/02_blueman_sitting.jpg"
];

// grid-item-24
const gridItem24 = document.getElementById("slider24");
const gridItem24Left = document.getElementById("grid-item-24-left");
const gridItem24Right = document.getElementById("grid-item-24-right");
window["counter24"] = 0;

const gridItemList24 = [
  "../pictures/play/01/01_schwarzemasse.jpg",
  "../pictures/play/02/02_schwarzemasse.jpg"
];

// grid-item-26
const gridItem26 = document.getElementById("slider26");
const gridItem26Left = document.getElementById("grid-item-26-left");
const gridItem26Right = document.getElementById("grid-item-26-right");
window["counter26"] = 0;

const gridItemList26 = [
  "../pictures/play/01/01_Ich-bin-ich.jpg",
  "../pictures/play/02/02_Ich-bin-ich.jpg"
];

// grid-item-30
const gridItem30 = document.getElementById("slider30");
const gridItem30Left = document.getElementById("grid-item-30-left");
const gridItem30Right = document.getElementById("grid-item-30-right");
window["counter30"] = 0;

const gridItemList30 = [
  "../pictures/play/01/01_walkingman.jpg",
  "../pictures/play/02/02_walkingman.jpg"
];

// grid-item-31
const gridItem31 = document.getElementById("slider31");
const gridItem31Left = document.getElementById("grid-item-31-left");
const gridItem31Right = document.getElementById("grid-item-31-right");
window["counter31"] = 0;

const gridItemList31 = [
  "../pictures/play/01/01_illi.jpg",
  "../pictures/play/02/02_illi.jpg"
];

let swipeWrap = document.querySelectorAll(".swipe-wrap");
let gridItem = document.querySelectorAll(".slider");
let gridItemClickLeft = document.querySelectorAll(".grid-item-click-left");
let gridItemClickRight = document.querySelectorAll(".grid-item-click-right");

let listenDesktop = () => {
  if (window.innerWidth > 480) {
    // set swipeWrapper property "display" to "none"
    for (let element of swipeWrap) {
      element.style.display = "none";
    }
    // remove class "swipe" from grid items so background image gets visible for desktop version
    for (let element of gridItem) {
      element.classList.remove("swipe");
      element.style.display = "flex";
    }
    // add click surfaces for slider in desktop version
    for (let element of gridItemClickLeft) {
      element.style.display = "block";
    }
    for (let element of gridItemClickRight) {
      element.style.display = "block";
    }

    gridItem2Left.addEventListener("click", () => {
      slideLeft(gridItemList2, "counter2", gridItem2);
    });
    gridItem2Right.addEventListener("click", () => {
      slideRight(gridItemList2, "counter2", gridItem2);
    });
    gridItem4Left.addEventListener("click", () => {
      slideLeft(gridItemList4, "counter4", gridItem4);
    });
    gridItem4Right.addEventListener("click", () => {
      slideRight(gridItemList4, "counter4", gridItem4);
    });
    gridItem6Left.addEventListener("click", () => {
      slideLeft(gridItemList6, "counter6", gridItem6);
    });
    gridItem6Right.addEventListener("click", () => {
      slideRight(gridItemList6, "counter6", gridItem6);
    });
    gridItem10Left.addEventListener("click", () => {
      slideLeft(gridItemList10, "counter10", gridItem10);
    });
    gridItem10Right.addEventListener("click", () => {
      slideRight(gridItemList10, "counter10", gridItem10);
    });
    gridItem14Left.addEventListener("click", () => {
      slideLeft(gridItemList14, "counter14", gridItem14);
    });
    gridItem14Right.addEventListener("click", () => {
      slideRight(gridItemList14, "counter14", gridItem14);
    });
    gridItem21Left.addEventListener("click", () => {
      slideLeft(gridItemList21, "counter21", gridItem21);
    });
    gridItem21Right.addEventListener("click", () => {
      slideRight(gridItemList21, "counter21", gridItem21);
    });
    gridItem23Left.addEventListener("click", () => {
      slideLeft(gridItemList23, "counter23", gridItem23);
    });
    gridItem23Right.addEventListener("click", () => {
      slideRight(gridItemList23, "counter23", gridItem23);
    });
    gridItem24Left.addEventListener("click", () => {
      slideLeft(gridItemList24, "counter24", gridItem24);
    });
    gridItem24Right.addEventListener("click", () => {
      slideRight(gridItemList24, "counter24", gridItem24);
    });
    gridItem26Left.addEventListener("click", () => {
      slideLeft(gridItemList26, "counter26", gridItem26);
    });
    gridItem26Right.addEventListener("click", () => {
      slideRight(gridItemList26, "counter26", gridItem26);
    });
    gridItem30Left.addEventListener("click", () => {
      slideLeft(gridItemList30, "counter30", gridItem30);
    });
    gridItem30Right.addEventListener("click", () => {
      slideRight(gridItemList30, "counter30", gridItem30);
    });
    gridItem31Left.addEventListener("click", () => {
      slideLeft(gridItemList31, "counter31", gridItem31);
    });
    gridItem31Right.addEventListener("click", () => {
      slideRight(gridItemList31, "counter31", gridItem31);
    });
  }
};

// slide functions
let slideLeft = (pictureList, counter, slider) => {
  if (window[counter] === 0) {
    window[counter] = pictureList.length - 1;
  } else {
    window[counter] -= 1;
  }
  //   slider.style.transform = "translate(100px,0)";
  slider.style.backgroundImage = `url("${pictureList[window[counter]]}")`;
};

let slideRight = (pictureList, counter, slider) => {
  if (window[counter] === pictureList.length - 1) {
    window[counter] = 0;
  } else {
    window[counter] += 1;
  }
  slider.style.backgroundImage = `url("${pictureList[window[counter]]}")`;
};

let listenMobile = () => {
  if (window.innerWidth <= 480) {
    // remove elements and add elements and classes for mobile slider support
    for (let element of swipeWrap) {
      element.style.display = "block";
    }

    for (let element of gridItem) {
      element.classList.add("swipe");
      element.style.display = "block";
    }

    for (let element of gridItemClickLeft) {
      element.style.display = "none";
    }
    for (let element of gridItemClickRight) {
      element.style.display = "none";
    }

    // slider 2
    window.mySwipe = new Swipe(document.getElementById("slider2"), {
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
    // slider 4
    window.mySwipe = new Swipe(document.getElementById("slider4"), {
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
    // slider 6
    window.mySwipe = new Swipe(document.getElementById("slider6"), {
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
    // slider 10
    window.mySwipe = new Swipe(document.getElementById("slider10"), {
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
    // slider 14
    window.mySwipe = new Swipe(document.getElementById("slider14"), {
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
    // slider 21
    window.mySwipe = new Swipe(document.getElementById("slider21"), {
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
    // slider 23
    window.mySwipe = new Swipe(document.getElementById("slider23"), {
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
    // slider 24
    window.mySwipe = new Swipe(document.getElementById("slider24"), {
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
    // slider 26
    window.mySwipe = new Swipe(document.getElementById("slider26"), {
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
    // slider 30
    window.mySwipe = new Swipe(document.getElementById("slider30"), {
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
    // slider 31
    window.mySwipe = new Swipe(document.getElementById("slider31"), {
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

window.addEventListener("resize", () => listenMobile());
window.addEventListener("resize", () => listenDesktop());
listenMobile();
listenDesktop();
