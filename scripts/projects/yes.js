// initializing swiper
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
