// onscroll - change color of gradient in header menu
// hamburger menu for phone screens

window.addEventListener("scroll", function() {
    let value = window.scrollY;
    do {
        value -= 360;
    } while (value > 360);
    if (value < 0) {
        value += 360;
    }
    value = Math.floor(value);
    document.getElementById("header").style.background = "linear-gradient( 90deg, black 75%, hsla(" + value + ", 50%, 50%, 0.5))";
    console.log("linear-gradient: 90deg, black 75%, hsla(" + value + ", 50%, 50%, 0.5)");
});