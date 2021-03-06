// DOMContentLoaded required with scripts loaded in <head> of html.
// 'boot loader' of script.
document.addEventListener("DOMContentLoaded", () => {
    console.log("loading..");
    onLoad();
});

// script to run on load (called by DOMContentLoaded event above).
const onLoad = () => {
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
    // call gradient changer.
    gradientChange();
    console.log("loaded.");
}

// calls randomColor.rbg() to generate a random color.
const bgColorChange  = () => {
    document.body.style.backgroundColor = rgb();
}

// calls rgb() to return color code in rgb(r,g,b) format.
const rgbChange = () => {
    const color = rgb();
    const hOne = document.createElement('h1');
    const hOneText = document.createTextNode(color);
    hOne.appendChild(hOneText);
    hOne.style.margin = '1%';
    hOne.style.color = color;
    document.body.prepend(hOne);
}

// calls hex() to return color code in hex format.
const hexChange = () => {
    const color = hex();
    const hOne = document.createElement('h1');
    const hOneText = document.createTextNode(color);
    hOne.appendChild(hOneText);
    hOne.style.margin = '1%';
    hOne.style.color = color;
    document.body.prepend(hOne);
}

// rotate the gradient every half second.
const gradientChange = () => {
    let grad = 0;
    const gradientTimer = setInterval(() => {
        (grad);
        grad += 5;
    }, 500);
}
