document.addEventListener("DOMContentLoaded", () => {
  // Скрыпт для мадальнага вакна
  const modal = document.querySelector("[data-modal]");
  if (modal) {
    const openBtns = document.querySelectorAll("[data-modal-open]");
    const closeBtns = document.querySelectorAll("[data-modal-close]");
    const backdrop = document.querySelector(".backdrop");
    const modalNameInput = document.querySelector(".modal-input-name");
    const modalEmailInput = document.querySelector(".modal-input-email");
    const modalSendButton = document.querySelector(".modal-form-btn");

    const toggleModal = () => modal.classList.toggle("is-open");

    openBtns.forEach(btn => btn.addEventListener("click", toggleModal));
    closeBtns.forEach(btn => btn.addEventListener("click", toggleModal));

    backdrop?.addEventListener("click", e => {
      if (e.target === backdrop) toggleModal();
    });

    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && modal.classList.contains("is-open")) {
        toggleModal();
      }
    });

    // Дадаем праверку на існаванне інпутаў
    if (modalNameInput && modalEmailInput) {
      modalNameInput.addEventListener("input", validateModalInputs);
      modalEmailInput.addEventListener("input", validateModalInputs);
    }

    function validateModalInputs() {
      const isModalNameValid = modalNameInput.checkValidity();
      const isModalEmailValid = modalEmailInput.checkValidity();
      
      if (isModalNameValid && isModalEmailValid) {
        modalSendButton.removeAttribute('disabled');
        modalSendButton.classList.add('active');
      } else {
        modalSendButton.setAttribute('disabled', 'true');
        modalSendButton.classList.remove('active');
      }
    }

    function closeModal() {
      document.querySelector("[data-modal]").classList.remove('is-open');
    }

    document.querySelector('.modal-form').addEventListener('submit', (event) => {
      event.preventDefault();
      closeModal();
      setTimeout(() => {
        window.location.href = "/"; // Redirect to the main page
      }, 1000); // Затрымка ў 1000 мілісекунд (1 секунда)
    });
  }

  // Скрыпт для формы на старонцы
  const nameInput = document.querySelector(".input-name");
  const emailInput = document.querySelector(".input-email");
  const submitButton = document.querySelector(".form-btn");

  nameInput.addEventListener("input", validateFormInputs);
  emailInput.addEventListener("input", validateFormInputs);

  function validateFormInputs() {
    const isNameValid = nameInput.checkValidity();
    const isEmailValid = emailInput.checkValidity();
    
    if (isNameValid && isEmailValid) {
      submitButton.removeAttribute('disabled');
      submitButton.classList.add('active');
    } else {
      submitButton.setAttribute('disabled', 'true');
      submitButton.classList.remove('active');
    }
  }

  document.querySelector('.order-form').addEventListener('submit', (event) => {
    event.preventDefault();
    setTimeout(() => {
      window.location.href = "/"; // Redirect to the main page
    }, 1000); // Затрымка ў 1000 мілісекунд (1 секунда)
  });
});
