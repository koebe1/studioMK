// project 2
const info2 = document.getElementById("info-2");
const infoCard2 = document.querySelector(".info-card-2");
const slider2ArrLeft = document.getElementById("slider2-arr-left");
const slider2ArrRight = document.getElementById("slider2-arr-right");
const slider2CounterCurr = document.getElementById("slider2-counter-current");
const slider2CounterEnd = document.getElementById("slider2-counter-end");
const slider2 = document.getElementById("slider-2");
window["counter2"] = 0;

//  slider pictures
const sliderList2 = [
  "../../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px.jpg",
  "../../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px2.jpg",
  "../../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px3.jpg",
  "../../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px4.jpg",
  "../../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px5.jpg",
  "../../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px6.jpg",
  "../../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px7.jpg",
  "../../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px8.jpg",
  "../../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px9.jpg",
  "../../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px10.jpg",
  "../../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px11.jpg",
  "../../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px12.jpg",
  "../../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px13.jpg"
];

// info slider event listeners
info2.addEventListener("click", () => infoSlide(info2, infoCard2, slider2));

// getting length of the sliders
slider2CounterEnd.innerHTML = sliderList2.length;

// event listener for the slider

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
