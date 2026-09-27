const navigationButtons = document.querySelectorAll("[data-target]");

navigationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const sectionId = button.dataset.target;

    const section = document.getElementById(sectionId);

    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});

const projectsButton = document.getElementById("projectsButton");

const toolbarProjects = document.getElementById("toolbarProjects");

const projectsPopup = document.getElementById("projectsPopup");

const closePopup = document.getElementById("closePopup");

function showProjectsPopup() {
  projectsPopup.classList.add("show");
}

projectsButton.addEventListener("click", showProjectsPopup);

toolbarProjects.addEventListener("click", showProjectsPopup);

closePopup.addEventListener("click", () => {
  projectsPopup.classList.remove("show");
});
