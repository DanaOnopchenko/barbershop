// window.onscroll = () => changeHeaderBackground();

// function changeHeaderBackground( ) {
//   const header = document.querySelector('[data-header]');
//   const headerOffsetTrigger = header.offsetTop;
//   const pageOffset = window.pageYOffset;

//   if (pageOffset > headerOffsetTrigger) {
//     header.classList.add('no-transparency');
//   } else {
//     header.classList.remove('no-transparency');
//   }
// }

window.addEventListener('scroll', () => { 
    const header = document.querySelector('[data-header]');
    const logo = document.querySelector('[data-logo]');
    const headerOffsetTrigger = header.offsetTop;

    if (window.scrollY > headerOffsetTrigger) {
        header.classList.add('header--no-transparency');
        logo.classList.add('logo--white')
    }
    else { 
        header.classList.remove('header--no-transparency');
        logo.classList.remove('logo--white')
    }
})