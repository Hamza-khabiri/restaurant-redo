var screenHeight = window.innerHeight;
var elementPosition = $(".reservations").offset().top;
var activationPoint;
var screenWidth = window.innerWidth;
if (screenWidth > 1000) {
    activationPoint = elementPosition * 0.3;
} else if (screenWidth > 650) {
    activationPoint = elementPosition * 0.5;
} else {
    activationPoint = elementPosition * 0.6;
};
var screenBottom = $('body').height() - screenHeight - 5;
window.addEventListener('scroll', function fadeIn() {
    var currentPos = window.pageYOffset;
    var elementInView = currentPos > activationPoint;
    var bottomReached = screenBottom <= currentPos && !elementInView;
    if (elementInView || bottomReached) {
        var element = document.getElementsByClassName('reservations-border')[0];
        element.className = 'reservations-border fade-in';
        window.removeEventListener('scroll', fadeIn, false);
    }
});

