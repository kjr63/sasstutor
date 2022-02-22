var SCROLL_LIMIT = 50;
var OPACITY_ON = "rgba(0,0,0, 0.5)";
var OPACITY_OFF = "rgba(0,0,0, 1)";

var navigatorElement = null;
var navOpacity = OPACITY_OFF;

function init () {
    navigatorElement = document.getElementById("nav");
    window.addEventListener('scroll', handleScroll);
}
function handleScroll () {
    //console.log (window.scrollY);
    if (window.scrollY > SCROLL_LIMIT) {
        if (navOpacity != OPACITY_ON) {
            navOpacity = OPACITY_ON;
            navigatorElement.style.backgroundColor = navOpacity;
        }
    } else {
        if (navOpacity != OPACITY_OFF) {
            navOpacity = OPACITY_OFF;
            navigatorElement.style.backgroundColor = navOpacity;
        }
    }
}

