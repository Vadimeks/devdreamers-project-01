(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
    shopNowBtn: document.querySelector('.menu-shop-btn'),
    modalWindow: document.querySelector('[data-modal]'),
    menuLinks: document.querySelectorAll('.btn-list-item a'),
    header: document.querySelector('.header-section'), // Выпраўлены клас
    sideMenu: document.querySelector('.menu-backdrop')
  };

  if (refs.openModalBtn && refs.closeModalBtn && refs.modal) {
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  }

  if (refs.shopNowBtn && refs.modalWindow) {
    refs.shopNowBtn.addEventListener('click', () => {
      refs.modal.classList.remove('is-open');
      refs.modalWindow.classList.add('is-open');
      refs.modalWindow.style.zIndex = '300';
    });
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }

  refs.menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      refs.modal.classList.remove('is-open');
    });
  });

  // Фіксацыя хедера пры скроле
  if (!refs.header) {
    console.error("⚠ Хедэр-секцыя не знойдзена! Правер клас у HTML.");
    return;
  }

  function checkScroll() {
    if (window.scrollY > 50) {
      refs.header.classList.add('fixed');
    } else {
      refs.header.classList.remove('fixed');
    }
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Запуск пры загрузцы
})();