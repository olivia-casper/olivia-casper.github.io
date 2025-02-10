// Say Hello
document.getElementById("hello-box").onclick = () => {
    console.log("Box clicked!");
    document.getElementById("hello-output").innerHTML += "<p>hello</p>";
}

// Change Star Color
document.getElementById("color-picker").oninput = () => {
    console.log("Color changed!");
    document.getElementById("star").style.color = document.getElementById("color-picker").value;
};

// Image Change 
const images = ["images/goodmorning1.webp", "images/goodafternoon2.jpg", "images/goodnight3.jpg"];
let currentImage = 0;

document.getElementById("dynamic-image").onclick = () => {
    console.log("Image clicked!");
    currentImage++;
    if (currentImage >= images.length) {
        currentImage = 0; 
    }
    document.getElementById("dynamic-image").src = images[currentImage];
};

// Footer message 
document.getElementById("footer-fun").onmouseover = () => {
    console.log("Footer clicked!");
    document.getElementById("footer-fun").innerHTML = "Thanks for visiting!";
};