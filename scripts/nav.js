let dotsMobile = document.getElementById("dots-mobile");
let navMobile = document.getElementById("nav-mobile");
let main = document.getElementsByTagName("main")[0];
let footer = document.getElementsByTagName("footer")[0];
let nav = document.getElementsByTagName("nav")[0];
let body = document.getElementsByTagName("body")[0];
let close = document.getElementById("close");
let closeContainer = document.querySelector(".close-container");

let vh = window.innerHeight / 100;

if (window.innerWidth <= 480) {
  navMobile.style.height = `${vh * 100}px`;
  navMobile.style.width = `100vw`;
  closeContainer.style.height = `${vh * 9.5}px`;

  dotsMobile.addEventListener("click", () => {
    navMobile.style.display = "flex";
    main.style.display = "none";
    footer.style.display = "none";
    nav.style.padding = "0";
    body.style.backgroundColor = "#000";
  });
  close.addEventListener("click", () => {
    navMobile.style.display = "none";
    main.style.display = "flex";
    footer.style.display = "flex";
    nav.style.padding = "0 2.19vw 0 2.19vw";
    body.style.backgroundColor = "#fff";
  });
}