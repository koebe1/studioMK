let dotsMobile = document.getElementById("dots-mobile");
let navMobile = document.getElementById("nav-mobile");
let main = document.getElementsByTagName("main")[0];
let footer = document.getElementsByTagName("footer")[0];
let nav = document.getElementsByTagName("nav")[0];
let navLinks = document.querySelector(".nav-links");
let body = document.getElementsByTagName("body")[0];
let close = document.getElementById("close");
let closeContainer = document.querySelector(".close-container");

let vh = window.innerHeight / 100;

if (window.innerWidth <= 480) {
  navMobile.style.height = `${vh * 100}px`;
  navMobile.style.width = `100vw`;
  closeContainer.style.height = `${vh * 9.5}px`;

  dotsMobile.addEventListener("click", () => {
    body.style.backgroundColor = "#000";
    body.style.zIndex = "999";
    navLinks.style.display = "none";
    nav.style.display = "none";
    navMobile.style.display = "flex";
    main.style.display = "none";
    footer.style.display = "none";
    nav.style.padding = "0";
  });
  close.addEventListener("click", () => {
    navMobile.style.display = "none";
    main.style.display = "flex";
    footer.style.display = "flex";
    navLinks.style.display = "flex";
    nav.style.display = "flex";

    nav.style.padding = "0 2.19vw 0 2.19vw";
    body.style.backgroundColor = "#fff";
    body.style.zIndex = "0";
  });
}
