// grid-item-1
const gridItem2 = document.getElementById("2");
const gridItem2Left = document.getElementById("grid-item-2-left");
const gridItem2Right = document.getElementById("grid-item-2-right");
window["counter2"] = 0;

const gridItemList2 = [
  "../pictures/play/01/01_pingpongtanja.jpg",
  "../pictures/play/02/02_pingpongtanja.jpg",
  "../pictures/play/03/03_pingpong_tanja.gif"
];

// grid-item-4
const gridItem4 = document.getElementById("4");
const gridItem4Left = document.getElementById("grid-item-4-left");
const gridItem4Right = document.getElementById("grid-item-4-right");
window["counter4"] = 0;

const gridItemList4 = [
  "../pictures/play/01/01_frida.jpg",
  "../pictures/play/02/02_frida.jpg"
];

// grid-item-6
const gridItem6 = document.getElementById("6");
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
const gridItem10 = document.getElementById("10");
const gridItem10Left = document.getElementById("grid-item-10-left");
const gridItem10Right = document.getElementById("grid-item-10-right");
window["counter10"] = 0;

const gridItemList10 = [
  "../pictures/play/01/01_stone.jpg",
  "../pictures/play/02/02_stone.jpg",
  "../pictures/play/03/03_stone.jpg"
];

// grid-item-14
const gridItem14 = document.getElementById("14");
const gridItem14Left = document.getElementById("grid-item-14-left");
const gridItem14Right = document.getElementById("grid-item-14-right");
window["counter14"] = 0;

const gridItemList14 = [
  "../pictures/play/01/01_blueman.jpg",
  "../pictures/play/02/02_blueman.jpg"
];

// grid-item-21
const gridItem21 = document.getElementById("21");
const gridItem21Left = document.getElementById("grid-item-21-left");
const gridItem21Right = document.getElementById("grid-item-21-right");
window["counter21"] = 0;

const gridItemList21 = [
  "../pictures/play/01/01_parapluie.jpg",
  "../pictures/play/02/02_parapluie.jpg"
];

// grid-item-23
const gridItem23 = document.getElementById("23");
const gridItem23Left = document.getElementById("grid-item-23-left");
const gridItem23Right = document.getElementById("grid-item-23-right");
window["counter23"] = 0;

const gridItemList23 = [
  "../pictures/play/01/01_blueman_sitting.jpg",
  "../pictures/play/02/02_blueman_sitting.jpg"
];

// grid-item-24
const gridItem24 = document.getElementById("24");
const gridItem24Left = document.getElementById("grid-item-24-left");
const gridItem24Right = document.getElementById("grid-item-24-right");
window["counter24"] = 0;

const gridItemList24 = [
  "../pictures/play/01/01_schwarzemasse.jpg",
  "../pictures/play/02/02_schwarzemasse.jpg"
];

// grid-item-26
const gridItem26 = document.getElementById("26");
const gridItem26Left = document.getElementById("grid-item-26-left");
const gridItem26Right = document.getElementById("grid-item-26-right");
window["counter26"] = 0;

const gridItemList26 = [
  "../pictures/play/01/01_Ich-bin-ich.jpg",
  "../pictures/play/02/02_ich-bin-ich.jpg"
];

// grid-item-30
const gridItem30 = document.getElementById("30");
const gridItem30Left = document.getElementById("grid-item-30-left");
const gridItem30Right = document.getElementById("grid-item-30-right");
window["counter30"] = 0;

const gridItemList30 = [
  "../pictures/play/01/01_walkingman.jpg",
  "../pictures/play/02/02_walkingman.jpg"
];

// grid-item-31
const gridItem31 = document.getElementById("31");
const gridItem31Left = document.getElementById("grid-item-31-left");
const gridItem31Right = document.getElementById("grid-item-31-right");
window["counter31"] = 0;

const gridItemList31 = [
  "../pictures/play/01/01_illi.jpg",
  "../pictures/play/02/02_illi.jpg"
];

let listenDesktop = () => {
  if (window.innerWidth > 480) {
    gridItem2Left.addEventListener("click", () => {
      slideDown(gridItemList2, "counter2", gridItem2);
    });
    gridItem2Right.addEventListener("click", () => {
      slideUp(gridItemList2, "counter2", gridItem2);
    });
    gridItem4Left.addEventListener("click", () => {
      slideDown(gridItemList4, "counter4", gridItem4);
    });
    gridItem4Right.addEventListener("click", () => {
      slideUp(gridItemList4, "counter4", gridItem4);
    });
    gridItem6Left.addEventListener("click", () => {
      slideDown(gridItemList6, "counter6", gridItem6);
    });
    gridItem6Right.addEventListener("click", () => {
      slideUp(gridItemList6, "counter6", gridItem6);
    });
    gridItem10Left.addEventListener("click", () => {
      slideDown(gridItemList10, "counter10", gridItem10);
    });
    gridItem10Right.addEventListener("click", () => {
      slideUp(gridItemList10, "counter10", gridItem10);
    });
    gridItem14Left.addEventListener("click", () => {
      slideDown(gridItemList14, "counter14", gridItem14);
    });
    gridItem14Right.addEventListener("click", () => {
      slideUp(gridItemList14, "counter14", gridItem14);
    });
    gridItem21Left.addEventListener("click", () => {
      slideDown(gridItemList21, "counter21", gridItem21);
    });
    gridItem21Right.addEventListener("click", () => {
      slideUp(gridItemList21, "counter21", gridItem21);
    });
    gridItem23Left.addEventListener("click", () => {
      slideDown(gridItemList23, "counter23", gridItem23);
    });
    gridItem23Right.addEventListener("click", () => {
      slideUp(gridItemList23, "counter23", gridItem23);
    });
    gridItem24Left.addEventListener("click", () => {
      slideDown(gridItemList24, "counter24", gridItem24);
    });
    gridItem24Right.addEventListener("click", () => {
      slideUp(gridItemList24, "counter24", gridItem24);
    });
    gridItem26Left.addEventListener("click", () => {
      slideDown(gridItemList26, "counter26", gridItem26);
    });
    gridItem26Right.addEventListener("click", () => {
      slideUp(gridItemList26, "counter26", gridItem26);
    });
    gridItem30Left.addEventListener("click", () => {
      slideDown(gridItemList30, "counter30", gridItem30);
    });
    gridItem30Right.addEventListener("click", () => {
      slideUp(gridItemList30, "counter30", gridItem30);
    });
    gridItem31Left.addEventListener("click", () => {
      slideDown(gridItemList31, "counter31", gridItem31);
    });
    gridItem31Right.addEventListener("click", () => {
      slideUp(gridItemList31, "counter31", gridItem31);
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

listenDesktop();

let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

function handleGesture() {
  if (touchendX <= touchstartX) {
    console.log("Swiped left");
  }

  if (touchendX >= touchstartX) {
    console.log("Swiped right");
  }

  if (touchendY <= touchstartY) {
    console.log("Swiped up");
  }

  if (touchendY >= touchstartY) {
    console.log("Swiped down");
  }

  if (touchendY === touchstartY) {
    console.log("Tap");
  }
}

//  adding mobile swipe support
let listenMobile = () => {
  if (window.innerWidth <= 480) {
    gridItem2.addEventListener(
      "touchstart",
      function(event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
      },
      false
    );

    gridItem2.addEventListener(
      "touchend",
      event => {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleGesture();
        slideDown(gridItemList2, "counter2", gridItem2);
      },
      false
    );
  }
};
