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

let swiperSlide9 = document.getElementById("swiper-slide-9");
let swiperSlide10 = document.getElementById("swiper-slide-10");



// set src picture to mobile version
if (window.innerWidth <= 480) {
  swiperSlide9.style.display = "inline-block";
  swiperSlide10.style.display = "inline-block";
  img1.src = "../../pictures/work/work-mobile/08_gruppeb/b_1.jpg";
  img2.src = "../../pictures/work/work-mobile/08_gruppeb/b_2.jpg";
  img3.src = "../../pictures/work/work-mobile/08_gruppeb/b_3.jpg";
  img4.src = "../../pictures/work/work-mobile/08_gruppeb/b_4.jpg";
  img5.src = "../../pictures/work/work-mobile/08_gruppeb/b_5.jpg";
  img6.src = "../../pictures/work/work-mobile/08_gruppeb/b_6.jpg";
  img7.src = "../../pictures/work/work-mobile/08_gruppeb/b_7.jpg";
  img8.src = "../../pictures/work/work-mobile/08_gruppeb/b_8.jpg";
  img9.src = "../../pictures/work/work-mobile/08_gruppeb/b_9.jpg";
  img10.src = "../../pictures/work/work-mobile/08_gruppeb/b_10.jpg";
}
window.addEventListener("resize", () => {
  if (window.innerWidth <= 480) {
    swiperSlide9.style.display = "inline-block";
    swiperSlide10.style.display = "inline-bock";
    img1.src = "../../pictures/work/work-mobile/08_gruppeb/b_1.jpg";
    img2.src = "../../pictures/work/work-mobile/08_gruppeb/b_2.jpg";
    img3.src = "../../pictures/work/work-mobile/08_gruppeb/b_3.jpg";
    img4.src = "../../pictures/work/work-mobile/08_gruppeb/b_4.jpg";
    img5.src = "../../pictures/work/work-mobile/08_gruppeb/b_5.jpg";
    img6.src = "../../pictures/work/work-mobile/08_gruppeb/b_6.jpg";
    img7.src = "../../pictures/work/work-mobile/08_gruppeb/b_7.jpg";
    img8.src = "../../pictures/work/work-mobile/08_gruppeb/b_8.jpg";
    img9.src = "../../pictures/work/work-mobile/08_gruppeb/b_9.jpg";
    img10.src = "../../pictures/work/work-mobile/08_gruppeb/b_10.jpg";
  }
});

if (window.innerWidth > 480) {
  swiperSlide9.style.display = "none";
  swiperSlide10.style.display = "none";

  img1.src = "../../pictures/index/08_gruppeB/gruppeb_1920x1063px.jpg";
  img2.src = "../../pictures/index/08_gruppeB/gruppeb_1920x1063px2.jpg";
  img3.src = "../../pictures/index/08_gruppeB/gruppeb_1920x1063px3.jpg";
  img4.src = "../../pictures/index/08_gruppeB/gruppeb_1920x1063px4.jpg";
  img5.src = "../../pictures/index/08_gruppeB/gruppeb_1920x1063px5.jpg";
  img6.src = "../../pictures/index/08_gruppeB/gruppeb_1920x1063px6.jpg";
  img7.src = "../../pictures/index/08_gruppeB/gruppeb_1920x1063px7.jpg";
  img8.src = "../../pictures/index/08_gruppeB/gruppeb_1920x1063px8.jpg";
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 480) {
    swiperSlide9.style.display = "none";
    swiperSlide10.style.display = "none";
    img1.src = "../../pictures/index/08_gruppeB/gruppeb_1920x1063px.jpg";
    img2.src = "../../pictures/index/08_gruppeB/gruppeb_1920x1063px2.jpg";
    img3.src = "../../pictures/index/08_gruppeB/gruppeb_1920x1063px3.jpg";
    img4.src = "../../pictures/index/08_gruppeB/gruppeb_1920x1063px4.jpg";
    img5.src = "../../pictures/index/08_gruppeB/gruppeb_1920x1063px5.jpg";
    img6.src = "../../pictures/index/08_gruppeB/gruppeb_1920x1063px6.jpg";
    img7.src = "../../pictures/index/08_gruppeB/gruppeb_1920x1063px7.jpg";
    img8.src = "../../pictures/index/08_gruppeB/gruppeb_1920x1063px8.jpg";
  }
});
