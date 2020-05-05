const rgb = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    const color = `rgb(${r},${g},${b})`;
    return color;
}

const hex = () => {
    const r = addZero(Math.floor(Math.random() * 256).toString(16));
    const g = addZero(Math.floor(Math.random() * 256).toString(16));
    const b = addZero(Math.floor(Math.random() * 256).toString(16));
    const color = `#${r}${g}${b}`;
    return color;
}

const addZero = (x) => {
    if (x.length === 1) {
        const y = '0' + x;
        return y;
    } else {
        return x;
    }
}