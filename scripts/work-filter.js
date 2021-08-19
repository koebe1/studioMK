// filter options
let brand = document.querySelector(".brand");
let illustration = document.querySelector(".illustration");
let print = document.querySelector(".print");
let corporateDesign = document.querySelector(".corporate-design");
let screendesign = document.querySelector(".screendesign");
let verpackungsdesign = document.querySelector(".verpackungsdesign");
let gridContainer = document.getElementById("work-grid-container");
let gridItems = gridContainer.children;

brand.addEventListener("click", () => filter(brand));
illustration.addEventListener("click", () => filter(illustration));
print.addEventListener("click", () => filter(print));
corporateDesign.addEventListener("click", () => filter(corporateDesign));
screendesign.addEventListener("click", () => filter(screendesign));
verpackungsdesign.addEventListener("click", () => filter(verpackungsdesign));

// to make the filter function work give the elements with the class label "work-grid-item a class of (illustration, print...)"
function findCommon(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}

let filtered = [];
let filter = target => {
  // filter is on
  if (target.classList.contains("on")) {
    target.classList.remove("on");

    // remove target.id from filtered
    filtered = filtered.filter(e => {
      return e !== target.id;
    });

    // item.style.display = "block";

    // filter is off
  } else {
    target.classList.add("on");

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
      // if item has any class that is in filtered list -> show item
    } else if (
      filtered.some(f => {
        return item.classList.contains(f);
      })
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
};
