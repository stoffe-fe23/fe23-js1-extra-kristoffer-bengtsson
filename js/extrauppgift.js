/*
    Extrauppgift 1 - FE23 Javascript 1
    Kristoffer Bengtsson
*/

const blockPadding = 32;
const quadWidth = 320;
const quadHeight = 320;

function createQuadrant(parent) {
    const newQuad = document.createElement("div");
    newQuad.style.width = `${quadWidth}px`; 
    newQuad.style.height = `${quadHeight}px`; 
    newQuad.style.margin = "0px";
    newQuad.style.padding = "0px";
    parent.appendChild(newQuad);
    return newQuad;
}

// Ser inget beräknings-mönster i färgskalornas värden(?), så definierar dem här istället...
const colorsUpperLeft = [
    "hsl(1, 61%, 79%)",
    "hsl(38, 66%, 79%)", 
    "hsl(71, 72%, 79%)", 
    "hsl(102, 71%, 79%)",
    "hsl(139, 68%, 82%)", 
    "hsl(181, 70%, 82%)", 
    "hsl(219, 73%, 81%)", 
    "hsl(252, 74%, 80%)", 
    "hsl(283, 74%, 80%)", 
    "hsl(321, 63%, 79%)"
];

const colorsUpperRight = [
    "hsl(95, 71%, 79%)",
    "hsl(128, 68%, 82%)", 
    "hsl(171, 68%, 82%)", 
    "hsl(211, 71%, 81%)", 
    "hsl(245, 74%, 80%)", 
    "hsl(276, 74%, 80%)", 
    "hsl(312, 63%, 79%)", 
    "hsl(351, 61%, 79%)", 
    "hsl(31, 65%, 79%)", 
    "hsl(64, 72%, 79%)"
];

const colorsLowerLeft = [
    "hsl(202, 71%, 81%)", 
    "hsl(237, 73%, 81%)", 
    "hsl(269, 74%, 80%)", 
    "hsl(303, 63%, 79%)", 
    "hsl(343, 63%, 79%)", 
    "hsl(22, 65%, 79%)", 
    "hsl(57, 70%, 79%)", 
    "hsl(88, 71%, 79%)", 
    "hsl(120, 68%, 82%)", 
    "hsl(162, 68%, 82%)"
];

const colorsLowerRight = [
    "hsl(294, 74%, 80%)", 
    "hsl(334, 63%, 79%)", 
    "hsl(14, 63%, 79%)", 
    "hsl(49, 68%, 79%)", 
    "hsl(82, 71%, 79%)", 
    "hsl(112, 71%, 79%)", 
    "hsl(152, 68%, 82%)", 
    "hsl(195, 70%, 82%)", 
    "hsl(229, 73%, 81%)", 
    "hsl(262, 74%, 80%)"
];

// Gör body svart och centrera wrapper-boxen på sidan 
document.body.style.backgroundColor = "black";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.minHeight = "100vh";
document.body.style.margin = "0px";

// Wrapper box
const wrapperBox = document.createElement("div");
document.body.appendChild(wrapperBox);
wrapperBox.style.display = "flex";
wrapperBox.style.flexWrap = "wrap";
wrapperBox.style.justifyContent = "center";
wrapperBox.style.width = `${quadWidth*2}px`;

// Dela upp boxen i 4 kvadranter
const boxUpperLeft = createQuadrant(wrapperBox);
const boxUpperRight = createQuadrant(wrapperBox);
const boxLowerLeft = createQuadrant(wrapperBox);
const boxLowerRight = createQuadrant(wrapperBox);

// Övre vänstra kvadranten
let currentParent = boxUpperLeft;
for (let i = 0; i < 10; i++) {
    const colorBox = document.createElement("div");
    colorBox.style.width = `${quadWidth - (blockPadding*i)}px`;
    colorBox.style.height = `${quadHeight - (blockPadding*i)}px`;
    colorBox.style.backgroundColor = colorsUpperLeft[i];
    colorBox.style.margin = "0px";
    colorBox.style.padding = "0px";

    currentParent.appendChild(colorBox);
    currentParent = colorBox;
}

// Övre högra kvadranten
currentParent = boxUpperRight;
for (let i = 0; i < 10; i++) {
    const colorBox = document.createElement("div");
    colorBox.style.width = `${quadWidth - (blockPadding*i)}px`;
    colorBox.style.height = `${quadHeight - (blockPadding*i)}px`;
    colorBox.style.backgroundColor = colorsUpperRight[i];
    colorBox.style.margin = i > 0 ? `0px 0px 0px ${blockPadding}px` : "0px 0px 0px 0px";
    colorBox.style.padding = "0px";

    currentParent.appendChild(colorBox);
    currentParent = colorBox;
}

// Nedre vänstra kvadranten
currentParent = boxLowerLeft;
for (let i = 0; i < 10; i++) {
    const colorBox = document.createElement("div");
    colorBox.style.width = `${quadWidth - (blockPadding*i)}px`;
    colorBox.style.height = `${quadHeight - (blockPadding*i)}px`;
    colorBox.style.backgroundColor = colorsLowerLeft[i];
    colorBox.style.margin = i > 0 ? `0px 0px 0px ${blockPadding}px` : "0px 0px 0px 0px";
    colorBox.style.padding = "0px";

    currentParent.appendChild(colorBox);
    currentParent = colorBox;
}

// Nedre högra kvadranten
currentParent = boxLowerRight;
for (let i = 0; i < 10; i++) {
    const colorBox = document.createElement("div");
    colorBox.style.width = `${quadWidth - (blockPadding*i)}px`;
    colorBox.style.height = `${quadHeight - (blockPadding*i)}px`;
    colorBox.style.backgroundColor = colorsLowerRight[i];
    colorBox.style.margin = "0px";
    colorBox.style.padding = "0px";

    currentParent.appendChild(colorBox);
    currentParent = colorBox;
}