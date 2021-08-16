let img1 = document.getElementById("img-1");
let img2 = document.getElementById("img-2");
let img3 = document.getElementById("img-3");
let img4 = document.getElementById("img-4");
let img5 = document.getElementById("img-5");
let img6 = document.getElementById("img-6");
let img7 = document.getElementById("img-7");
let img8 = document.getElementById("img-8");
let img9 = document.getElementById("img-9");
let img10 = document.getElementById("img-10");
let img11 = document.getElementById("img-11");

let swiperSlide11 = document.getElementById("swiper-slide-11");

// set src picture to mobile version

if (window.innerWidth <= 480) {
  swiperSlide11.style.display = "inline-block";

  img1.src = "../../pictures/work/work-mobile/04_neunkubikmeter/neun_1.jpg";
  img2.src = "../../pictures/work/work-mobile/04_neunkubikmeter/neun_2.jpg";
  img3.src = "../../pictures/work/work-mobile/04_neunkubikmeter/neun_3.jpg";
  img4.src = "../../pictures/work/work-mobile/04_neunkubikmeter/neun_4.jpg";
  img5.src = "../../pictures/work/work-mobile/04_neunkubikmeter/neun_5.jpg";
  img6.src = "../../pictures/work/work-mobile/04_neunkubikmeter/neun_6.jpg";
  img7.src = "../../pictures/work/work-mobile/04_neunkubikmeter/neun_7.jpg";
  img8.src = "../../pictures/work/work-mobile/04_neunkubikmeter/neun_8.jpg";
  img9.src = "../../pictures/work/work-mobile/04_neunkubikmeter/neun_9.jpg";
  img10.src = "../../pictures/work/work-mobile/04_neunkubikmeter/neun_10.jpg";
  img11.src = "../../pictures/work/work-mobile/04_neunkubikmeter/neun_11.jpg";
}

if (window.innerWidth > 480) {
  swiperSlide11.style.display = "none";

  img1.src = "../../pictures/index/04_neunkubikmeter/01_neunkubikmeter.jpg";
  img2.src = "../../pictures/index/04_neunkubikmeter/02_neunkubikmeter.jpg";
  img3.src = "../../pictures/index/04_neunkubikmeter/03_neunkubikmeter.jpg";
  img4.src = "../../pictures/index/04_neunkubikmeter/04_neunkubikmeter.jpg";
  img5.src = "../../pictures/index/04_neunkubikmeter/05_neunkubikmeter.jpg";
  img6.src = "../../pictures/index/04_neunkubikmeter/06_neunkubikmeter.jpg";
  img7.src = "../../pictures/index/04_neunkubikmeter/07_neunkubikmeter.jpg";
  img8.src = "../../pictures/index/04_neunkubikmeter/08_neunkubikmeter.jpg";
  img9.src = "../../pictures/index/04_neunkubikmeter/09_neunkubikmeter.jpg";
  img10.src = "../../pictures/index/04_neunkubikmeter/10_neunkubikmeter.jpg";
}

window.addEventListener("resize", () => {
  if (window.innerWidth <= 480) {
    swiperSlide11.style.display = "inline-block";

    img1.src = "../../pictures/work/work-mobile/04_neunkubikmeter/neun_1.jpg";
    img2.src = "../../pictures/work/work-mobile/04_neunkubikmeter/neun_2.jpg";
    img3.src = "../../pictures/work/work-mobile/04_neunkubikmeter/neun_3.jpg";
    img4.src = "../../pictures/work/work-mobile/04_neunkubikmeter/neun_4.jpg";
    img5.src = "../../pictures/work/work-mobile/04_neunkubikmeter/neun_5.jpg";
    img6.src = "../../pictures/work/work-mobile/04_neunkubikmeter/neun_6.jpg";
    img7.src = "../../pictures/work/work-mobile/04_neunkubikmeter/neun_7.jpg";
    img8.src = "../../pictures/work/work-mobile/04_neunkubikmeter/neun_8.jpg";
    img9.src = "../../pictures/work/work-mobile/04_neunkubikmeter/neun_9.jpg";
    img10.src = "../../pictures/work/work-mobile/04_neunkubikmeter/neun_10.jpg";
    img11.src = "../../pictures/work/work-mobile/04_neunkubikmeter/neun_11.jpg";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 480) {
    swiperSlide11.style.display = "none";

    img1.src = "../../pictures/index/04_neunkubikmeter/01_neunkubikmeter.jpg";
    img2.src = "../../pictures/index/04_neunkubikmeter/02_neunkubikmeter.jpg";
    img3.src = "../../pictures/index/04_neunkubikmeter/03_neunkubikmeter.jpg";
    img4.src = "../../pictures/index/04_neunkubikmeter/04_neunkubikmeter.jpg";
    img5.src = "../../pictures/index/04_neunkubikmeter/05_neunkubikmeter.jpg";
    img6.src = "../../pictures/index/04_neunkubikmeter/06_neunkubikmeter.jpg";
    img7.src = "../../pictures/index/04_neunkubikmeter/07_neunkubikmeter.jpg";
    img8.src = "../../pictures/index/04_neunkubikmeter/08_neunkubikmeter.jpg";
    img9.src = "../../pictures/index/04_neunkubikmeter/09_neunkubikmeter.jpg";
    img10.src = "../../pictures/index/04_neunkubikmeter/10_neunkubikmeter.jpg";
  }
});
