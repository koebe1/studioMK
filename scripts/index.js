// slider 1
const info1 = document.getElementById("info-1");
const infoCard1 = document.querySelector(".info-card-1");
const slider1ArrLeft = document.getElementById("slider1-arr-left");
const slider1ArrRight = document.getElementById("slider1-arr-right");
const slider1CounterCurr = document.getElementById("slider1-counter-current");
const slider1CounterEnd = document.getElementById("slider1-counter-end");
const slider1 = document.getElementById("slider-1");
window["counter1"] = 0;

// slider 2
const info2 = document.getElementById("info-2");
const infoCard2 = document.querySelector(".info-card-2");
const slider2ArrLeft = document.getElementById("slider2-arr-left");
const slider2ArrRight = document.getElementById("slider2-arr-right");
const slider2CounterCurr = document.getElementById("slider2-counter-current");
const slider2CounterEnd = document.getElementById("slider2-counter-end");
const slider2 = document.getElementById("slider-2");
window["counter2"] = 0;

//  slider pictures
const sliderList1 = [
  "../ue_bildmaterial/dummy1.jpg",
  "../ue_bildmaterial/dummy2.jpg",
  "../ue_bildmaterial/dummy3.jpg",
  "../ue_bildmaterial/dummy4.jpg"
];
const sliderList2 = [
  "../ue_bildmaterial/dummy4.jpg",
  "../ue_bildmaterial/dummy3.jpg",
  "../ue_bildmaterial/dummy2.jpg",
  "../ue_bildmaterial/dummy1.jpg"
];

// info slider event listener
info1.addEventListener("click", () => infoSlide(info1, infoCard1, slider1));
info2.addEventListener("click", () => infoSlide(info2, infoCard2, slider2));

// getting length of the slider
slider1CounterEnd.innerHTML = sliderList1.length;
slider2CounterEnd.innerHTML = sliderList2.length;
// event listener for the slider

slider1ArrLeft.addEventListener("click", () =>
  slideDown(sliderList1, "counter1", slider1CounterCurr, slider1)
);

slider1ArrRight.addEventListener("click", () =>
  slideUp(sliderList1, "counter1", slider1CounterCurr, slider1)
);

slider2ArrLeft.addEventListener("click", () =>
  slideDown(sliderList2, "counter2", slider2CounterCurr, slider2)
);

slider2ArrRight.addEventListener("click", () =>
  slideUp(sliderList2, "counter2", slider2CounterCurr, slider2)
);

let slideDown = (pictureList, counter, counterCurr, slider) => {
  if (window[counter] === 0) {
    window[counter] = pictureList.length - 1;
    counterCurr.innerHTML = window[counter] + 1;
  } else {
    window[counter] -= 1;
    counterCurr.innerHTML = window[counter] + 1;
  }
  console.log(window[counter]);
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
