'use strict'


// Make navbar transparent when it is on the top
// navbar가 상단으로 오면 navbar를 투명하게 한다.
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', ()=> {
    
    if(window.scrollY > navbarHeight){ 
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
})