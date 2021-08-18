let dotsMobile = document.getElementById("dots-mobile");
let navMobile = document.getElementById("nav-mobile");
let main_ = document.getElementsByTagName("main")[0];
let footer = document.getElementsByTagName("footer")[0];
let nav_ = document.getElementsByTagName("nav")[0];
let navLinks = document.querySelector(".nav-links");
let body = document.getElementsByTagName("body")[0];
let bodyColor = body.style.backgroundColor;
let close = document.getElementById("close");
let closeContainer = document.querySelector(".close-container");

let vh_ = window.innerHeight / 100;

if (window.innerWidth <= 480) {
  dotsMobile.addEventListener("click", () => {
    body.style.backgroundColor = "#000";
    body.style.zIndex = "999";
    navLinks.style.display = "none";
    nav_.style.display = "none";
    navMobile.style.display = "flex";
    main_.style.display = "none";
    if (footer) {
      footer.style.display = "none";
    }
    nav_.style.padding = "0";
    navMobile.style.height = `${vh_ * 100}px`;
    navMobile.style.width = `100vw`;
    closeContainer.style.height = `${vh_ * 9.5}px`;
  });
  close.addEventListener("click", () => {
    navMobile.style.display = "none";
    main_.style.display = "flex";
    if (footer) {
      footer.style.display = "flex";
    }
    navLinks.style.display = "flex";
    nav_.style.display = "flex";

    nav_.style.padding = "0 2.19vw 0 2.19vw";
    body.style.backgroundColor = bodyColor;
    body.style.zIndex = "0";
  });
}
