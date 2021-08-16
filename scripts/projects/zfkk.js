let swipeImg = document.querySelectorAll(".swipe-img");
let imgList = [
  "yes_01.jpg",
  "yes_02.jpg",
  "yes_03.jpg",
  "yes_04.jpg",
  "yes_05.jpg",
  "yes_06.jpg",
  "yes_07.jpg",
  "yes_08.jpg",
  "yes_09.jpg"
];

// console.log(swipeImg[0]);

if (window.innerWidth <= 480) {
  for (img of swipeImg) {
    console.log(img);
  }
}

window.addEventListener("resize", () => {
  if (window.innerWidth <= 480) {
    for (img of swipeImg) {
      img.src = `../../pictures/work/work-mobile/01_yes/yes_${counter}.jpg`;
    }
  }
});
