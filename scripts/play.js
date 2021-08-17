// grid-item-1
const gridItem2 = document.getElementById("slider2");

// grid-item-4
const gridItem4 = document.getElementById("slider4");

// grid-item-6
const gridItem6 = document.getElementById("slider6");

// grid-item-10
const gridItem10 = document.getElementById("slider10");

// grid-item-14
const gridItem14 = document.getElementById("slider14");

// grid-item-21
const gridItem21 = document.getElementById("slider21");

// grid-item-23
const gridItem23 = document.getElementById("slider23");

// grid-item-24
const gridItem24 = document.getElementById("slider24");

// grid-item-26
const gridItem26 = document.getElementById("slider26");

// grid-item-30
const gridItem30 = document.getElementById("slider30");

// grid-item-31
const gridItem31 = document.getElementById("slider31");

const swiper2 = new Swiper("#slider2", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 200,
  threshold: 10
});

const swiper4 = new Swiper("#slider4", {
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

const swiper10 = new Swiper("#slider10", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 200,
  threshold: 10
});

const swiper14 = new Swiper("#slider14", {
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

const swiper23 = new Swiper("#slider23", {
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

const swiper26 = new Swiper("#slider26", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 200,
  threshold: 10
});
const swiper30 = new Swiper("#slider30", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 200,
  threshold: 10
});
const swiper31 = new Swiper("#slider31", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 200,
  threshold: 10
});

// desktop
if (window.innerWidth > 480) {
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
  // grid-item-4
  gridItem4.addEventListener("mousemove", function(e) {
    let width = gridItem4.clientWidth;
    let x = e.pageX - this.offsetLeft;

    gridItem4.classList.toggle(
      "arrow-left",
      //  calculate on which side of the window the element is
      x / width < 0.5,
      x / width > 0.5
    );

    gridItem4.classList.toggle(
      "arrow-right",
      x / width >= 0.5,
      x / width < 0.5
    );
  });

  gridItem4.addEventListener("click", () => {
    // click left side
    if (gridItem4.classList.contains("arrow-left")) {
      swiper4.slidePrev();
    } else if (gridItem4.classList.contains("arrow-right")) {
      swiper4.slideNext();
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

  // grid-item-10
  gridItem10.addEventListener("mousemove", function(e) {
    let width = gridItem10.clientWidth;
    let x = e.pageX - this.offsetLeft;

    gridItem10.classList.toggle(
      "arrow-left",
      //  calculate on which side of the window the element is
      x / width < 0.5,
      x / width > 0.5
    );

    gridItem10.classList.toggle(
      "arrow-right",
      x / width >= 0.5,
      x / width < 0.5
    );
  });

  gridItem10.addEventListener("click", () => {
    // click left side
    if (gridItem10.classList.contains("arrow-left")) {
      swiper10.slidePrev();
    } else if (gridItem10.classList.contains("arrow-right")) {
      swiper10.slideNext();
    }
  });

  // grid-item-14
  gridItem14.addEventListener("mousemove", function(e) {
    let width = gridItem14.clientWidth;
    let x = e.pageX - this.offsetLeft;

    gridItem14.classList.toggle(
      "arrow-left",
      //  calculate on which side of the window the element is
      x / width < 0.5,
      x / width > 0.5
    );

    gridItem14.classList.toggle(
      "arrow-right",
      x / width >= 0.5,
      x / width < 0.5
    );
  });

  gridItem14.addEventListener("click", () => {
    // click left side
    if (gridItem14.classList.contains("arrow-left")) {
      swiper14.slidePrev();
    } else if (gridItem14.classList.contains("arrow-right")) {
      swiper14.slideNext();
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
  // grid-item-23
  gridItem23.addEventListener("mousemove", function(e) {
    let width = gridItem23.clientWidth;
    let x = e.pageX - this.offsetLeft;

    gridItem23.classList.toggle(
      "arrow-left",
      //  calculate on which side of the window the element is
      x / width < 0.5,
      x / width > 0.5
    );

    gridItem23.classList.toggle(
      "arrow-right",
      x / width >= 0.5,
      x / width < 0.5
    );
  });

  gridItem23.addEventListener("click", () => {
    // click left side
    if (gridItem23.classList.contains("arrow-left")) {
      swiper23.slidePrev();
    } else if (gridItem23.classList.contains("arrow-right")) {
      swiper23.slideNext();
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
  // grid-item-23
  gridItem23.addEventListener("mousemove", function(e) {
    let width = gridItem23.clientWidth;
    let x = e.pageX - this.offsetLeft;

    gridItem23.classList.toggle(
      "arrow-left",
      //  calculate on which side of the window the element is
      x / width < 0.5,
      x / width > 0.5
    );

    gridItem23.classList.toggle(
      "arrow-right",
      x / width >= 0.5,
      x / width < 0.5
    );
  });

  gridItem23.addEventListener("click", () => {
    // click left side
    if (gridItem23.classList.contains("arrow-left")) {
      swiper23.slidePrev();
    } else if (gridItem23.classList.contains("arrow-right")) {
      swiper23.slideNext();
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
  // grid-item-26
  gridItem26.addEventListener("mousemove", function(e) {
    let width = gridItem26.clientWidth;
    let x = e.pageX - this.offsetLeft;

    gridItem26.classList.toggle(
      "arrow-left",
      //  calculate on which side of the window the element is
      x / width < 0.5,
      x / width > 0.5
    );

    gridItem26.classList.toggle(
      "arrow-right",
      x / width >= 0.5,
      x / width < 0.5
    );
  });

  gridItem26.addEventListener("click", () => {
    // click left side
    if (gridItem26.classList.contains("arrow-left")) {
      swiper26.slidePrev();
    } else if (gridItem26.classList.contains("arrow-right")) {
      swiper26.slideNext();
    }
  });
  // grid-item-30
  gridItem30.addEventListener("mousemove", function(e) {
    let width = gridItem30.clientWidth;
    let x = e.pageX - this.offsetLeft;

    gridItem30.classList.toggle(
      "arrow-left",
      //  calculate on which side of the window the element is
      x / width < 0.5,
      x / width > 0.5
    );

    gridItem30.classList.toggle(
      "arrow-right",
      x / width >= 0.5,
      x / width < 0.5
    );
  });

  gridItem30.addEventListener("click", () => {
    // click left side
    if (gridItem30.classList.contains("arrow-left")) {
      swiper30.slidePrev();
    } else if (gridItem30.classList.contains("arrow-right")) {
      swiper30.slideNext();
    }
  });
  // grid-item-31
  gridItem31.addEventListener("mousemove", function(e) {
    let width = gridItem31.clientWidth;
    let x = e.pageX - this.offsetLeft;

    gridItem31.classList.toggle(
      "arrow-left",
      //  calculate on which side of the window the element is
      x / width < 0.5,
      x / width > 0.5
    );

    gridItem31.classList.toggle(
      "arrow-right",
      x / width >= 0.5,
      x / width < 0.5
    );
  });

  gridItem31.addEventListener("click", () => {
    // click left side
    if (gridItem31.classList.contains("arrow-left")) {
      swiper31.slidePrev();
    } else if (gridItem31.classList.contains("arrow-right")) {
      swiper31.slideNext();
    }
  });
}
