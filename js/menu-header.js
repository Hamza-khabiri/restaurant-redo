var screenHeight = window.innerHeight;
var menuPosition = $(".menu-icons").offset().top;
var menuActivation = menuPosition * 0.75;
var screenWidth = window.innerWidth;


var screenBottom = $('body').height() - screenHeight - 5;
window.addEventListener('scroll', function jump() {
    var currentPos = window.pageYOffset;
    var elementInView = currentPos > menuActivation;
    var bottomReached = screenBottom <= currentPos && !elementInView;
    if (elementInView || bottomReached) {
        var elements = document.querySelectorAll('.menu-icons li');
        setTimeout(() => {
            elements[0].className = 'test';
        }, 100);
        setTimeout(() => {
            elements[1].className = 'test';
        }, 200);
        setTimeout(() => {
            elements[2].className = 'test';
        }, 300);

        window.removeEventListener('scroll', jump, false);
    }
});