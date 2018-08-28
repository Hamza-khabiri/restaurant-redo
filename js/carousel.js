function carous(option) {
    var current_active = sessionStorage.getItem('current_active');
    var carousel = document.querySelector('.carousel');
    var slides = carousel.querySelectorAll('div');
    var rightButton = document.getElementsByClassName('btn-right')[0];
    var leftButton = document.getElementsByClassName('btn-left')[0];
    if (option === 'right') {
        pushRight(slides, current_active);
        if (current_active === 'left') {
            current_active = 'center';
        } else {
            current_active = 'right';
        }
    } else {
        pushLeft(slides, current_active);
        if (current_active === 'right') {
            current_active = 'center';
        } else {
            current_active = 'left';
        }
    }
    activate(current_active, rightButton, leftButton);
    sessionStorage.setItem('current_active', current_active);
    //  console.log(current_active);
}
function activate(current_active, rightButton, leftButton) {
    if (current_active === 'left') {
        leftButton.disabled = true;
        rightButton.disabled = false;
    } else if (current_active === 'right') {
        rightButton.disabled = true;
        leftButton.disabled = false;
    } else {
        rightButton.disabled = false;
        leftButton.disabled = false;
    }
}
function pushLeft(slides, current_active) {

    if (current_active === 'right') {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.toggle('push-right');
        }
    } else {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.toggle('push-left');
        }
    }
}

function pushRight(slides, current_active) {
    if (current_active === 'left') {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.toggle('push-left');
        }
    } else {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.toggle('push-right');
        }
    }
}



