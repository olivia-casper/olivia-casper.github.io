document.addEventListener("DOMContentLoaded", () => {
    //Associative array
    const items = {
        "Happy Birthday": "images/birthday.jpg",
        "Crazy Clown": "images/clown.jpg",
        "It's Raining": "images/rain.jpg",
        "Quiet Time": "images/read.jpg",
        "Working Hard": "images/shovel.jpg",
        "Work from Home": "images/work.jpg"
    };    

    const titleList = document.getElementById("titleList");
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popupTitle");
    const popupImage = document.getElementById("popupImage");
    const closeBtn = document.getElementById("close");

    //Populate Titles 
    Object.keys(items).forEach(title => {
        const li = document.createElement("li");
        li.textContent = title;
        li.addEventListener("click", () => showPopup(title, items[title]));
        titleList.appendChild(li);
    });

    const showPopup = (title, imgSrc) => {
        popupTitle.textContent = title;
        popupImage.src = imgSrc;
        popup.classList.remove("hidden");
        popup.style.display = "block";
    };

    //Close
    closeBtn.addEventListener("click", () => {
        popup.classList.add("hidden");
        popup.style.display = "none";
    });
});
