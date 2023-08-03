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

(() => {
    const refs = {
        openModalButton: document.querySelector('[data-open-modal]'),
        closeModalButton: document.querySelector('[data-close-modal]'),
        modal: document.querySelector('[data-modal]')
    }
    refs.openModalButton.addEventListener('click', toggleModal);
    refs.closeModalButton.addEventListener('click', toggleModal);

 
    
    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
  
})();
  
