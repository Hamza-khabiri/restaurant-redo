window.onload = () => {

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
}

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}