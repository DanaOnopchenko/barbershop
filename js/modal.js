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
    openModalBtns: document.querySelectorAll('[data-open-modal]'),
    closeModalBtn: document.querySelector('[data-close-modal]'),
    modal: document.querySelector('[data-modal]'),
    body:document.querySelector('[data-page]')
  }

  refs.openModalBtns.forEach(el => el.addEventListener('click', toggleModal));

  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
      refs.modal.classList.toggle('backdrop--is-hidden');
      refs.body.classList.toggle('no-scroll')
  }
})();



