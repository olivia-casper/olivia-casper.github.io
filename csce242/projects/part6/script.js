document.addEventListener("DOMContentLoaded", () => {
    // Toggle Hamburger Menu 
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Heart Fill on Click
    document.querySelectorAll(".heart").forEach(heart => {
        heart.addEventListener("click", () => {
            heart.classList.toggle("liked");
            heart.textContent = heart.classList.contains("liked") ? "♥" : "♡"; // Toggle between outline and filled heart
        });
    });

    // JSON 
    const trendsContainer = document.getElementById("fashion-trends");
    const jsonURL = "https://olivia-casper.github.io/projects/part6/trends.json"; // ✅ Replace with your actual GitHub Pages URL

    if (trendsContainer) {
        fetch(jsonURL)
            .then(response => response.json())
            .then(data => {
                let output = "";
                data.forEach(trend => {
                    output += `
                        <section class="year-container">
                            <h1>${trend.year} Fashion Trends</h1>
                            <div class="year-content">
                                <!-- Left Side -->
                                <div class="side">
                                    <div class="frame">
                                        <img src="images/${trend.images[0].src}" alt="${trend.images[0].title}">
                                        <p>${trend.images[0].title}</p>
                                        <img src="images/${trend.images[1].src}" alt="${trend.images[1].title}">
                                        <p>${trend.images[1].title}</p>
                                    </div>
                                </div>

                                <!-- Center Section -->
                                <div class="center-section">
                                    <p>${trend["top-description"]}</p>
                                    <hr class="dotted">
                                    ${
                                        trend["main-image"]
                                        ? `<div class="bottom-content"><img src="images/${trend["main-image"]}" alt="Fashion Trend Chart"></div>`
                                        : ""
                                    }
                                    <p>${trend["bottom-text"]}</p>
                                </div>

                                <!-- Right Side -->
                                <div class="side mirrored">
                                    <div class="frame">
                                        <img src="images/${trend.images[2].src}" alt="${trend.images[2].title}">
                                        <p>${trend.images[2].title}</p>
                                        <img src="images/${trend.images[3].src}" alt="${trend.images[3].title}">
                                        <p>${trend.images[3].title}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    `;
                });
                trendsContainer.innerHTML = output;
            })
            .catch(error => console.error("Error fetching JSON:", error));
    }
});
