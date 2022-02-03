'use strict'


// Make navbar transparent when it is on the top
// navbar가 상단으로 오면 navbar를 투명하게 한다.
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
// const home = document.querySelector('#home');
document.addEventListener('scroll', ()=> {
    
    if(window.scrollY > navbarHeight){ 
        navbar.classList.add('navbar--dark');
        
        
    } else {
        navbar.classList.remove('navbar--dark');
        
    }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }

    scrollIntoView(link);
});

// Handle click on "contact me" button on home

const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', (event) => {
    scrollIntoView('#contact');
});

//Make home slowly fade to trnasparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
    home.style.opacity = 1 - window.scrollY / homeHeight; 

});

// Show "arrow btn " when scrolling down
const arrowBtn = document.querySelector('.arrow__btn');
document.addEventListener('scroll', (event) => {
    if(window.scrollY > navbarHeight){ 
        arrowBtn.classList.add('visible');
        
        
    } else {
        arrowBtn.classList.remove('visible');
        
    }
    
});

arrowBtn.addEventListener('click', () => {
    scrollIntoView('#home');

})


function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}