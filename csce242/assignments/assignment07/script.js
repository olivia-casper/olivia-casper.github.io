const steps = 10;
const rate = 31;

const img = document.querySelector("img");
const climbButton = document.getElementById("climb-button");
const drawButton = document.getElementById("draw-button");

//Ladder

const drawLadder = () => {
    const ladder = document.getElementById("ladder");
    ladder.classList.add("border-inline");

    for (let i = 0; i < steps; ++i) {
        const hr = document.createElement("hr");
        ladder.append(hr);
    }
  };

drawButton.onclick = () => {
    drawLadder();
    img.classList.remove("hidden");
    climbButton.classList.remove("hidden");
    //Only click "Draw Ladder" once
    drawButton.disabled = true;
};

//Image switches + moves up ladder

let counter = 0;
let stepsClimbed = 0;
let intervalId;
const array = ["./images/right.png", "./images/left.png"];

const Climb = () => {
    img.setAttribute("src", array[counter]);
    const bottom = Number.parseInt(getComputedStyle(img).bottom);
    img.style.bottom = `${bottom + rate}px`;

    ++counter;
    if (counter === 2) counter = 0;

    ++stepsClimbed;
    if (stepsClimbed === steps + 1) clearInterval(intervalId);
};

climbButton.onclick = () => {
    intervalId = setInterval(Climb, 1000);
    //Only click "Climb Ladder"
    climbButton.disabled = true;
};

