// project 7
const info7 = document.getElementById("info-7");
const infoCard7 = document.querySelector(".info-card-7");
const slider7ArrLeft = document.getElementById("slider7-arr-left");
const slider7ArrRight = document.getElementById("slider7-arr-right");
const slider7CounterCurr = document.getElementById("slider7-counter-current");
const slider7CounterEnd = document.getElementById("slider7-counter-end");
const slider7 = document.getElementById("slider-7");
window["counter7"] = 0;

//  slider pictures
const sliderList7 = [
  "../../pictures/index/07_zfkk/zfkk_1920x1063px.jpg",
  "../../pictures/index/07_zfkk/zfkk_1920x1063px2.jpg",
  "../../pictures/index/07_zfkk/zfkk_1920x1063px3.jpg",
  "../../pictures/index/07_zfkk/zfkk_1920x1063px4.jpg",
  "../../pictures/index/07_zfkk/zfkk_1920x1063px5.jpg",
  "../../pictures/index/07_zfkk/zfkk_1920x1063px6.jpg",
  "../../pictures/index/07_zfkk/zfkk_1920x1063px7.jpg",
  "../../pictures/index/07_zfkk/zfkk_1920x1063px8.jpg",
  "../../pictures/index/07_zfkk/zfkk_1920x1063px9.jpg",
  "../../pictures/index/07_zfkk/zfkk_1920x1063px10.jpg"
];
// info slider event listeners
info7.addEventListener("click", () => infoSlide(info7, infoCard7, slider7));

// getting length of the sliders
slider7CounterEnd.innerHTML = sliderList7.length;

// event listener for the slider

slider7ArrLeft.addEventListener("click", () =>
  slideDown(sliderList7, "counter7", slider7CounterCurr, slider7)
);

slider7ArrRight.addEventListener("click", () =>
  slideUp(sliderList7, "counter7", slider7CounterCurr, slider7)
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
