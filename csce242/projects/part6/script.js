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

    // Toggle navigation menu
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    const loadFashionTrends = async () => {
        const url = "https://olivia-casper.github.io/csce242/projects/part6/fashion_trends.json"; // Replace with actual GitHub URL
    
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Network response was not ok");
    
            const data = await response.json();
            console.log("Fetched JSON Data:", data); 
    
            // Extract the current year from the file name
            const currentPage = window.location.pathname.split("/").pop();
            console.log("Current Page:", currentPage); // Debugging
    
            const yearMatch = currentPage.match(/\d{4}/); // Extracts a four-digit year
            const year = yearMatch ? parseInt(yearMatch[0]) : null;
            console.log("Extracted Year:", year); // Debugging
    
            if (!year) {
                console.error("Could not determine year from URL");
                return;
            }
    
            // Find matching year data
            const yearData = data.find(item => item.year === year);
            console.log("Year Data:", yearData); // Debugging
    
            if (!yearData) {
                console.error("Year data not found for:", year);
                return;
            }
    
            // Select div where JSON content will be injected
            const contentDiv = document.getElementById("fashion-content");
    
            // Construct the content
            let contentHTML = `<p>${yearData["top-description"]}</p><hr class="dotted">`;
    
            if (yearData["main-image"]) {
                contentHTML += `<div class="bottom-content"><img src="images/${yearData["main-image"]}" alt="Main Image"></div>`;
            }
    
            contentHTML += `<div class="year-content">`;
            yearData.images.forEach(image => {
                contentHTML += `
                    <div class="side">
                        <div class="frame">
                            <img src="images/${image.src}" alt="${image.title}">
                            <p>${image.title}</p>
                        </div>
                    </div>
                `;
            });
    
            contentHTML += `</div>`;
    
            if (yearData["bottom-text"]) {
                contentHTML += `<p>${yearData["bottom-text"]}</p>`;
            }
    
            contentDiv.innerHTML = contentHTML;
    
        } catch (error) {
            console.error("Error loading fashion trends:", error);
        }
    };
    
    // Load JSON 
    document.addEventListener("DOMContentLoaded", loadFashionTrends);
    