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

// slider 3
const info3 = document.getElementById("info-3");
const infoCard3 = document.querySelector(".info-card-3");
const slider3ArrLeft = document.getElementById("slider3-arr-left");
const slider3ArrRight = document.getElementById("slider3-arr-right");
const slider3CounterCurr = document.getElementById("slider3-counter-current");
const slider3CounterEnd = document.getElementById("slider3-counter-end");
const slider3 = document.getElementById("slider-3");
window["counter3"] = 0;

// slider 4
const info4 = document.getElementById("info-4");
const infoCard4 = document.querySelector(".info-card-4");
const slider4ArrLeft = document.getElementById("slider4-arr-left");
const slider4ArrRight = document.getElementById("slider4-arr-right");
const slider4CounterCurr = document.getElementById("slider4-counter-current");
const slider4CounterEnd = document.getElementById("slider4-counter-end");
const slider4 = document.getElementById("slider-4");
window["counter4"] = 0;
// slider 5
const info5 = document.getElementById("info-5");
const infoCard5 = document.querySelector(".info-card-5");
const slider5ArrLeft = document.getElementById("slider5-arr-left");
const slider5ArrRight = document.getElementById("slider5-arr-right");
const slider5CounterCurr = document.getElementById("slider5-counter-current");
const slider5CounterEnd = document.getElementById("slider5-counter-end");
const slider5 = document.getElementById("slider-5");
window["counter5"] = 0;

//  slider pictures
const sliderList1 = [
  "pictures/index/1_yes_1920x1063px.jpg",
  "pictures/index/01_yes/yes1.jpg",
  "pictures/index/01_yes/yes2.jpg",
  "pictures/index/01_yes/yes3.jpg",
  "pictures/index/01_yes/yes4.jpg",
  "pictures/index/01_yes/yes5.jpg",
  "pictures/index/01_yes/yes6.jpg",
  "pictures/index/01_yes/yes7.jpg",
  "pictures/index/01_yes/yes8.jpg",
  "pictures/index/01_yes/yes9.jpg"
];
const sliderList2 = [
  "pictures/index/2_pfadis_1920x1063px.jpg",
  "pictures/index/02_Pfadfinder/pfadfinder_1920x1063px2.jpg",
  "pictures/index/02_Pfadfinder/pfadfinder_1920x1063px3.jpg",
  "pictures/index/02_Pfadfinder/pfadfinder_1920x1063px4.jpg",
  "pictures/index/02_Pfadfinder/pfadfinder_1920x1063px5.jpg",
  "pictures/index/02_Pfadfinder/pfadfinder_1920x1063px6.jpg",
  "pictures/index/02_Pfadfinder/pfadfinder_1920x1063px7.jpg",
  "pictures/index/02_Pfadfinder/pfadfinder_1920x1063px8.jpg",
  "pictures/index/02_Pfadfinder/pfadfinder_1920x1063px9.jpg",
  "pictures/index/02_Pfadfinder/pfadfinder_1920x1063px10.jpg",
  "pictures/index/02_Pfadfinder/pfadfinder_1920x1063px11.jpg",
  "pictures/index/02_Pfadfinder/pfadfinder_1920x1063px12.jpg",
  "pictures/index/02_Pfadfinder/pfadfinder_1920x1063px13.jpg"
];
const sliderList3 = [
  "pictures/index/3_ueberbild_1920x1063px6.jpg",
  "pictures/index/03_ueberbild/ueberbild1.jpg",
  "pictures/index/03_ueberbild/ueberbild2.jpg",
  "pictures/index/03_ueberbild/ueberbild3.jpg",
  "pictures/index/03_ueberbild/ueberbild4.jpg",
  "pictures/index/03_ueberbild/ueberbild5.jpg",
  "pictures/index/03_ueberbild/ueberbild6.jpg",
  "pictures/index/03_ueberbild/ueberbild7.jpg"
];
const sliderList4 = [
  "pictures/index/4_neunkubikmeter_1920x1063px6.jpg",
  "pictures/index/04_neunkubikmeter/01_neunkubikmeter.jpg",
  "pictures/index/04_neunkubikmeter/02_neunkubikmeter.jpg",
  "pictures/index/04_neunkubikmeter/03_neunkubikmeter.jpg",
  "pictures/index/04_neunkubikmeter/04_neunkubikmeter.jpg",
  "pictures/index/04_neunkubikmeter/05_neunkubikmeter.jpg",
  "pictures/index/04_neunkubikmeter/06_neunkubikmeter.jpg",
  "pictures/index/04_neunkubikmeter/07_neunkubikmeter.jpg",
  "pictures/index/04_neunkubikmeter/08_neunkubikmeter.jpg",
  "pictures/index/04_neunkubikmeter/09_neunkubikmeter.jpg",
  "pictures/index/04_neunkubikmeter/10_neunkubikmeter.jpg"
];
const sliderList5 = [
  "pictures/index/5_luemo_1920x1063px.jpg",
  "pictures/index/05_luemo/luemo_1920x1063px.jpg",
  "pictures/index/05_luemo/luemo_1920x1063px2.jpg",
  "pictures/index/05_luemo/luemo_1920x1063px3.jpg",
  "pictures/index/05_luemo/luemo_1920x1063px4.jpg",
  "pictures/index/05_luemo/luemo_1920x1063px5.jpg",
  "pictures/index/05_luemo/luemo_1920x1063px6.jpg",
  "pictures/index/05_luemo/luemo_1920x1063px7.jpg"
];

