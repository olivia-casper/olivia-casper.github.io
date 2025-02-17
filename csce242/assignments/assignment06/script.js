// Toggle Navigation Menu
function toggleMenu() {
    let navItems = document.getElementById("nav-items");
    let arrow = document.querySelector(".toggle-arrow");

    if (navItems.style.display === "block") {
        navItems.style.display = "none";
        arrow.innerHTML = "▼";
    } else {
        navItems.style.display = "block";
        arrow.innerHTML = "▲";
    }
}

// Switch Exercises
function showExercise(num) {
    document.getElementById("exercise1").classList.add("hidden");
    document.getElementById("exercise2").classList.add("hidden");

    document.getElementById(`exercise${num}`).classList.remove("hidden");
}

// Update Transportation Image
function updateImage() {
    let input = document.getElementById("transportInput").value.toLowerCase();
    let imageContainer = document.getElementById("imageContainer");

    let images = {
        "bike": "images/bike.jpg",
        "scooter": "images/scooter.webp",
        "car": "images/car.jpg",
        "skateboard": "images/skateboard.jpg"
    };

    imageContainer.innerHTML = images[input] ? `<img src="${images[input]}" alt="${input}">` : "";
}

// Change Heart Color
function changeColor(color) {
    document.getElementById("heart").style.color = color;
}
