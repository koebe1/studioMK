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
// slider 6
const info6 = document.getElementById("info-6");
const infoCard6 = document.querySelector(".info-card-6");
const slider6ArrLeft = document.getElementById("slider6-arr-left");
const slider6ArrRight = document.getElementById("slider6-arr-right");
const slider6CounterCurr = document.getElementById("slider6-counter-current");
const slider6CounterEnd = document.getElementById("slider6-counter-end");
const slider6 = document.getElementById("slider-6");
window["counter6"] = 0;
// slider 7
const info7 = document.getElementById("info-7");
const infoCard7 = document.querySelector(".info-card-7");
const slider7ArrLeft = document.getElementById("slider7-arr-left");
const slider7ArrRight = document.getElementById("slider7-arr-right");
const slider7CounterCurr = document.getElementById("slider7-counter-current");
const slider7CounterEnd = document.getElementById("slider7-counter-end");
const slider7 = document.getElementById("slider-7");
window["counter7"] = 0;
// slider 8
const info8 = document.getElementById("info-8");
const infoCard8 = document.querySelector(".info-card-8");
const slider8ArrLeft = document.getElementById("slider8-arr-left");
const slider8ArrRight = document.getElementById("slider8-arr-right");
const slider8CounterCurr = document.getElementById("slider8-counter-current");
const slider8CounterEnd = document.getElementById("slider8-counter-end");
const slider8 = document.getElementById("slider-8");
window["counter8"] = 0;
// slider 9
const info9 = document.getElementById("info-9");
const infoCard9 = document.querySelector(".info-card-9");
const slider9ArrLeft = document.getElementById("slider9-arr-left");
const slider9ArrRight = document.getElementById("slider9-arr-right");
const slider9CounterCurr = document.getElementById("slider9-counter-current");
const slider9CounterEnd = document.getElementById("slider9-counter-end");
const slider9 = document.getElementById("slider-9");
window["counter9"] = 0;