// info slider event listeners
info1.addEventListener("click", () => infoSlide(info1, infoCard1, slider1));
info2.addEventListener("click", () => infoSlide(info2, infoCard2, slider2));
info3.addEventListener("click", () => infoSlide(info3, infoCard3, slider3));
info4.addEventListener("click", () => infoSlide(info4, infoCard4, slider4));
info5.addEventListener("click", () => infoSlide(info5, infoCard5, slider5));

if (window.innerWidth > 480) {
  // getting length of the sliders
  slider1CounterEnd.innerHTML = sliderList1.length;
  slider2CounterEnd.innerHTML = sliderList2.length;
  slider3CounterEnd.innerHTML = sliderList3.length;
  slider4CounterEnd.innerHTML = sliderList4.length;
  slider5CounterEnd.innerHTML = sliderList5.length;

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

  slider3ArrLeft.addEventListener("click", () =>
    slideDown(sliderList3, "counter3", slider3CounterCurr, slider3)
  );

  slider3ArrRight.addEventListener("click", () =>
    slideUp(sliderList3, "counter3", slider3CounterCurr, slider3)
  );
  slider4ArrLeft.addEventListener("click", () =>
    slideDown(sliderList4, "counter4", slider4CounterCurr, slider4)
  );

  slider4ArrRight.addEventListener("click", () =>
    slideUp(sliderList4, "counter4", slider4CounterCurr, slider4)
  );
  slider5ArrLeft.addEventListener("click", () =>
    slideDown(sliderList5, "counter5", slider5CounterCurr, slider5)
  );

  slider5ArrRight.addEventListener("click", () =>
    slideUp(sliderList5, "counter5", slider5CounterCurr, slider5)
  );
}
// eventlistener for mobile
else if (window.innerWidth <= 480) {
  // YES!
  slider1ArrLeft.addEventListener(
    "click",
    () => (window.location.href = "pages/projects/yes.html")
  );
  slider1ArrRight.addEventListener(
    "click",
    () => (window.location.href = "pages/projects/yes.html")
  );
  // PFADFINDER
  slider2ArrLeft.addEventListener(
    "click",
    () => (window.location.href = "pages/projects/pfadfinder.html")
  );
  slider2ArrRight.addEventListener(
    "click",
    () => (window.location.href = "pages/projects/pfadfinder.html")
  );
  // UEBERBILD
  slider3ArrLeft.addEventListener(
    "click",
    () => (window.location.href = "pages/projects/ueberbild.html")
  );
  slider3ArrRight.addEventListener(
    "click",
    () => (window.location.href = "pages/projects/ueberbild.html")
  );
  // NEUNKUBIKMETER
  slider4ArrLeft.addEventListener(
    "click",
    () => (window.location.href = "pages/projects/neunkubikmeter.html")
  );
  slider4ArrRight.addEventListener(
    "click",
    () => (window.location.href = "pages/projects/neunkubikmeter.html")
  );
  // LÜMO
  slider5ArrLeft.addEventListener(
    "click",
    () => (window.location.href = "pages/projects/luemo.html")
  );
  slider5ArrRight.addEventListener(
    "click",
    () => (window.location.href = "pages/projects/luemo.html")
  );
}

// slide functions
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

let mainText = document.querySelector(".main-text");
let sliderSubs = document.querySelectorAll(".slider-sub");

// fix mobile bugs with viewheight
if (window.innerWidth <= 480) {
  let vh = window.innerHeight / 100;

  // mainText.style.padding = `${vh * 8.5}px 0 ${vh * 8.5}px 0`;
  // mainText.style.marginTop = `${vh * 9.5}px`;
}

// on resize
window.addEventListener("resize", () => {
  if (window.innerWidth <= 480) {
    let vh = window.innerHeight / 100;
    // mainText.style.padding = `${vh * 8.5}px 0 ${vh * 8.5}px 0`;
    // mainText.style.marginTop = `${vh * 9.5}px`;
  }
});
