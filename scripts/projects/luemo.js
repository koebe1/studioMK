// project 5
const info5 = document.getElementById("info-5");
const infoCard5 = document.querySelector(".info-card-5");
const slider5ArrLeft = document.getElementById("slider5-arr-left");
const slider5ArrRight = document.getElementById("slider5-arr-right");
const slider5CounterCurr = document.getElementById("slider5-counter-current");
const slider5CounterEnd = document.getElementById("slider5-counter-end");
const slider5 = document.getElementById("slider-5");
window["counter5"] = 0;

//  slider pictures
const sliderList5 = [
  "../../pictures/index/05_luemo/luemo_1920x1063px.jpg",
  "../../pictures/index/05_luemo/luemo_1920x1063px2.jpg",
  "../../pictures/index/05_luemo/luemo_1920x1063px3.jpg",
  "../../pictures/index/05_luemo/luemo_1920x1063px4.jpg",
  "../../pictures/index/05_luemo/luemo_1920x1063px5.jpg",
  "../../pictures/index/05_luemo/luemo_1920x1063px6.jpg",
  "../../pictures/index/05_luemo/luemo_1920x1063px7.jpg"
];

// info slider event listeners
info5.addEventListener("click", () => infoSlide(info5, infoCard5, slider5));

// getting length of the sliders
slider5CounterEnd.innerHTML = sliderList5.length;

// event listener for the slider

slider5ArrLeft.addEventListener("click", () =>
  slideDown(sliderList5, "counter5", slider5CounterCurr, slider5)
);

slider5ArrRight.addEventListener("click", () =>
  slideUp(sliderList5, "counter5", slider5CounterCurr, slider5)
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