//  slider pictures
const sliderList1 = [
  "../pictures/index/01_yes/yes1.jpg",
  "../pictures/index/01_yes/yes2.jpg",
  "../pictures/index/01_yes/yes3.jpg",
  "../pictures/index/01_yes/yes4.jpg",
  "../pictures/index/01_yes/yes5.jpg",
  "../pictures/index/01_yes/yes6.jpg",
  "../pictures/index/01_yes/yes7.jpg",
  "../pictures/index/01_yes/yes8.jpg",
  "../pictures/index/01_yes/yes9.jpg"
];
const sliderList2 = [
  "../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px.jpg",
  "../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px2.jpg",
  "../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px3.jpg",
  "../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px4.jpg",
  "../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px5.jpg",
  "../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px6.jpg",
  "../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px7.jpg",
  "../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px8.jpg",
  "../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px9.jpg",
  "../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px10.jpg",
  "../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px11.jpg",
  "../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px12.jpg",
  "../pictures/index/02_Pfadfinder/pfadfinder_1920x1063px13.jpg"
];
const sliderList3 = [
  "../pictures/index/03_ueberbild/ueberbild1.jpg",
  "../pictures/index/03_ueberbild/ueberbild2.jpg",
  "../pictures/index/03_ueberbild/ueberbild3.jpg",
  "../pictures/index/03_ueberbild/ueberbild4.jpg",
  "../pictures/index/03_ueberbild/ueberbild5.jpg",
  "../pictures/index/03_ueberbild/ueberbild6.jpg",
  "../pictures/index/03_ueberbild/ueberbild7.jpg"
];
const sliderList4 = [
  "../pictures/index/04_neunkubikmeter/neunkubikmeter_1920x1063px.jpg",
  "../pictures/index/04_neunkubikmeter/neunkubikmeter_1920x1063px2.jpg",
  "../pictures/index/04_neunkubikmeter/neunkubikmeter_1920x1063px3.jpg",
  "../pictures/index/04_neunkubikmeter/neunkubikmeter_1920x1063px4.jpg",
  "../pictures/index/04_neunkubikmeter/neunkubikmeter_1920x1063px5.jpg",
  "../pictures/index/04_neunkubikmeter/neunkubikmeter_1920x1063px6.jpg",
  "../pictures/index/04_neunkubikmeter/neunkubikmeter_1920x1063px7.jpg"
];
const sliderList5 = [
  "../pictures/index/05_luemo/luemo_1920x1063px.jpg",
  "../pictures/index/05_luemo/luemo_1920x1063px2.jpg",
  "../pictures/index/05_luemo/luemo_1920x1063px3.jpg",
  "../pictures/index/05_luemo/luemo_1920x1063px4.jpg",
  "../pictures/index/05_luemo/luemo_1920x1063px5.jpg",
  "../pictures/index/05_luemo/luemo_1920x1063px6.jpg",
  "../pictures/index/05_luemo/luemo_1920x1063px7.jpg"
];
const sliderList6 = [
  "../pictures/index/06_united-ip/uip1.jpg",
  "../pictures/index/06_united-ip/uip2.jpg",
  "../pictures/index/06_united-ip/uip3.jpg",
  "../pictures/index/06_united-ip/uip4.jpg"
];
const sliderList7 = [
  "../pictures/index/07_zfkk/zfkk_1920x1063px.jpg",
  "../pictures/index/07_zfkk/zfkk_1920x1063px2.jpg",
  "../pictures/index/07_zfkk/zfkk_1920x1063px3.jpg",
  "../pictures/index/07_zfkk/zfkk_1920x1063px4.jpg",
  "../pictures/index/07_zfkk/zfkk_1920x1063px5.jpg",
  "../pictures/index/07_zfkk/zfkk_1920x1063px6.jpg",
  "../pictures/index/07_zfkk/zfkk_1920x1063px7.jpg",
  "../pictures/index/07_zfkk/zfkk_1920x1063px8.jpg",
  "../pictures/index/07_zfkk/zfkk_1920x1063px9.jpg",
  "../pictures/index/07_zfkk/zfkk_1920x1063px10.jpg"
];
const sliderList8 = [
  "../pictures/index/08_gruppeB/gruppeb_1920x1063px.jpg",
  "../pictures/index/08_gruppeB/gruppeb_1920x1063px2.jpg",
  "../pictures/index/08_gruppeB/gruppeb_1920x1063px3.jpg",
  "../pictures/index/08_gruppeB/gruppeb_1920x1063px4.jpg",
  "../pictures/index/08_gruppeB/gruppeb_1920x1063px5.jpg",
  "../pictures/index/08_gruppeB/gruppeb_1920x1063px6.jpg",
  "../pictures/index/08_gruppeB/gruppeb_1920x1063px7.jpg",
  "../pictures/index/08_gruppeB/gruppeb_1920x1063px8.jpg"
];
const sliderList9 = [
  "../pictures/index/09_365/kalenderblatt_1920x1063px.jpg",
  "../pictures/index/09_365/kalenderblatt_1920x1063px2.jpg",
  "../pictures/index/09_365/kalenderblatt_1920x1063px3.jpg",
  "../pictures/index/09_365/kalenderblatt_1920x1063px4.jpg",
  "../pictures/index/09_365/kalenderblatt_1920x1063px5.jpg",
  "../pictures/index/09_365/kalenderblatt_1920x1063px6.jpg",
  "../pictures/index/09_365/kalenderblatt_1920x1063px7.jpg",
  "../pictures/index/09_365/kalenderblatt_1920x1063px8.jpg",
  "../pictures/index/09_365/kalenderblatt_1920x1063px9.jpg"
];

// info slider event listeners
info1.addEventListener("click", () => infoSlide(info1, infoCard1, slider1));
info2.addEventListener("click", () => infoSlide(info2, infoCard2, slider2));
info3.addEventListener("click", () => infoSlide(info3, infoCard3, slider3));
info4.addEventListener("click", () => infoSlide(info4, infoCard4, slider4));
info5.addEventListener("click", () => infoSlide(info5, infoCard5, slider5));
info6.addEventListener("click", () => infoSlide(info6, infoCard6, slider6));
info7.addEventListener("click", () => infoSlide(info7, infoCard7, slider7));
info8.addEventListener("click", () => infoSlide(info8, infoCard8, slider8));
info9.addEventListener("click", () => infoSlide(info9, infoCard9, slider9));

