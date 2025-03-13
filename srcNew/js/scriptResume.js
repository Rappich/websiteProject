function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.expand-btn').forEach(button => {
        button.addEventListener('click', function () {

            const targetId = this.getAttribute('data-target');
            const section = document.getElementById(targetId);

            document.querySelectorAll('.expandable-section').forEach(s => {
                if (s !== section) {
                    s.style.display = 'none';
                }
            });

            if (section.style.display === 'none' || section.style.display === '') {
                section.style.display = 'block';
                section.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
            } else {
                section.style.display = 'none';
            }
        });
    });
});
