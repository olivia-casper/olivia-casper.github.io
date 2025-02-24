const steps = 10; //10 rungs
const stepHeight = 31; //how high/fast

const img = document.querySelector("img");
const climbButton = document.getElementById("climb-button");
const drawButton = document.getElementById("draw-button");

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

//Image switches & moves up ladder
let counter = 0;
let stepsClimbed = 0;
let movementInterval;

const images = ["./images/right.png", "./images/left.png"];

const climb = () => {
    img.setAttribute("src", images[counter]);
    const bottom = Number.parseInt(getComputedStyle(img).bottom);
    img.style.bottom = `${bottom + stepHeight}px`; //31 px heigher each step

    ++counter;
    if (counter === 2) counter = 0;

    ++stepsClimbed;
    if (stepsClimbed === steps + 1) clearInterval(movementInterval);
};

climbButton.onclick = () => {
    movementInterval = setInterval(climb, 1000);
    //Only click "Climb Ladder" once
    climbButton.disabled = true;
};

