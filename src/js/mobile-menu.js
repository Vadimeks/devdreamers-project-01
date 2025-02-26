(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
    shopNowBtn: document.querySelector('.menu-shop-btn'),
    modalWindow: document.querySelector('[data-modal]'),
    menuButtons: document.querySelectorAll('.btn-list-item'), // Кнопкі меню
    header: document.querySelector('.header-section'), // Хедэр
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

  // Дадаем падзею на кнопкі ў меню
  refs.menuButtons.forEach(button => {
    button.addEventListener('click', function () {
      const targetId = button.getAttribute("data-scroll");
      if (targetId) {
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth"
        });
      }
      refs.modal.classList.remove('is-open'); // Закрываем меню
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
