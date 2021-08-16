let img1 = document.getElementById("img-1");
let img2 = document.getElementById("img-2");
let img3 = document.getElementById("img-3");
let img4 = document.getElementById("img-4");
let img5 = document.getElementById("img-5");
let img6 = document.getElementById("img-6");
let img7 = document.getElementById("img-7");
let img8 = document.getElementById("img-8");
let img9 = document.getElementById("img-9");

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 200,
  threshold: 10,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  }
});

swiper.on("slideChange", function() {
  if (window.innerWidth <= 480) {
    console.log("hello");
    img1.src = "../../pictures/work/work-mobile/01_yes/yes_1.jpg";
    img2.src = "../../pictures/work/work-mobile/01_yes/yes_2.jpg";
    img3.src = "../../pictures/work/work-mobile/01_yes/yes_3.jpg";
    img4.src = "../../pictures/work/work-mobile/01_yes/yes_4.jpg";
    img5.src = "../../pictures/work/work-mobile/01_yes/yes_5.jpg";
    img6.src = "../../pictures/work/work-mobile/01_yes/yes_6.jpg";
    img7.src = "../../pictures/work/work-mobile/01_yes/yes_7.jpg";
    img8.src = "../../pictures/work/work-mobile/01_yes/yes_8.jpg";
    img9.src = "../../pictures/work/work-mobile/01_yes/yes_9.jpg";
  }
});

// set src picture to mobile version

if (window.innerWidth <= 480) {
  img1.src = "../../pictures/work/work-mobile/01_yes/yes_1.jpg";
  img2.src = "../../pictures/work/work-mobile/01_yes/yes_2.jpg";
  img3.src = "../../pictures/work/work-mobile/01_yes/yes_3.jpg";
  img4.src = "../../pictures/work/work-mobile/01_yes/yes_4.jpg";
  img5.src = "../../pictures/work/work-mobile/01_yes/yes_5.jpg";
  img6.src = "../../pictures/work/work-mobile/01_yes/yes_6.jpg";
  img7.src = "../../pictures/work/work-mobile/01_yes/yes_7.jpg";
  img8.src = "../../pictures/work/work-mobile/01_yes/yes_8.jpg";
  img9.src = "../../pictures/work/work-mobile/01_yes/yes_9.jpg";
}

window.addEventListener("resize", () => {
  if (window.innerWidth <= 480) {
    img1.src = "../../pictures/work/work-mobile/01_yes/yes_1.jpg";
    img2.src = "../../pictures/work/work-mobile/01_yes/yes_2.jpg";
    img3.src = "../../pictures/work/work-mobile/01_yes/yes_3.jpg";
    img4.src = "../../pictures/work/work-mobile/01_yes/yes_4.jpg";
    img5.src = "../../pictures/work/work-mobile/01_yes/yes_5.jpg";
    img6.src = "../../pictures/work/work-mobile/01_yes/yes_6.jpg";
    img7.src = "../../pictures/work/work-mobile/01_yes/yes_7.jpg";
    img8.src = "../../pictures/work/work-mobile/01_yes/yes_8.jpg";
    img9.src = "../../pictures/work/work-mobile/01_yes/yes_9.jpg";
  }
});
