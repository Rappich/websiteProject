const sectionsToScrollLock = document.getElementsByClassName("scroll-lock");
const sectionsDisplayProp = Array.from(sectionsToScrollLock).map(
  (sec) => getComputedStyle(sec).display
);

function togglemenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".expand-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const section = document.getElementById(targetId);

      document.querySelectorAll(".expandable-section").forEach((s) => {
        if (s !== section) {
          s.style.display = "none";
        }
      });

      if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
        section.scrollIntoView({ behavior: "smooth" });
        Array.from(sectionsToScrollLock).forEach((sec) => {
          sec.style.display = "none";
        });
      } else {
        section.style.display = "none";
      }
    });
  });
});

function closeExpandedSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.style.display = "none";
    Array.from(sectionsToScrollLock).forEach((sec, index) => {
      sec.style.display = sectionsDisplayProp[index];
    });

    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }
  }
}
