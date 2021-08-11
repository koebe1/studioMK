// project 6
const info6 = document.getElementById("info-6");
const infoCard6 = document.querySelector(".info-card-6");
const slider6ArrLeft = document.getElementById("slider6-arr-left");
const slider6ArrRight = document.getElementById("slider6-arr-right");
const slider6CounterCurr = document.getElementById("slider6-counter-current");
const slider6CounterEnd = document.getElementById("slider6-counter-end");
const slider6 = document.getElementById("slider-6");
window["counter6"] = 0;

//  slider pictures
const sliderList6 = [
  "../../pictures/index/06_united-ip/uip1.jpg",
  "../../pictures/index/06_united-ip/uip2.jpg",
  "../../pictures/index/06_united-ip/uip3.jpg",
  "../../pictures/index/06_united-ip/uip4.jpg"
];

// info slider event listeners
info6.addEventListener("click", () => infoSlide(info6, infoCard6, slider6));

// getting length of the sliders
slider6CounterEnd.innerHTML = sliderList6.length;

// event listener for the slider

slider6ArrLeft.addEventListener("click", () =>
  slideDown(sliderList6, "counter6", slider6CounterCurr, slider6)
);

slider6ArrRight.addEventListener("click", () =>
  slideUp(sliderList6, "counter6", slider6CounterCurr, slider6)
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
