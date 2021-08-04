// filter options
let brand = document.querySelector(".brand");
let illustration = document.querySelector(".illustration");
let print = document.querySelector(".print");
let web = document.querySelector(".web");
let gridContainer = document.getElementById("work-grid-container");
let gridItems = gridContainer.children;

brand.addEventListener("click", () => filter(brand), false);
illustration.addEventListener("click", () => filter(illustration));
print.addEventListener("click", () => filter(print));
web.addEventListener("click", () => filter(web));

// to make the filter function work give the elements with the class label "work-grid-item a class of (brand, illustration, print, web)"
let filtered = [];
let filter = target => {
  // filter is on
  if (target.classList.contains("on")) {
    target.classList.add("off");
    target.classList.remove("on");

    // remove target.id from filtered
    filtered = filtered.filter(e => {
      return e !== target.id;
    });

    // item.style.display = "block";

    // filter is off
  } else {
    target.classList.add("on");
    target.classList.remove("off");

    // add target.id to filtered
    if (!filtered.includes(target.id)) {
      filtered.push(target.id);
    }
  }
  // add or remove items according to filtered
  for (let item of gridItems) {
    // check if filtered is empty
    if (filtered.length === 0) {
      item.style.display = "block";
    } else if (!filtered.includes(item.classList[1])) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  }
};
