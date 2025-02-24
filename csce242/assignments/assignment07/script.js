const steps = 10;
const rate = 31;

const img = document.querySelector("img");
const climb = document.getElementById("climb-button");
const draw = document.getElementById("draw-button");

//Ladder

const createLadder = () => {
    const ladder = document.getElementById("ladder");
    ladder.classList.add("border-inline");
    for (let i = 0; i < steps; ++i) {
        const hr = document.createElement("hr");
        ladder.append(hr);
    }
  };

draw.onclick = () => {
    createLadder();
    img.classList.remove("hidden");
    climb.classList.remove("hidden");
    //Only click once
    draw.disabled = true;
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

climb.onclick = () => {
    intervalId = setInterval(Climb, 1000);

    climb.disabled = true;
};

