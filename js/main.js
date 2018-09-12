//smooth navigation
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
    //start at the top of the page
    $(document).ready(function(){
        $(window).scrollTop(0);
    })
    //masonry in menu items 
    resizeAllItems();
    window.onresize = resizeAllItems;
    //prevents carousel bug
    sessionStorage.setItem('current_active', 'center');

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

//masonry style for menu elements
function getResizedItems(item) {
    menuList = document.querySelector(".restaurant-list");
    gridGap = parseInt(window.getComputedStyle(menuList).getPropertyValue('grid-row-gap'));
    rowHeight = parseInt(window.getComputedStyle(menuList).getPropertyValue('grid-auto-rows'));
    rowSpan = Math.ceil((item.querySelector(".menu-list-content").getBoundingClientRect().height + gridGap) / (rowHeight + gridGap));
    item.style.gridRowEnd = "span " + rowSpan;
}
function resizeAllItems() {
    var items = document.querySelectorAll(".menu-list-item");
    for (let i = 0; i < items.length; i++) {
        getResizedItems(items[i]);
    }
}

//menu switch buttons
var resBtn = document.querySelector('#restaurantButton');
var cafBtn = document.querySelector('#cafeButton');
var pasBtn = document.querySelector('#pastryButton');
var resLink = document.querySelector('#menu li:nth-child(2) a');
var cafLink = document.querySelector('#menu li:nth-child(1) a');
var pasLink = document.querySelector('#menu li:nth-child(3) a');
resBtn.type = 'restaurant';
cafBtn.type = 'cafe';
pasBtn.type = 'pastry';
resLink.type = 'restaurant';
cafLink.type = 'cafe';
pasLink.type = 'pastry';
var arr = [resBtn, cafBtn, pasBtn, resLink, pasLink, cafLink];
arr.forEach((item) => { item.addEventListener('click', openMenu, true)});
function openMenu(evt) {
    var pastry = document.querySelector('.list-wrapper:nth-child(2)');
    var cafe = document.querySelector('.list-wrapper:nth-child(3)');;
    var restaurant = document.querySelector('.list-wrapper:nth-child(1)');
    var type = evt.target.type;
    switch (type) {
        case 'restaurant':
            restaurant.setAttribute('style', 'order: 1');
            cafe.setAttribute('style', 'order: 2');
            pastry.setAttribute('style', 'order: 3');
            break;

        case 'cafe':
            restaurant.setAttribute('style', 'order: 3');
            cafe.setAttribute('style', 'order: 1');
            pastry.setAttribute('style', 'order: 2');
            break;

        case 'pastry':
            restaurant.setAttribute('style', 'order: 2');
            cafe.setAttribute('style', 'order: 3');
            pastry.setAttribute('style', 'order: 1');
            break;
    }
    resizeAllItems();
    var scrollPos = ($('.the-menu-lists').offset().top - 100);
    $('html, body').animate({
        scrollTop: scrollPos
    }, 500);
}
