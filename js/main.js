$('a[href*= "#"]').not('[href="#"]').click(function (event) {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
    ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, () => {
                var $target = $(target);
                $target.focus();
                if ($target.is(':focus')) {
                    return false;
                } else {
                    $target.attr('tabindex', '-1');
                    $target.focus();
                }
            })
        }
    }
});

window.onload = () => {

    //prevents carousel bug
    var ech = sessionStorage.setItem('current_active', 'center');

    //assigns datepicker to input fields
    flatpickr('.reservations-calendar',
        {
            minDate: "today",
            maxDate: new Date().addDays(30)
        }
    );
    flatpickr('.reservations-hour',
        {
            enableTime: true,
            noCalendar: true,
            minDate: "09:00",
            maxDate: "23:00"
        }
    )
};

//overrides date modification function
Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}