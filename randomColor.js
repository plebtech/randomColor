const rgb = (r, g, b) => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    const color = "rgb(" + r + "," + g + "," + b + ")";
    return color;
}

export default {
    rgb,
}