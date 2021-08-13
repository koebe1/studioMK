// grid-item-1
const gridItem1 = document.getElementById("slider1");
const gridItem1Left = document.getElementById("grid-item-1-left");
const gridItem1Right = document.getElementById("grid-item-1-right");
window["counter1"] = 0;

const gridItemList1 = [
  "../pictures/lab/01_rose.jpg",
  "../pictures/lab/02_rose.jpg",
  "../pictures/lab/03_rose.jpg"
];

// grid-item-2
const gridItem2 = document.getElementById("slider2");
const gridItem2Left = document.getElementById("grid-item-2-left");
const gridItem2Right = document.getElementById("grid-item-2-right");
window["counter2"] = 0;

const gridItemList2 = [
  "../pictures/lab/01_rose_ice.jpg",
  "../pictures/lab/02_rose_ice.jpg"
];
// grid-item-3
const gridItem3 = document.getElementById("slider3");
const gridItem3Left = document.getElementById("grid-item-3-left");
const gridItem3Right = document.getElementById("grid-item-3-right");
window["counter3"] = 0;

const gridItemList3 = [
  "../pictures/lab/01_sommerlab.jpg",
  "../pictures/lab/02_sommerlab.jpg"
];

// grid-item-6
const gridItem6 = document.getElementById("slider6");
const gridItem6Left = document.getElementById("grid-item-6-left");
const gridItem6Right = document.getElementById("grid-item-6-right");
window["counter6"] = 0;

const gridItemList6 = [
  "../pictures/lab/01_kuso.jpg",
  "../pictures/lab/02_kuso.jpg",
  "../pictures/lab/03_kuso.jpg",
  "../pictures/lab/04_kuso.jpg"
];

// grid-item-11
const gridItem11 = document.getElementById("slider11");
const gridItem11Left = document.getElementById("grid-item-11-left");
const gridItem11Right = document.getElementById("grid-item-11-right");
window["counter11"] = 0;

const gridItemList11 = [
  "../pictures/lab/01_studiomk_afvs.jpg",
  "../pictures/lab/02_studiomk_afvs.jpg",
  "../pictures/lab/03_studiomk_afvs.jpg"
];

// grid-item-13
const gridItem13 = document.getElementById("slider13");
const gridItem13Left = document.getElementById("grid-item-13-left");
const gridItem13Right = document.getElementById("grid-item-13-right");
window["counter13"] = 0;

const gridItemList13 = [
  "../pictures/lab/01_zfkk.jpg",
  "../pictures/lab/zfkk_fenster_02.gif"
];

// grid-item-20
const gridItem20 = document.getElementById("slider20");
const gridItem20Left = document.getElementById("grid-item-20-left");
const gridItem20Right = document.getElementById("grid-item-20-right");
window["counter20"] = 0;

const gridItemList20 = [
  "../pictures/lab/03_cover.jpg",
  "../pictures/lab/02_cover.jpg"
];
// grid-item-21
const gridItem21 = document.getElementById("slider21");
const gridItem21Left = document.getElementById("grid-item-21-left");
const gridItem21Right = document.getElementById("grid-item-21-right");
window["counter21"] = 0;

const gridItemList21 = [
  "../pictures/lab/01_hose.jpg",
  "../pictures/lab/02_hose.jpg"
];
// grid-item-24
const gridItem24 = document.getElementById("slider24");
const gridItem24Left = document.getElementById("grid-item-24-left");
const gridItem24Right = document.getElementById("grid-item-24-right");
window["counter24"] = 0;

const gridItemList24 = ["../pictures/lab/01_b.jpg", "../pictures/lab/02_b.jpg"];

// grid-item-25
const gridItem25 = document.getElementById("slider25");
const gridItem25Left = document.getElementById("grid-item-25-left");
const gridItem25Right = document.getElementById("grid-item-25-right");
window["counter25"] = 0;

const gridItemList25 = [
  "../pictures/lab/01_studiomk_sticker.jpg",
  "../pictures/lab/02_studiomk_sticker.jpg"
];

// grid-item-34
const gridItem34 = document.getElementById("slider34");
const gridItem34Left = document.getElementById("grid-item-34-left");
const gridItem34Right = document.getElementById("grid-item-34-right");
window["counter34"] = 0;

