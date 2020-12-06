const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');

btnHamburger.addEventListener('click', ()=>{
    console.log('open');

    if(header.classList.contains('open')){
        header.classList.remove('open');
    } else {
        header.classList.add('open');
    }
});

