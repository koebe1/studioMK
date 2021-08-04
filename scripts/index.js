// slider -> info
const info1 = document.getElementById("info-1");
const infoCard1 = document.querySelector(".info-card-1");

let clicked = false;
let infoSlide = (button, target) => {
  if (!clicked) {
    target.style.display = "flex";
    button.innerHTML = "CLOSE";

    clicked = true;
  } else {
    target.style.display = "none";
    button.innerHTML = "INFO";
    clicked = false;
  }
};
info1.addEventListener("click", () => infoSlide(info1, infoCard1));
