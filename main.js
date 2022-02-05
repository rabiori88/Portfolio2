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

    navbarMenu.classList.remove('open');

    scrollIntoView(link);
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
})

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

});

//Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectsContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null) 
    {
        return;
    }

    //Romove selection form the previous itme and select the new one

    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');

    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');


    projectsContainer.classList.add('animation-out');

    setTimeout(() => {
        projects.forEach ((project) => {
            if(filter === '*' || filter == project.dataset.type) {
                project.classList.remove('invisible');
            }
            else {
               project.classList.add('invisible');
            }
        });

        
        projectsContainer.classList.remove('animation-out');    
     }, 300);

});


function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}