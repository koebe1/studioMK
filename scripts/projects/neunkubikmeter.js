// project 4
const info4 = document.getElementById("info-4");
const infoCard4 = document.querySelector(".info-card-4");
const slider4ArrLeft = document.getElementById("slider4-arr-left");
const slider4ArrRight = document.getElementById("slider4-arr-right");
const slider4CounterCurr = document.getElementById("slider4-counter-current");
const slider4CounterEnd = document.getElementById("slider4-counter-end");
const slider4 = document.getElementById("slider-4");
window["counter4"] = 0;

//  slider pictures
const sliderList4 = [
  "../../pictures/index/04_neunkubikmeter/neunkubikmeter_1920x1063px.jpg",
  "../../pictures/index/04_neunkubikmeter/neunkubikmeter_1920x1063px2.jpg",
  "../../pictures/index/04_neunkubikmeter/neunkubikmeter_1920x1063px3.jpg",
  "../../pictures/index/04_neunkubikmeter/neunkubikmeter_1920x1063px4.jpg",
  "../../pictures/index/04_neunkubikmeter/neunkubikmeter_1920x1063px5.jpg",
  "../../pictures/index/04_neunkubikmeter/neunkubikmeter_1920x1063px6.jpg",
  "../../pictures/index/04_neunkubikmeter/neunkubikmeter_1920x1063px7.jpg"
];

// info slider event listeners
info4.addEventListener("click", () => infoSlide(info4, infoCard4, slider4));

// getting length of the sliders
slider4CounterEnd.innerHTML = sliderList4.length;

// event listener for the slider

slider4ArrLeft.addEventListener("click", () =>
  slideDown(sliderList4, "counter4", slider4CounterCurr, slider4)
);

slider4ArrRight.addEventListener("click", () =>
  slideUp(sliderList4, "counter4", slider4CounterCurr, slider4)
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
