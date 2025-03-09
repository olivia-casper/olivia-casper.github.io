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

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Fetch and display fashion trends from JSON
    fetch("https://olivia-casper.github.io/csce242/projects/part6/fashion_trends.json")
        .then(response => response.json())
        .then(data => {
            const fashionTrendsContainer = document.getElementById("fashion-trends");
            fashionTrendsContainer.innerHTML = ""; // Clear previous content

            data.forEach(item => {
                const trendDiv = document.createElement("div");
                trendDiv.classList.add("side");

                trendDiv.innerHTML = `
                    <div class="frame">
                        <img src="${item.img_name}" alt="${item.title}">
                        <p>${item.title}</p>
                    </div>
                `;

                fashionTrendsContainer.appendChild(trendDiv);
            });
        })
        .catch(error => console.error("Error fetching fashion trends:", error));

    // Toggle heart fill on click
    document.querySelectorAll(".heart").forEach(heart => {
        heart.addEventListener("click", () => {
            heart.classList.toggle("liked");
            heart.textContent = heart.classList.contains("liked") ? "♥" : "♡";
        });
});

