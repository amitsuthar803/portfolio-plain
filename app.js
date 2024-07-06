document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".tabs-btn button");
  const projects = document.querySelectorAll(".all-projects .project");
  const downloadCv = document.querySelector(".downloadCv");
  const headerBtn = document.querySelectorAll(".header-btn");
  const mouseCursor = document.querySelector(".cursor");
  const navLinks = document.querySelectorAll(".nav-links li");

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

  window.addEventListener("mousemove", cursor);

  function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
  }

  navLinks.forEach((link) => {
    link.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("link-grow");
      link.classList.remove("hovered-link");
    });
    link.addEventListener("mouseover", () => {
      mouseCursor.classList.add("link-grow");
      link.classList.add("hovered-link");
    });
  });

  headerBtn.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
      mouseCursor.classList.add("link-grow");
      btn.classList.add("hover-btn");
    });
    btn.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("link-grow");
      btn.classList.remove("hover-btn");
    });
  });
});
