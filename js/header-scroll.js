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
    const headerOffsetTrigger = header.offsetTop;

    if (window.scrollY > headerOffsetTrigger) {
        header.classList.add('no-transparency');
    }
    else { 
        header.classList.remove('no-transparency')
    }
})