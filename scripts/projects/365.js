// project 9
const info9 = document.getElementById("info-9");
const infoCard9 = document.querySelector(".info-card-9");
const slider9ArrLeft = document.getElementById("slider9-arr-left");
const slider9ArrRight = document.getElementById("slider9-arr-right");
const slider9CounterCurr = document.getElementById("slider9-counter-current");
const slider9CounterEnd = document.getElementById("slider9-counter-end");
const slider9 = document.getElementById("slider-9");
window["counter9"] = 0;

//  slider pictures
const sliderList9 = [
  "../../pictures/index/09_365/kalenderblatt_1920x1063px.jpg",
  "../../pictures/index/09_365/kalenderblatt_1920x1063px2.jpg",
  "../../pictures/index/09_365/kalenderblatt_1920x1063px3.jpg",
  "../../pictures/index/09_365/kalenderblatt_1920x1063px4.jpg",
  "../../pictures/index/09_365/kalenderblatt_1920x1063px5.jpg",
  "../../pictures/index/09_365/kalenderblatt_1920x1063px6.jpg",
  "../../pictures/index/09_365/kalenderblatt_1920x1063px7.jpg",
  "../../pictures/index/09_365/kalenderblatt_1920x1063px8.jpg",
  "../../pictures/index/09_365/kalenderblatt_1920x1063px9.jpg"
];

// info slider event listeners
info9.addEventListener("click", () => infoSlide(info9, infoCard9, slider9));

// getting length of the sliders
slider9CounterEnd.innerHTML = sliderList9.length;

// event listener for the slider

slider9ArrLeft.addEventListener("click", () =>
  slideDown(sliderList9, "counter9", slider9CounterCurr, slider9)
);

slider9ArrRight.addEventListener("click", () =>
  slideUp(sliderList9, "counter9", slider9CounterCurr, slider9)
);

let slideDown = (pictureList, counter, counterCurr, slider) => {
  if (window[counter] === 0) {
    window[counter] = pictureList.length - 1;
    counterCurr.innerHTML = window[counter] + 1;
  } else {
    window[counter] -= 1;
    counterCurr.innerHTML = window[counter] + 1;
  }

  slider.style.backgroundImage = `url("${pictureList[window[counter]]}")`;
};

let slideUp = (pictureList, counter, counterCurr, slider) => {
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
