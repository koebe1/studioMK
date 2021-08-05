// slider -> info
const info1 = document.getElementById("info-1");
const infoCard1 = document.querySelector(".info-card-1");
const slider1ArrLeft = document.getElementById("slider1-arr-left");
const slider1ArrRight = document.getElementById("slider1-arr-right");
const slider1CounterCurr = document.getElementById("slider1-counter-current");
const slider1CounterEnd = document.getElementById("slider1-counter-end");
const slider1 = document.getElementById("slider-1");

const sliderList1 = [
  "../ue_bildmaterial/dummy1.jpg",
  "../ue_bildmaterial/dummy2.jpg",
  "../ue_bildmaterial/dummy3.jpg",
  "../ue_bildmaterial/dummy4.jpg"
];
// slider function
let counter = 0;

const main = () => {
  slider1CounterEnd.innerHTML = sliderList1.length;
  info1.addEventListener("click", () => infoSlide(info1, infoCard1));

  slider1ArrLeft.addEventListener("click", () => slideDown(sliderList1));
  slider1ArrRight.addEventListener("click", () => slideUp(sliderList1));
};

let slideDown = pictureList => {
  if (counter === 0) {
    counter = pictureList.length - 1;
    slider1CounterCurr.innerHTML = counter + 1;
  } else {
    counter -= 1;
    slider1CounterCurr.innerHTML = counter + 1;
  }
  slider1.style.backgroundImage = `url("${pictureList[counter]}")`;
};
let slideUp = pictureList => {
  if (counter === pictureList.length - 1) {
    counter = 0;
    slider1CounterCurr.innerHTML = counter + 1;
  } else {
    counter += 1;
    slider1CounterCurr.innerHTML = counter + 1;
  }
  slider1.style.backgroundImage = `url("${pictureList[counter]}")`;
};

// function to show the info box of the slider
let clicked = false;
let infoSlide = (button, target) => {
  if (!clicked) {
    target.style.display = "flex";
    slider1.style.opacity = "0";
    button.innerHTML = "CLOSE";

    clicked = true;
  } else {
    slider1.style.opacity = "1";
    target.style.display = "none";
    button.innerHTML = "INFO";
    clicked = false;
  }
};

main();
