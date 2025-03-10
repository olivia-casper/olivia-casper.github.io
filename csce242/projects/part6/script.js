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
            heart.textContent = heart.classList.contains("liked") ? "♥" : "♡"; 
        });
    });
});

// JSON URL 
const getFashionTrends = async () => {
    const url = "https://olivia-casper.github.io/csce242/projects/part6/fashion_trends.json";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log("Error fetching fashion trends:", error);
    }
};

const showFashionTrends = async () => {
    const trends = await getFashionTrends();
    const currentYear = parseInt(document.body.getAttribute("data-year"));
    
    if (!trends) {
        console.error("No fashion trends data found.");
        return;
    }

    const yearData = trends.find(item => item.year === currentYear);

    if (!yearData) {
        console.error(`No data found for year: ${currentYear}`);
        return;
    }

    // Title
    document.querySelector(".year-container h1").textContent = `${yearData.year} Fashion Trends`;

    // Top Description
    document.querySelector(".center-section p").textContent = yearData["top-description"];

    // Bottom Content
    const bottomText = document.querySelector(".bottom-content p");
    if (bottomText && yearData["bottom-text"]) {
        bottomText.textContent = yearData["bottom-text"];
    }

    // Main Image
    const bottomImageContainer = document.querySelector(".bottom-content img");
    if (bottomImageContainer && yearData["main-image"]) {
        bottomImageContainer.src = `images/${yearData["main-image"]}`;
        bottomImageContainer.alt = `Main fashion trend visualization for ${yearData.year}`;
    }

    // Left & Right Sections
    const leftSide = document.querySelector(".side.left");
    const rightSide = document.querySelector(".side.right");

    if (leftSide && rightSide) {
        leftSide.innerHTML = "";
        rightSide.innerHTML = "";

        yearData.images.forEach((imageData, index) => {
            const section = document.createElement("div");
            section.classList.add("frame");

            const img = document.createElement("img");
            img.src = `images/${imageData.src}`;
            img.alt = imageData.title;

            const caption = document.createElement("p");
            caption.textContent = imageData.title;

            section.appendChild(img);
            section.appendChild(caption);

            // Alternate between left and right sections
            if (index % 2 === 0) {
                leftSide.appendChild(section);
            } else {
                rightSide.appendChild(section);
            }
        });
    }
};

// Display fashion trends when page loads
showFashionTrends();
