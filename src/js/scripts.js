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
    const plane = document.querySelector(".timeline-traveller");

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const planePosition = (scrollPosition / maxScroll) * 100;

        plane.style.top = planePosition + "%";
    });
});