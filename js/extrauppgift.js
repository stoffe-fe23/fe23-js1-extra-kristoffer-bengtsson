/*
    Extrauppgift 1 - FE23 Javascript 1
    Kristoffer Bengtsson
*/

// Antal färgelement per kvadrant
const colorsCount = 10;

// Storlek på synlig färgremsa (dvs skillnad i storlek på färgelementen)
const boxSpacing = 32;

const quadSize = Math.floor(colorsCount * boxSpacing);
const boxSize = Math.floor(quadSize * 2);

// Body style: Gör bakgrund svart och centrera wrapper-boxen på sidan 
document.body.style.backgroundColor = "black";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.minHeight = "100vh";
document.body.style.margin = "0px";

// Wrapper box
const wrapperBox = document.createElement("div");
wrapperBox.style.display = "flex";
wrapperBox.style.flexWrap = "wrap";
wrapperBox.style.justifyContent = "center";
wrapperBox.style.width = `${boxSize}px`;
wrapperBox.style.minWidth = `${boxSize}px`;
document.body.appendChild(wrapperBox);

// Dela upp boxen i 4 kvadranter
for (let i = 0; i < 4; i++) {
    createQuadrant(wrapperBox, i * 100, (i == 1 || i == 2) );
}

// Skapa kvadrant med angiven färgskala och ordning
function createQuadrant(parent, startColor, reverseOrder = false) {
    const newQuad = document.createElement("div");
    newQuad.style.width = `${quadSize}px`;
    newQuad.style.height = `${quadSize}px`;
    newQuad.style.margin = "0px";
    newQuad.style.padding = "0px";
    parent.appendChild(newQuad);

    let currentParent = newQuad;
    for (let i = 0; i < colorsCount; i++) {
        const colorBox = document.createElement("div");
        colorBox.style.width = `${quadSize - (boxSpacing * i)}px`;
        colorBox.style.height = `${quadSize - (boxSpacing * i)}px`;
        colorBox.style.backgroundColor = `hsl(${startColor + (i * 35)}, 70%, 80%)`;
        colorBox.style.margin = reverseOrder && (i > 0) ? `0px 0px 0px ${boxSpacing}px` : "0px 0px 0px 0px";
        colorBox.style.padding = "0px";

        currentParent.appendChild(colorBox);
        currentParent = colorBox;
    }
}