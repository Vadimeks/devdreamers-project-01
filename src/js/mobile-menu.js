document.addEventListener("DOMContentLoaded", function () {
  const menuBackdrop = document.querySelector(".menu-backdrop");
  const menuCloseBtn = document.querySelector(".menu-close-btn");

  function closeMenu() {
    menuBackdrop.classList.remove("is-open");
  }

  menuCloseBtn.addEventListener("click", closeMenu);
  menuBackdrop.addEventListener("click", function (event) {
    if (event.target === menuBackdrop) {
      closeMenu();
    }
  });
});
