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

// info slider event listeners
info1.addEventListener("click", () => infoSlide(info1, infoCard1, slider1));

// getting length of the sliders
slider1CounterEnd.innerHTML = sliderList1.length;

// event listener for the slider

slider1ArrLeft.addEventListener("click", () =>
  slideDown(sliderList1, "counter1", slider1CounterCurr, slider1)
);

slider1ArrRight.addEventListener("click", () =>
  slideUp(sliderList1, "counter1", slider1CounterCurr, slider1)
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
