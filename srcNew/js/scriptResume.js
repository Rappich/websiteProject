function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function () {
    const expandBtn = document.getElementById('expand-cv-btn');
    const cvDetailsSection = document.getElementById('cv-details');

    if (expandBtn && cvDetailsSection) {
        expandBtn.addEventListener('click', function () {
            if (cvDetailsSection.style.display === 'none' || cvDetailsSection.style.display === '') {
                cvDetailsSection.style.display = 'block';
                cvDetailsSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                cvDetailsSection.style.display = 'none';
            }
        });
    }
});