const gridItemList34 = [
  "../pictures/lab/01_aleatorik.jpg",
  "../pictures/lab/02_aleatorik.jpg"
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

    gridItem1Left.addEventListener("click", () => {
      slideDown(gridItemList1, "counter1", gridItem1);
    });
    gridItem1Right.addEventListener("click", () => {
      slideUp(gridItemList1, "counter1", gridItem1);
    });
    gridItem2Left.addEventListener("click", () => {
      slideDown(gridItemList2, "counter2", gridItem2);
    });
    gridItem2Right.addEventListener("click", () => {
      slideUp(gridItemList2, "counter2", gridItem2);
    });
    gridItem3Left.addEventListener("click", () => {
      slideDown(gridItemList3, "counter3", gridItem3);
    });
    gridItem3Right.addEventListener("click", () => {
      slideUp(gridItemList3, "counter3", gridItem3);
    });
    gridItem6Left.addEventListener("click", () => {
      slideDown(gridItemList6, "counter6", gridItem6);
    });
    gridItem6Right.addEventListener("click", () => {
      slideUp(gridItemList6, "counter6", gridItem6);
    });
    gridItem11Left.addEventListener("click", () => {
      slideDown(gridItemList11, "counter11", gridItem11);
    });
    gridItem11Right.addEventListener("click", () => {
      slideUp(gridItemList11, "counter11", gridItem11);
    });
    gridItem13Left.addEventListener("click", () => {
      slideDown(gridItemList13, "counter13", gridItem13);
    });
    gridItem13Right.addEventListener("click", () => {
      slideUp(gridItemList13, "counter13", gridItem13);
    });
    gridItem20Left.addEventListener("click", () => {
      slideDown(gridItemList20, "counter20", gridItem20);
    });
    gridItem20Right.addEventListener("click", () => {
      slideUp(gridItemList20, "counter20", gridItem20);
    });
    gridItem21Left.addEventListener("click", () => {
      slideDown(gridItemList21, "counter21", gridItem21);
    });
    gridItem21Right.addEventListener("click", () => {
      slideUp(gridItemList21, "counter21", gridItem21);
    });
    gridItem24Left.addEventListener("click", () => {
      slideDown(gridItemList24, "counter24", gridItem24);
    });
    gridItem24Right.addEventListener("click", () => {
      slideUp(gridItemList24, "counter24", gridItem24);
    });
    gridItem25Left.addEventListener("click", () => {
      slideDown(gridItemList25, "counter25", gridItem25);
    });
    gridItem25Right.addEventListener("click", () => {
      slideUp(gridItemList25, "counter25", gridItem25);
    });
    gridItem34Left.addEventListener("click", () => {
      slideDown(gridItemList34, "counter34", gridItem34);
    });
    gridItem34Right.addEventListener("click", () => {
      slideUp(gridItemList34, "counter34", gridItem34);
    });
  }
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

    // slider 1
    window.mySwipe = new Swipe(document.getElementById("slider1"), {
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
    // slider 3
    window.mySwipe = new Swipe(document.getElementById("slider3"), {
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
    // slider 11
    window.mySwipe = new Swipe(document.getElementById("slider11"), {
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
    // slider 13
    window.mySwipe = new Swipe(document.getElementById("slider13"), {
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
    // slider 20
    window.mySwipe = new Swipe(document.getElementById("slider20"), {
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
    // slider 25
    window.mySwipe = new Swipe(document.getElementById("slider25"), {
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
    // slider 34
    window.mySwipe = new Swipe(document.getElementById("slider34"), {
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

// slide functions
let slideDown = (pictureList, counter, slider) => {
  if (window[counter] === 0) {
    window[counter] = pictureList.length - 1;
  } else {
    window[counter] -= 1;
  }
  slider.style.backgroundImage = `url("${pictureList[window[counter]]}")`;
};

let slideUp = (pictureList, counter, slider) => {
  if (window[counter] === pictureList.length - 1) {
    window[counter] = 0;
  } else {
    window[counter] += 1;
  }
  slider.style.backgroundImage = `url("${pictureList[window[counter]]}")`;
};

window.addEventListener("resize", () => listenMobile());
window.addEventListener("resize", () => listenDesktop());
listenDesktop();
listenMobile();
