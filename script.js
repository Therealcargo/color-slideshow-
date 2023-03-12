var colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF"];
var currentIndex = 0;
var slideshow = document.querySelector(".slideshow");

function changeColor() {
    slideshow.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
    setTimeout(changeColor, 1000);
}

changeColor();
