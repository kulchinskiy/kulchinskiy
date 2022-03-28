// DEFINITION

const toggleClasses = function(elements, classToAdd, classToRemove) {
    elements.map((e, i) => {
        e.classList.remove(classToRemove)
        e.classList.add(classToAdd);
    })
}

var isInViewport = function(elem) {
    var bounding = elem.getBoundingClientRect();

    return (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
};

var bg_bright = document.querySelector('.bg_bright');
var bg_dark = document.querySelector('.bg_dark');
var pages = document.querySelector('#pages');
var page1 = document.querySelector('#landing');
var page2 = document.querySelector('#work');
var page3 = document.querySelector('#team');
var page4 = document.querySelector('#test');
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

// DOTS AND MENUS COLOR

dot1.classList.add('dots-active');
menu1.classList.add('active');
page1.classList.add('page-active');

document.addEventListener('scroll', function() {

    if (isInViewport(page1)) {
        dot1.classList.add('dots-active');
        menu1.classList.add('active');
        page1.classList.add('page-active');
        dot2.classList.remove('dots-active');
        menu2.classList.remove('active');
        page2.classList.remove('page-active');
        dot3.classList.remove('dots-active');
        menu3.classList.remove('active');
        page3.classList.remove('page-active');
        dot4.classList.remove('dots-active');
        menu4.classList.remove('active');
        page4.classList.remove('page-active');
    }

    if (isInViewport(page2)) {
        dot1.classList.remove('dots-active');
        menu1.classList.remove('active');
        page1.classList.remove('page-active');
        dot2.classList.add('dots-active');
        menu2.classList.add('active');
        page2.classList.add('page-active');
        dot3.classList.remove('dots-active');
        menu3.classList.remove('active');
        page3.classList.remove('page-active');
        dot4.classList.remove('dots-active');
        menu4.classList.remove('active');
        page4.classList.remove('page-active');
    }

    if (isInViewport(page3)) {
        dot1.classList.remove('dots-active');
        menu1.classList.remove('active');
        page1.classList.remove('page-active');
        dot2.classList.remove('dots-active');
        menu2.classList.remove('active');
        page2.classList.remove('page-active');
        dot3.classList.add('dots-active');
        menu3.classList.add('active');
        page3.classList.add('page-active');
        dot4.classList.remove('dots-active');
        menu4.classList.remove('active');
        page4.classList.remove('page-active');

    }

    if (isInViewport(page4)) {
        dot1.classList.remove('dots-active');
        menu1.classList.remove('active');
        page1.classList.remove('page-active');
        dot2.classList.remove('dots-active');
        menu2.classList.remove('active');
        page2.classList.remove('page-active');
        dot3.classList.remove('dots-active');
        menu3.classList.remove('active');
        page3.classList.remove('page-active');
        dot4.classList.add('dots-active');
        menu4.classList.add('active');
        page4.classList.add('page-active');

    }

    // RESPONSIVE COLOR
    let activePage = pages.querySelector('.page-active');

    if (!activePage) return;

    if (activePage.classList.contains('bg_bright')) {
        toggleClasses([logo, menu, footer], 'dark', 'white');
    } else {
        toggleClasses([logo, menu, footer], 'white', 'dark');
    }
});

// END NAVIGATION DOTS AND MENU

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