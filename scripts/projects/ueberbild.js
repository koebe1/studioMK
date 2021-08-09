// project 3
const info3 = document.getElementById("info-3");
const infoCard3 = document.querySelector(".info-card-3");
const slider3ArrLeft = document.getElementById("slider3-arr-left");
const slider3ArrRight = document.getElementById("slider3-arr-right");
const slider3CounterCurr = document.getElementById("slider3-counter-current");
const slider3CounterEnd = document.getElementById("slider3-counter-end");
const slider3 = document.getElementById("slider-3");
window["counter3"] = 0;

//  slider pictures
const sliderList3 = [
  "../../pictures/index/03_ueberbild/ueberbild1.jpg",
  "../../pictures/index/03_ueberbild/ueberbild2.jpg",
  "../../pictures/index/03_ueberbild/ueberbild3.jpg",
  "../../pictures/index/03_ueberbild/ueberbild4.jpg",
  "../../pictures/index/03_ueberbild/ueberbild5.jpg",
  "../../pictures/index/03_ueberbild/ueberbild6.jpg",
  "../../pictures/index/03_ueberbild/ueberbild7.jpg"
];

// info slider event listeners
info3.addEventListener("click", () => infoSlide(info3, infoCard3, slider3));

// getting length of the sliders
slider3CounterEnd.innerHTML = sliderList3.length;

// event listener for the slider

slider3ArrLeft.addEventListener("click", () =>
  slideDown(sliderList3, "counter3", slider3CounterCurr, slider3)
);

slider3ArrRight.addEventListener("click", () =>
  slideUp(sliderList3, "counter3", slider3CounterCurr, slider3)
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
