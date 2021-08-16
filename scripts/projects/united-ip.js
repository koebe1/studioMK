let img1 = document.getElementById("img-1");
let img2 = document.getElementById("img-2");
let img3 = document.getElementById("img-3");
let img4 = document.getElementById("img-4");
let img5 = document.getElementById("img-5");

let swiperSlide5 = document.getElementById("swiper-slide-5");

// set src picture to mobile version

if (window.innerWidth <= 480) {
  swiperSlide5.style.display = "inline-block";

  img1.src = "../../pictures/work/work-mobile/06_uip/uip_1.jpg";
  img2.src = "../../pictures/work/work-mobile/06_uip/uip_2.jpg";
  img3.src = "../../pictures/work/work-mobile/06_uip/uip_3.jpg";
  img4.src = "../../pictures/work/work-mobile/06_uip/uip_4.jpg";
  img5.src = "../../pictures/work/work-mobile/06_uip/uip_5.jpg";
}
window.addEventListener("resize", () => {
  if (window.innerWidth <= 480) {
    swiperSlide5.style.display = "inline-block";

    img1.src = "../../pictures/work/work-mobile/06_uip/uip_1.jpg";
    img2.src = "../../pictures/work/work-mobile/06_uip/uip_2.jpg";
    img3.src = "../../pictures/work/work-mobile/06_uip/uip_3.jpg";
    img4.src = "../../pictures/work/work-mobile/06_uip/uip_4.jpg";
    img5.src = "../../pictures/work/work-mobile/06_uip/uip_5.jpg";
  }
});

if (window.innerWidth > 480) {
  swiperSlide5.style.display = "none";

  img1.src = "../../pictures/index/06_united-ip/uip1.jpg";
  img2.src = "../../pictures/index/06_united-ip/uip2.jpg";
  img3.src = "../../pictures/index/06_united-ip/uip3.jpg";
  img4.src = "../../pictures/index/06_united-ip/uip4.jpg";
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 480) {
    swiperSlide5.style.display = "none";

    img1.src = "../../pictures/index/06_united-ip/uip1.jpg";
    img2.src = "../../pictures/index/06_united-ip/uip2.jpg";
    img3.src = "../../pictures/index/06_united-ip/uip3.jpg";
    img4.src = "../../pictures/index/06_united-ip/uip4.jpg";
  }
});