// getting length of the sliders
slider1CounterEnd.innerHTML = sliderList1.length;
slider2CounterEnd.innerHTML = sliderList2.length;
slider3CounterEnd.innerHTML = sliderList3.length;
slider4CounterEnd.innerHTML = sliderList4.length;
slider5CounterEnd.innerHTML = sliderList5.length;
slider6CounterEnd.innerHTML = sliderList6.length;
slider7CounterEnd.innerHTML = sliderList7.length;
slider8CounterEnd.innerHTML = sliderList8.length;
slider9CounterEnd.innerHTML = sliderList9.length;
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
slider6ArrLeft.addEventListener("click", () =>
  slideDown(sliderList6, "counter6", slider6CounterCurr, slider6)
);

slider6ArrRight.addEventListener("click", () =>
  slideUp(sliderList6, "counter6", slider6CounterCurr, slider6)
);
slider7ArrLeft.addEventListener("click", () =>
  slideDown(sliderList7, "counter7", slider7CounterCurr, slider7)
);

slider7ArrRight.addEventListener("click", () =>
  slideUp(sliderList7, "counter7", slider7CounterCurr, slider7)
);
slider8ArrLeft.addEventListener("click", () =>
  slideDown(sliderList8, "counter8", slider8CounterCurr, slider8)
);

slider8ArrRight.addEventListener("click", () =>
  slideUp(sliderList8, "counter8", slider8CounterCurr, slider8)
);
slider9ArrLeft.addEventListener("click", () =>
  slideDown(sliderList9, "counter9", slider9CounterCurr, slider9)
);

slider9ArrRight.addEventListener("click", () =>
  slideUp(sliderList9, "counter9", slider9CounterCurr, slider9)
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

// eventlistener for mobile
if (window.innerWidth <= 480) {
  // YES!
  slider1ArrLeft.addEventListener(
    "click",
    () => (window.location.href = "../pages/projects/yes.html")
  );
  slider1ArrRight.addEventListener(
    "click",
    () => (window.location.href = "../pages/projects/yes.html")
  );
  // PFADFINDER
  slider2ArrLeft.addEventListener(
    "click",
    () => (window.location.href = "../pages/projects/pfadfinder.html")
  );
  slider2ArrRight.addEventListener(
    "click",
    () => (window.location.href = "../pages/projects/pfadfinder.html")
  );
  // UEBERBILD
  slider3ArrLeft.addEventListener(
    "click",
    () => (window.location.href = "../pages/projects/ueberbild.html")
  );
  slider3ArrRight.addEventListener(
    "click",
    () => (window.location.href = "../pages/projects/ueberbild.html")
  );
  // NEUNKUBIKMETER
  slider4ArrLeft.addEventListener(
    "click",
    () => (window.location.href = "../pages/projects/neunkubikmeter.html")
  );
  slider4ArrRight.addEventListener(
    "click",
    () => (window.location.href = "../pages/projects/neunkubikmeter.html")
  );
  // LÜMO
  slider5ArrLeft.addEventListener(
    "click",
    () => (window.location.href = "../pages/projects/luemo.html")
  );
  slider5ArrRight.addEventListener(
    "click",
    () => (window.location.href = "../pages/projects/luemo.html")
  );
  // UNITED IP
  slider6ArrLeft.addEventListener(
    "click",
    () => (window.location.href = "../pages/projects/united-ip.html")
  );
  slider6ArrRight.addEventListener(
    "click",
    () => (window.location.href = "../pages/projects/united-ip.html")
  );
  // ZFKK
  slider7ArrLeft.addEventListener(
    "click",
    () => (window.location.href = "../pages/projects/zfkk.html")
  );
  slider7ArrRight.addEventListener(
    "click",
    () => (window.location.href = "../pages/projects/zfkk.html")
  );
  // GRUPPE B
  slider8ArrLeft.addEventListener(
    "click",
    () => (window.location.href = "../pages/projects/gruppe-b.html")
  );
  slider8ArrRight.addEventListener(
    "click",
    () => (window.location.href = "../pages/projects/gruppe-b.html")
  );
  // 365
  slider9ArrLeft.addEventListener(
    "click",
    () => (window.location.href = "../pages/projects/365.html")
  );
  slider9ArrRight.addEventListener(
    "click",
    () => (window.location.href = "../pages/projects/365.html")
  );
}

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
