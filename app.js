document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".tabs-btn button");
  const projects = document.querySelectorAll(".all-projects .project");

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
});
