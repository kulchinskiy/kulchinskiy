// RESPONSIVE COLOR aND INDICATOR

// IIFE
(function(){

    class Page {
        constructor() {
            this.setScrollListener();
            this.updatePageState();
        }
    
        isInViewport(element) {
            const rect = element.getBoundingClientRect();
            const currentHeight = window.innerHeight || document.documentElement.clientHeight;
            
            return (
                // THIS SAYS THAT BOTTOM IS IN VIEWPORT
                rect.bottom >= 0 &&
                rect.bottom <= currentHeight ||
                // THIS SAYS THAT TOP AND BOTTOM ARE NOT IN VIEWPORT
                rect.top <= 0 &&
                rect.bottom >= currentHeight
            );
        }
    
        setScrollListener() {
            document.addEventListener('scroll', () => {
                this.updatePageState();
            });
       }
    
        toggleClasses(elements, classToAdd, classToRemove) {
            elements.map((e, i) => {
                e.classList.remove(classToRemove)
                e.classList.add(classToAdd);
            })
        }
    
        updatePageState() {
            if (this.isInViewport(page1)) {
                dot1.classList.add('dots-active');
                menu1.classList.add('active');
                page1.classList.add('page-active');
                header.classList.remove('blinder');
                totop.classList.remove('visible');
                dot2.classList.remove('dots-active');
                menu2.classList.remove('active');
                page2.classList.remove('page-active');
                dot3.classList.remove('dots-active');
                menu3.classList.remove('active');
                page3.classList.remove('page-active');
            }
        
            if (this.isInViewport(page2)) {
                dot2.classList.add('dots-active');
                menu2.classList.add('active');
                page2.classList.add('page-active');
                header.classList.add('blinder');
                totop.classList.add('visible');
                dot1.classList.remove('dots-active');
                menu1.classList.remove('active');
                page1.classList.remove('page-active');
                dot3.classList.remove('dots-active');
                menu3.classList.remove('active');
                page3.classList.remove('page-active');
            }
        
            if (this.isInViewport(page3)) {
                dot3.classList.add('dots-active');
                menu3.classList.add('active');
                header.classList.add('blinder');
                totop.classList.add('visible');
                // page3.classList.add('page-active');
                dot1.classList.remove('dots-active');
                menu1.classList.remove('active');
                page1.classList.remove('page-active');
                dot2.classList.remove('dots-active');
                menu2.classList.remove('active');
                page2.classList.remove('page-active');
            }
        
            // RESPONSIVE COLOR
            const activePage = pages.querySelector('.page-active');
        
            if (!activePage) return;
        
            if (activePage.classList.contains('bg_bright')) {
                this.toggleClasses([logo, menu], 'white', 'dark');
            } else {
                this.toggleClasses([logo, menu], 'white', 'dark');
            }
        }
    }
    
    const homepage = new Page();
    
    })();
    
    var bg_bright = document.querySelector('.bg_bright');
    var bg_dark = document.querySelector('.bg_dark');
    var pages = document.querySelector('#pages');
    var page1 = document.querySelector('#landing');
    var page2 = document.querySelector('#portfolio');
    var page3 = document.querySelector('#about');
    var dot1 = document.querySelector('.dot-1');
    var dot2 = document.querySelector('.dot-2');
    var dot3 = document.querySelector('.dot-3');
    var menu = document.querySelector('.menu');
    var menu1 = document.querySelector('.menu1');
    var menu2 = document.querySelector('.menu2');
    var menu3 = document.querySelector('.menu3');
    var header = document.querySelector('.header');
    var logo = document.querySelector('.logo');
    var totop = document.querySelector('#toTop');
    
    // DOTS AND MENUS COLOR
    
    // END NAVIGATION DOTS AND MENU