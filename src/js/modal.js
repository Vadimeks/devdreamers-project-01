document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector("[data-modal]");
  if (!modal) return; 

  const openBtns = document.querySelectorAll("[data-modal-open]");
  const closeBtns = document.querySelectorAll("[data-modal-close]");
  const backdrop = document.querySelector(".backdrop");
  const nameInput = document.querySelector(".input-name");
  const emailInput = document.querySelector(".input-email");
  const sendButton = document.querySelector(".form-btn");

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

  nameInput.addEventListener("input", validateInputs);
  emailInput.addEventListener("input", validateInputs);
});

function validateInputs() {
  const nameInput = document.querySelector(".input-name");
  const emailInput = document.querySelector(".input-email");
  const isNameValid = nameInput.checkValidity();
  const isEmailValid = emailInput.checkValidity();
  const submitButton = document.querySelector('.modal-form-btn');
  
  if (isNameValid && isEmailValid) {
    submitButton.removeAttribute('disabled');
    submitButton.classList.add('active');
  } else {
    submitButton.setAttribute('disabled', 'true');
    submitButton.classList.remove('active');
  }
}
function closeModal() {
  document.querySelector("[data-modal]").classList.remove('is-open');
}

function handleSubmit(event) {
  event.preventDefault();
  closeModal();
  window.location.href = "/"; // Redirect to the main page
}