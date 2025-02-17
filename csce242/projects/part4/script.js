// Toggle hamburger menu on small screens
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) { 
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    } else {
        console.error("Menu toggle button or nav links not found!");
    }
});

