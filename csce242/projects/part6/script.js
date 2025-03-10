// Toggle hamburger menu 
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Toggle heart fill on click
    document.querySelectorAll(".heart").forEach(heart => {
        heart.addEventListener("click", () => {
            heart.classList.toggle("liked");
            heart.textContent = heart.classList.contains("liked") ? "♥" : "♡"; // Toggle between outline and filled heart
        });
    });
});

    const currentYear = parseInt(document.body.getAttribute("data-year")); // Get the current year from the page
    const jsonUrl = "https://olivia-casper.github.io/csce242/projects/part6/fashion_trends.json";

    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            console.log("JSON Data Loaded:", data);
            const yearData = data.find(item => item.year === currentYear);
            if (yearData) {
                populateYearPage(yearData);
            } else {
                console.error("No data found for this year.");
            }
        })
        .catch(error => console.error("Fetch Error:", error));


const populateYearPage = (yearData) => {
    document.querySelector("h1").textContent = `${yearData.year} Fashion Trends`;

    // Update top description
    document.querySelector(".center-section p").textContent = yearData["top-description"];

    // Update bottom content if available
    const bottomText = document.querySelector(".bottom-content p");
    if (bottomText && yearData["bottom-text"]) {
        bottomText.textContent = yearData["bottom-text"];
    }

    // Update main image if it exists
    const bottomImageContainer = document.querySelector(".bottom-content img");
    if (bottomImageContainer && yearData["main-image"]) {
        bottomImageContainer.src = `images/${yearData["main-image"]}`;
        bottomImageContainer.alt = `Main fashion trend visualization for ${yearData.year}`;
    }

    // Populate the left and right sections with images
    const leftSide = document.querySelector(".side.left");
    const rightSide = document.querySelector(".side.right");

    if (leftSide && rightSide) {
        leftSide.innerHTML = "";
        rightSide.innerHTML = "";

        yearData.images.forEach((imageData, index) => {
            const frame = document.createElement("div");
            frame.classList.add("frame");

            const img = document.createElement("img");
            img.src = `images/${imageData.src}`;
            img.alt = imageData.title;

            const caption = document.createElement("p");
            caption.textContent = imageData.title;

            frame.appendChild(img);
            frame.appendChild(caption);

            // Distribute images evenly between left and right sides
            if (index % 2 === 0) {
                leftSide.appendChild(frame);
            } else {
                rightSide.appendChild(frame);
            }
        });
    }
};
