document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector("[data-modal]");
  if (!modal) return; // Калі мадальнага акна няма – выхад

  const openBtns = document.querySelectorAll("[data-modal-open]");
  const closeBtns = document.querySelectorAll("[data-modal-close]");
  const backdrop = document.querySelector(".backdrop");

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
});

