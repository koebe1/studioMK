// initializing swiper
// const swiper = new Swiper(".swiper-container", {
//   // Optional parameters
//   direction: "horizontal",
//   loop: true,
//   speed: 200,
//   threshold: 10,

//   pagination: {
//     el: ".swiper-pagination",
//     type: "fraction"
//   }
// });

if (window.innerWidth > 480) {
  // function for custom cursor
  let swiperContainer = document.querySelector(".swiper-container");
  swiperContainer.addEventListener("mousemove", function(e) {
    let width = swiperContainer.clientWidth;
    let x = e.pageX - this.offsetLeft;

    swiperContainer.classList.toggle(
      "arrow-left",
      //  calculate on which side of the window the element is
      x / width < 0.5,
      x / width > 0.5
    );

    swiperContainer.classList.toggle(
      "arrow-right",
      x / width >= 0.5,
      x / width < 0.5
    );
  });

  // function for slide change on click
  swiperContainer.addEventListener("click", () => {
    // click left side
    if (swiperContainer.classList.contains("arrow-left")) {
      swiper.slidePrev();
    } else if (swiperContainer.classList.contains("arrow-right")) {
      swiper.slideNext();
    }
  });
}

// info-card
let infoContainer = document.querySelector(".info-container");
let info = document.getElementById("slider-sub-info");
info.addEventListener("click", () => {
  if (infoContainer.classList.contains("info-container-visible")) {
    infoContainer.classList.add("info-container-hidden");
    infoContainer.classList.remove("info-container-visible");
    info.innerHTML = "INFO";
  } else {
    infoContainer.classList.add("info-container-visible");
    infoContainer.classList.remove("info-container-hidden");
    info.innerHTML = "CLOSE";
  }
});

// fix mobile problems with viewheight
let nav = document.getElementsByTagName("nav")[0];
let main = document.getElementsByTagName("main")[0];
let swiperContainer = document.querySelector(".swiper-container");
let sliderSub = document.querySelector(".slider-sub");
let vh = window.innerHeight / 100;

swiperContainer.style.height = `${vh * 81}px`;
infoContainer.style.height = `${vh * 81}px`;
nav.style.height = `${vh * 9.5}px`;
sliderSub.style.height = `${vh * 9.5}px`;
main.style.margin = "9.5vh 0 0 0";

// on resize
window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  // set swiper-container height to 81vh
  swiperContainer.style.height = `${vh * 81}px`;
  infoContainer.style.height = `${vh * 81}px`;
  nav.style.height = `${vh * 9.5}px`;
  sliderSub.style.height = `${vh * 9.5}px`;
  main.style.margin = "9.5vh 0 0 0";
});

