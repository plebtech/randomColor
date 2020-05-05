document.addEventListener('DOMContentLoaded', onLoad());

// script to run on load (called by DOMContentLoaded event above).
function onLoad() {
    // call bgColorChange every five seconds.
    document.body.style.display = 'flex';
    document.body.style.flexFlow = 'row wrap';
    document.body.style.justifyContent = 'space-around';
    const bgTimer = setInterval(() => {
        bgColorChange();
    }, 5000);
    // call hexChange and rgbChange every two seconds.
    const textTimer = setInterval(() => {
        hexChange();
        rgbChange();
    }, 2000);
}

// calls randomColor.rbg() to generate a random color.
const bgColorChange = () => {
    document.body.style.backgroundColor = rgb();
}

const rgbChange = () => {
    const color = rgb();
    const hOne = document.createElement('h1');
    const hOneText = document.createTextNode(color);
    hOne.appendChild(hOneText);
    hOne.style.margin = '1%';
    hOne.style.color = color;
    document.body.prepend(hOne);
}

const hexChange = () => {
    const color = hex();
    const hOne = document.createElement('h1');
    const hOneText = document.createTextNode(color);
    hOne.appendChild(hOneText);
    hOne.style.margin = '1%';
    hOne.style.color = color;
    document.body.prepend(hOne);
}