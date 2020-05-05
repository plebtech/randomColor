// returns random color in rgb(r,g,b) format.
const rgb = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    const color = `rgb(${r},${g},${b})`;
    return color;
}

// returns random color in #hex format.
const hex = () => {
    const r = addZero(Math.floor(Math.random() * 256).toString(16));
    const g = addZero(Math.floor(Math.random() * 256).toString(16));
    const b = addZero(Math.floor(Math.random() * 256).toString(16));
    const color = `#${r}${g}${b}`;
    return color;
}

// checks for single-length value (0 through f) to convert to hex by prepending a zero.
// ex: 'a' becomes '0a'.
const addZero = (x) => {
    if (x.length === 1) {
        const y = '0' + x;
        return y;
    } else {
        return x;
    }
}