// project 8
const info8 = document.getElementById("info-8");
const infoCard8 = document.querySelector(".info-card-8");
const slider8ArrLeft = document.getElementById("slider8-arr-left");
const slider8ArrRight = document.getElementById("slider8-arr-right");
const slider8CounterCurr = document.getElementById("slider8-counter-current");
const slider8CounterEnd = document.getElementById("slider8-counter-end");
const slider8 = document.getElementById("slider-8");
window["counter8"] = 0;

//  slider pictures
const sliderList8 = [
  "../../pictures/index/08_gruppeB/gruppeb_1920x1063px.jpg",
  "../../pictures/index/08_gruppeB/gruppeb_1920x1063px2.jpg",
  "../../pictures/index/08_gruppeB/gruppeb_1920x1063px3.jpg",
  "../../pictures/index/08_gruppeB/gruppeb_1920x1063px4.jpg",
  "../../pictures/index/08_gruppeB/gruppeb_1920x1063px5.jpg",
  "../../pictures/index/08_gruppeB/gruppeb_1920x1063px6.jpg",
  "../../pictures/index/08_gruppeB/gruppeb_1920x1063px7.jpg",
  "../../pictures/index/08_gruppeB/gruppeb_1920x1063px8.jpg"
];
// info slider event listeners
info8.addEventListener("click", () => infoSlide(info8, infoCard8, slider8));

// getting length of the sliders
slider8CounterEnd.innerHTML = sliderList8.length;

// event listener for the slider

slider8ArrLeft.addEventListener("click", () =>
  slideDown(sliderList8, "counter8", slider8CounterCurr, slider8)
);

slider8ArrRight.addEventListener("click", () =>
  slideUp(sliderList8, "counter8", slider8CounterCurr, slider8)
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
