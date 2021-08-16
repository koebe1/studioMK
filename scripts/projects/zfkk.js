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
let img12 = document.getElementById("img-12");
let img13 = document.getElementById("img-13");
let img14 = document.getElementById("img-14");

let swiperSlide11 = document.getElementById("swiper-slide-11");
let swiperSlide12 = document.getElementById("swiper-slide-12");
let swiperSlide13 = document.getElementById("swiper-slide-13");
let swiperSlide14 = document.getElementById("swiper-slide-14");

// set src picture to mobile version

if (window.innerWidth <= 480) {
  swiperSlide11.style.display = "inline-block";
  swiperSlide12.style.display = "inline-block";
  swiperSlide13.style.display = "inline-block";
  swiperSlide14.style.display = "inline-block";
  img1.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_1.jpg";
  img2.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_2.jpg";
  img3.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_3.jpg";
  img4.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_4.jpg";
  img5.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_5.jpg";
  img6.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_6.jpg";
  img7.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_7.jpg";
  img8.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_8.jpg";
  img9.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_9.jpg";
  img10.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_10.jpg";
  img11.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_11.jpg";
  img12.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_12.jpg";
  img13.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_13.jpg";
  img14.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_14.jpg";
}

if (window.innerWidth > 480) {
  swiperSlide11.style.display = "none";
  swiperSlide12.style.display = "none";
  swiperSlide13.style.display = "none";
  swiperSlide14.style.display = "none";

  img1.src = "../../pictures/index/07_zfkk/zfkk_1920x1063px.jpg";
  img2.src = "../../pictures/index/07_zfkk/zfkk_1920x1063px2.jpg";
  img3.src = "../../pictures/index/07_zfkk/zfkk_1920x1063px3.jpg";
  img4.src = "../../pictures/index/07_zfkk/zfkk_1920x1063px4.jpg";
  img5.src = "../../pictures/index/07_zfkk/zfkk_1920x1063px5.jpg";
  img6.src = "../../pictures/index/07_zfkk/zfkk_1920x1063px6.jpg";
  img7.src = "../../pictures/index/07_zfkk/zfkk_1920x1063px7.jpg";
  img8.src = "../../pictures/index/07_zfkk/zfkk_1920x1063px8.jpg";
  img9.src = "../../pictures/index/07_zfkk/zfkk_1920x1063px9.jpg";
  img10.src = "../../pictures/index/07_zfkk/zfkk_1920x1063px10.jpg";
}

window.addEventListener("resize", () => {
  if (window.innerWidth <= 480) {
    swiperSlide11.style.display = "inline-block";
    swiperSlide12.style.display = "inline-block";
    swiperSlide13.style.display = "inline-block";
    swiperSlide14.style.display = "inline-block";
    img1.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_1.jpg";
    img2.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_2.jpg";
    img3.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_3.jpg";
    img4.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_4.jpg";
    img5.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_5.jpg";
    img6.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_6.jpg";
    img7.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_7.jpg";
    img8.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_8.jpg";
    img9.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_9.jpg";
    img10.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_10.jpg";
    img11.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_11.jpg";
    img12.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_12.jpg";
    img13.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_13.jpg";
    img14.src = "../../pictures/work/work-mobile/07_zfkk/zfkk_14.jpg";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 480) {
    swiperSlide11.style.display = "none";
    swiperSlide12.style.display = "none";
    swiperSlide13.style.display = "none";
    swiperSlide14.style.display = "none";
    img1.src = "../../pictures/index/07_zfkk/zfkk_1920x1063px.jpg";
    img2.src = "../../pictures/index/07_zfkk/zfkk_1920x1063px2.jpg";
    img3.src = "../../pictures/index/07_zfkk/zfkk_1920x1063px3.jpg";
    img4.src = "../../pictures/index/07_zfkk/zfkk_1920x1063px4.jpg";
    img5.src = "../../pictures/index/07_zfkk/zfkk_1920x1063px5.jpg";
    img6.src = "../../pictures/index/07_zfkk/zfkk_1920x1063px6.jpg";
    img7.src = "../../pictures/index/07_zfkk/zfkk_1920x1063px7.jpg";
    img8.src = "../../pictures/index/07_zfkk/zfkk_1920x1063px8.jpg";
    img9.src = "../../pictures/index/07_zfkk/zfkk_1920x1063px9.jpg";
    img10.src = "../../pictures/index/07_zfkk/zfkk_1920x1063px10.jpg";
  }
});
