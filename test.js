document.addEventListener("DOMContentLoaded", function () {
    // timer to change background color every second.
    const timer = setInterval(() => {
        bgColorChange();
    }, 1000);
});

// calls randomColor.rbg() to generate a random color.
const bgColorChange = () => {
    document.body.style.backgroundColor = rgb();
}