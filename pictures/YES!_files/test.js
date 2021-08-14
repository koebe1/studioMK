// window.mySwipe = new Swipe(document.getElementById("swiper-1"), {
//   startSlide: 0,
//   speed: 400,
//   pagination: ".swiper-pagination",
//   draggable: false,
//   continuous: true,
//   disableScroll: false,
//   stopPropagation: false,
//   ignore: ".scroller",
//   callback: function(index, elem, dir) {},
//   transitionEnd: function(index, elem) {}
// });

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
