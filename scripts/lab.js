// grid-item-1
const gridItem1 = document.getElementById("slider1");

// grid-item-2
const gridItem2 = document.getElementById("slider2");

// grid-item-3
const gridItem3 = document.getElementById("slider3");

// grid-item-6
const gridItem6 = document.getElementById("slider6");

// grid-item-11
const gridItem11 = document.getElementById("slider11");

// grid-item-13
const gridItem13 = document.getElementById("slider13");

// grid-item-20
const gridItem20 = document.getElementById("slider20");

// grid-item-21
const gridItem21 = document.getElementById("slider21");

// grid-item-24
const gridItem24 = document.getElementById("slider24");

// grid-item-25
const gridItem25 = document.getElementById("slider25");

// grid-item-34
const gridItem34 = document.getElementById("slider34");

const swiper1 = new Swiper("#slider1", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 200,
  threshold: 10
});
const swiper2 = new Swiper("#slider2", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 200,
  threshold: 10
});
const swiper3 = new Swiper("#slider3", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 200,
  threshold: 10
});
const swiper6 = new Swiper("#slider6", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 200,
  threshold: 10
});
const swiper11 = new Swiper("#slider11", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 200,
  threshold: 10
});
const swiper13 = new Swiper("#slider13", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 200,
  threshold: 10
});
const swiper20 = new Swiper("#slider20", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 200,
  threshold: 10
});
const swiper21 = new Swiper("#slider21", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 200,
  threshold: 10
});
const swiper24 = new Swiper("#slider24", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 200,
  threshold: 10
});
const swiper25 = new Swiper("#slider25", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 200,
  threshold: 10
});
const swiper34 = new Swiper("#slider34", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 200,
  threshold: 10
});

