const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', ()=>{
    console.log('open');

    if(header.classList.contains('open')){ // close hamburger
        body.classList.add('noscroll');
        header.classList.remove('open');
        fadeElements.forEach((elm)=>{
            elm.classList.remove('fade-in');
            elm.classList.add('fade-out');
    
        });

    } else { // opem hamb menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElements.forEach((elm)=>{
            elm.classList.remove('fade-out');
            elm.classList.add('fade-in');
        });

    }
});

