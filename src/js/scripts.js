document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
            } else if (name === "" || message === "") {
                alert("Please fill in all fields.");
            } else {
                alert("Message sent successfully!");
                form.reset();
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const plane = document.querySelector(".timeline-traveller.plane");
    const car = document.querySelector(".timeline-traveller.car");

    const experienceSection = document.getElementById("experience");
    const educationSection = document.getElementById("education");

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;

        // Calculate the position for the plane
        const experienceTop = experienceSection.offsetTop;
        const experienceHeight = experienceSection.offsetHeight;
        const experienceMaxScroll = experienceHeight - window.innerHeight;

        let experiencePosition = ((scrollPosition - experienceTop) / experienceMaxScroll) * 50; // Slower movement
        experiencePosition = Math.max(0, Math.min(50, experiencePosition)); // Clamping value to stay within range

        if (scrollPosition >= experienceTop && scrollPosition <= experienceTop + experienceHeight) {
            plane.style.top = `calc(${experiencePosition}% + 10px)`;
        }

        // Calculate the position for the car
        const educationTop = educationSection.offsetTop;
        const educationHeight = educationSection.offsetHeight;
        const educationMaxScroll = educationHeight - window.innerHeight;

        let educationPosition = ((scrollPosition - educationTop) / educationMaxScroll) * 50; // Slower movement
        educationPosition = Math.max(0, Math.min(50, educationPosition)); // Clamping value

        if (scrollPosition >= educationTop && scrollPosition <= educationTop + educationHeight) {
            car.style.top = `calc(${educationPosition}% + 10px)`;
        }
    });
});