// desktop
if (window.innerWidth > 480) {
  // grid-item-1
  gridItem1.addEventListener("mousemove", function(e) {
    let width = gridItem1.clientWidth;
    let x = e.pageX - this.offsetLeft;

    gridItem1.classList.toggle(
      "arrow-left",
      //  calculate on which side of the window the element is
      x / width < 0.5,
      x / width > 0.5
    );

    gridItem1.classList.toggle(
      "arrow-right",
      x / width >= 0.5,
      x / width < 0.5
    );
  });

  gridItem1.addEventListener("click", () => {
    // click left side
    if (gridItem1.classList.contains("arrow-left")) {
      swiper1.slidePrev();
    } else if (gridItem1.classList.contains("arrow-right")) {
      swiper1.slideNext();
    }
  });
  // grid-item-2
  gridItem2.addEventListener("mousemove", function(e) {
    let width = gridItem2.clientWidth;
    let x = e.pageX - this.offsetLeft;

    gridItem2.classList.toggle(
      "arrow-left",
      //  calculate on which side of the window the element is
      x / width < 0.5,
      x / width > 0.5
    );

    gridItem2.classList.toggle(
      "arrow-right",
      x / width >= 0.5,
      x / width < 0.5
    );
  });

  gridItem2.addEventListener("click", () => {
    // click left side
    if (gridItem2.classList.contains("arrow-left")) {
      swiper2.slidePrev();
    } else if (gridItem2.classList.contains("arrow-right")) {
      swiper2.slideNext();
    }
  });
  // grid-item-3
  gridItem3.addEventListener("mousemove", function(e) {
    let width = gridItem3.clientWidth;
    let x = e.pageX - this.offsetLeft;

    gridItem3.classList.toggle(
      "arrow-left",
      //  calculate on which side of the window the element is
      x / width < 0.5,
      x / width > 0.5
    );

    gridItem3.classList.toggle(
      "arrow-right",
      x / width >= 0.5,
      x / width < 0.5
    );
  });

  gridItem3.addEventListener("click", () => {
    // click left side
    if (gridItem3.classList.contains("arrow-left")) {
      swiper3.slidePrev();
    } else if (gridItem3.classList.contains("arrow-right")) {
      swiper3.slideNext();
    }
  });

  // grid-item-6
  gridItem6.addEventListener("mousemove", function(e) {
    let width = gridItem6.clientWidth;
    let x = e.pageX - this.offsetLeft;

    gridItem6.classList.toggle(
      "arrow-left",
      //  calculate on which side of the window the element is
      x / width < 0.5,
      x / width > 0.5
    );

    gridItem6.classList.toggle(
      "arrow-right",
      x / width >= 0.5,
      x / width < 0.5
    );
  });

  gridItem6.addEventListener("click", () => {
    // click left side
    if (gridItem6.classList.contains("arrow-left")) {
      swiper6.slidePrev();
    } else if (gridItem6.classList.contains("arrow-right")) {
      swiper6.slideNext();
    }
  });

  // grid-item-11
  gridItem11.addEventListener("mousemove", function(e) {
    let width = gridItem11.clientWidth;
    let x = e.pageX - this.offsetLeft;

    gridItem11.classList.toggle(
      "arrow-left",
      //  calculate on which side of the window the element is
      x / width < 0.5,
      x / width > 0.5
    );

    gridItem11.classList.toggle(
      "arrow-right",
      x / width >= 0.5,
      x / width < 0.5
    );
  });

  gridItem11.addEventListener("click", () => {
    // click left side
    if (gridItem11.classList.contains("arrow-left")) {
      swiper11.slidePrev();
    } else if (gridItem11.classList.contains("arrow-right")) {
      swiper11.slideNext();
    }
  });
  // grid-item-13
  gridItem13.addEventListener("mousemove", function(e) {
    let width = gridItem13.clientWidth;
    let x = e.pageX - this.offsetLeft;

    gridItem13.classList.toggle(
      "arrow-left",
      //  calculate on which side of the window the element is
      x / width < 0.5,
      x / width > 0.5
    );

    gridItem13.classList.toggle(
      "arrow-right",
      x / width >= 0.5,
      x / width < 0.5
    );
  });

  gridItem13.addEventListener("click", () => {
    // click left side
    if (gridItem13.classList.contains("arrow-left")) {
      swiper13.slidePrev();
    } else if (gridItem13.classList.contains("arrow-right")) {
      swiper13.slideNext();
    }
  });
  // grid-item-20
  gridItem20.addEventListener("mousemove", function(e) {
    let width = gridItem20.clientWidth;
    let x = e.pageX - this.offsetLeft;

    gridItem20.classList.toggle(
      "arrow-left",
      //  calculate on which side of the window the element is
      x / width < 0.5,
      x / width > 0.5
    );

    gridItem20.classList.toggle(
      "arrow-right",
      x / width >= 0.5,
      x / width < 0.5
    );
  });

  gridItem20.addEventListener("click", () => {
    // click left side
    if (gridItem20.classList.contains("arrow-left")) {
      swiper20.slidePrev();
    } else if (gridItem20.classList.contains("arrow-right")) {
      swiper20.slideNext();
    }
  });
  // grid-item-21
  gridItem21.addEventListener("mousemove", function(e) {
    let width = gridItem21.clientWidth;
    let x = e.pageX - this.offsetLeft;

    gridItem21.classList.toggle(
      "arrow-left",
      //  calculate on which side of the window the element is
      x / width < 0.5,
      x / width > 0.5
    );

    gridItem21.classList.toggle(
      "arrow-right",
      x / width >= 0.5,
      x / width < 0.5
    );
  });

  gridItem21.addEventListener("click", () => {
    // click left side
    if (gridItem21.classList.contains("arrow-left")) {
      swiper21.slidePrev();
    } else if (gridItem21.classList.contains("arrow-right")) {
      swiper21.slideNext();
    }
  });
  // grid-item-21
  gridItem21.addEventListener("mousemove", function(e) {
    let width = gridItem21.clientWidth;
    let x = e.pageX - this.offsetLeft;

    gridItem21.classList.toggle(
      "arrow-left",
      //  calculate on which side of the window the element is
      x / width < 0.5,
      x / width > 0.5
    );

    gridItem21.classList.toggle(
      "arrow-right",
      x / width >= 0.5,
      x / width < 0.5
    );
  });

  gridItem21.addEventListener("click", () => {
    // click left side
    if (gridItem21.classList.contains("arrow-left")) {
      swiper21.slidePrev();
    } else if (gridItem21.classList.contains("arrow-right")) {
      swiper21.slideNext();
    }
  });
  // grid-item-24
  gridItem24.addEventListener("mousemove", function(e) {
    let width = gridItem24.clientWidth;
    let x = e.pageX - this.offsetLeft;

    gridItem24.classList.toggle(
      "arrow-left",
      //  calculate on which side of the window the element is
      x / width < 0.5,
      x / width > 0.5
    );

    gridItem24.classList.toggle(
      "arrow-right",
      x / width >= 0.5,
      x / width < 0.5
    );
  });

  gridItem24.addEventListener("click", () => {
    // click left side
    if (gridItem24.classList.contains("arrow-left")) {
      swiper24.slidePrev();
    } else if (gridItem24.classList.contains("arrow-right")) {
      swiper24.slideNext();
    }
  });
  // grid-item-25
  gridItem25.addEventListener("mousemove", function(e) {
    let width = gridItem25.clientWidth;
    let x = e.pageX - this.offsetLeft;

    gridItem25.classList.toggle(
      "arrow-left",
      //  calculate on which side of the window the element is
      x / width < 0.5,
      x / width > 0.5
    );

    gridItem25.classList.toggle(
      "arrow-right",
      x / width >= 0.5,
      x / width < 0.5
    );
  });

  gridItem25.addEventListener("click", () => {
    // click left side
    if (gridItem25.classList.contains("arrow-left")) {
      swiper25.slidePrev();
    } else if (gridItem25.classList.contains("arrow-right")) {
      swiper25.slideNext();
    }
  });
  // grid-item-34
  gridItem34.addEventListener("mousemove", function(e) {
    let width = gridItem34.clientWidth;
    let x = e.pageX - this.offsetLeft;

    gridItem34.classList.toggle(
      "arrow-left",
      //  calculate on which side of the window the element is
      x / width < 0.5,
      x / width > 0.5
    );

    gridItem34.classList.toggle(
      "arrow-right",
      x / width >= 0.5,
      x / width < 0.5
    );
  });

  gridItem34.addEventListener("click", () => {
    // click left side
    if (gridItem34.classList.contains("arrow-left")) {
      swiper34.slidePrev();
    } else if (gridItem34.classList.contains("arrow-right")) {
      swiper34.slideNext();
    }
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 480) {
  }
});

// mobile
if (window.innerWidth <= 480) {
}

window.addEventListener("resize", () => {
  if (window.innerWidth <= 480) {
  }
});
