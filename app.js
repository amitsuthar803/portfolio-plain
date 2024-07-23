document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".tabs-btn button");
  const projects = document.querySelectorAll(".all-projects .project");
  const downloadCv = document.querySelector(".downloadCv");

  /**
   * PRELOADER
   */

  const preloader = document.querySelector("[data-preloader]");

  window.addEventListener("DOMContentLoaded", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
  });

  /**
   * add event on multiple elements
   */

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      projects.forEach((project) => {
        if (filter === "all") {
          project.classList.remove("hidden");
        } else {
          project.classList.toggle(
            "hidden",
            !project.classList.contains(filter)
          );
        }
      });
    });
  });

  downloadCv.addEventListener("click", function () {
    const fileUrl = "./ats amit 2024.pdf";

    const link = document.createElement("a");
    link.setAttribute("target", "_blank");
    link.href = fileUrl;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  });

  // navLinks.forEach((link) => {
  //   link.addEventListener("mouseleave", () => {
  //     mouseCursor.classList.remove("link-grow");
  //     link.classList.remove("hovered-link");
  //   });
  //   link.addEventListener("mouseover", () => {
  //     mouseCursor.classList.add("link-grow");
  //     link.classList.add("hovered-link");
  //   });
  // });

  // headerBtn.forEach((btn) => {
  //   btn.addEventListener("mouseover", () => {
  //     mouseCursor.classList.add("link-grow");
  //     btn.classList.add("hover-btn");
  //   });
  //   btn.addEventListener("mouseleave", () => {
  //     mouseCursor.classList.remove("link-grow");
  //     btn.classList.remove("hover-btn");
  //   });
  // });
});

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * Custom cursor
 */

const cursors = document.querySelectorAll("[data-cursor]");
const hoveredElements = [
  ...document.querySelectorAll("button"),
  ...document.querySelectorAll("a"),
  ...document.querySelectorAll(".header-btn"),
  ...document.querySelectorAll(".nav-links li"),
];

window.addEventListener("mousemove", function (event) {
  const posX = event.clientX;
  const posY = event.clientY;

  /** cursor dot position */
  cursors[0].style.left = `${posX}px`;
  cursors[0].style.top = `${posY}px`;

  /** cursor outline position */
  setTimeout(function () {
    cursors[1].style.left = `${posX}px`;
    cursors[1].style.top = `${posY}px`;
  }, 80);
});

/** add hovered class when mouseover on hoverElements */
addEventOnElements(hoveredElements, "mouseover", function () {
  for (let i = 0, len = cursors.length; i < len; i++) {
    cursors[i].classList.add("hovered");
  }
});

/** remove hovered class when mouseout on hoverElements */
addEventOnElements(hoveredElements, "mouseout", function () {
  for (let i = 0, len = cursors.length; i < len; i++) {
    cursors[i].classList.remove("hovered");
  }
});

// hide on scroll down
const header = document.querySelector("header");

let lastScrollY = window.scrollY;
const mediaQuery = window.matchMedia(`(max-width: 64em)`);

window.addEventListener("scroll", () => {
  if (!mediaQuery.matches) {
    if (lastScrollY < window.scrollY) {
      header.classList.add("navbar-hidden");
    } else {
      header.classList.remove("navbar-hidden");
    }

    lastScrollY = window.scrollY;
  }
});
