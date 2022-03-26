// DEFINITION

var isInViewport = function(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

var bg_bright = document.querySelector('.bg_bright');
var bg_dark = document.querySelector('.bg_dark');
var page1 = document.querySelector('#page-one');
var page2 = document.querySelector('#page-two');
var page3 = document.querySelector('#page-three');
var page4 = document.querySelector('#page-four');
var dot1 = document.querySelector('.dot-1');
var dot2 = document.querySelector('.dot-2');
var dot3 = document.querySelector('.dot-3');
var dot4 = document.querySelector('.dot-4');
var menu = document.querySelector('.menu');
var menu1 = document.querySelector('.menu1');
var menu2 = document.querySelector('.menu2');
var menu3 = document.querySelector('.menu3');
var menu4 = document.querySelector('.menu4');
var header = document.querySelector('.header');
var footer = document.querySelector('#footer');
var logo = document.querySelector('.logo');

// RESPONSIVE COLOR

document.addEventListener('scroll', function() {

    if (isInViewport(bg_bright)) {
        logo.classList.add('dark');
        menu.classList.add('dark');
        footer.classList.add('dark');
    } else {
        logo.classList.remove('dark');
        menu.classList.remove('dark');
        footer.classList.remove('dark');
    }

    if (isInViewport(bg_dark)) {
        logo.classList.add('white');
        menu.classList.add('white');
        footer.classList.add('white');
    } else {
        logo.classList.remove('white');
        menu.classList.remove('white');
        footer.classList.remove('white');
    }

});

// DOTS AND MENUS COLOR

dot1.classList.add('dots-active');

document.addEventListener('scroll', function() {

    if (isInViewport(page1)) {
        dot1.classList.add('dots-active');

    } else {
        dot1.classList.remove('dots-active');
    }

    if (isInViewport(page2)) {
        dot2.classList.add('dots-active');
        menu2.classList.add('active');

    } else {
        dot2.classList.remove('dots-active');
        menu2.classList.remove('active');
    }

    if (isInViewport(page3)) {
        dot3.classList.add('dots-active');
        menu3.classList.add('active');

    } else {
        dot3.classList.remove('dots-active');
        menu3.classList.remove('active');
    }

    if (isInViewport(page4)) {
        dot4.classList.add('dots-active');
        menu4.classList.add('active');

    } else {
        dot4.classList.remove('dots-active');
        menu4.classList.remove('active');
    }


});

// END NAIGATION DOTS AND MENU

// START BURGER MENU
function myFunction() {
    var x = document.getElementById("mobilemenuItems");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// START BURGER MENU