/*
    Extrauppgift 1 - FE23 Javascript 1
    Kristoffer Bengtsson
*/

// Antal färg-element per kvadrant
const colorsCount = 10;

// Bredd eller höjd på synlig färgremsa (dvs skillnad i storlek på element)
const boxSpacing = 32;

const quadSize = Math.floor(colorsCount * boxSpacing);
const boxSize = Math.floor(quadSize * 2);

// Skapa kvadrant med angiven färglista och ordning
function createQuadrant(parent, startColor, reverseOrder = false) {
    const newQuad = document.createElement("div");
    newQuad.style.width = `${quadSize}px`;
    newQuad.style.height = `${quadSize}px`;
    newQuad.style.margin = "0px";
    newQuad.style.padding = "0px";
    parent.appendChild(newQuad);

    let currentParent = newQuad;
    for (let i = 0; i < colorsCount; i++) {
        const colorHue = startColor + (i * 35);
        const colorBox = document.createElement("div");
        const leftMargin = reverseOrder ? boxSpacing : 0;

        colorBox.style.width = `${quadSize - (boxSpacing * i)}px`;
        colorBox.style.height = `${quadSize - (boxSpacing * i)}px`;
        colorBox.style.backgroundColor = `hsl(${colorHue}, 100%, 80%)`;
        colorBox.style.margin = i > 0 ? `0px 0px 0px ${leftMargin}px` : "0px 0px 0px 0px";
        colorBox.style.padding = "0px";

        currentParent.appendChild(colorBox);
        currentParent = colorBox;
    }
}

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
wrapperBox.style.width = `${boxSize}px`;
wrapperBox.style.minWidth = `${boxSize}px`;

// Dela upp boxen i 4 kvadranter
createQuadrant(wrapperBox, 0);
createQuadrant(wrapperBox, 95, true);
createQuadrant(wrapperBox, 200, true);
createQuadrant(wrapperBox, 290);