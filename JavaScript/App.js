const hamburgerBtn = document.querySelector(".hamb-toggle");
const mainMenu = document.querySelector(".menu-box");

hamburgerBtn.addEventListener("click", () => {
  mainMenu.classList.toggle("active");
});
