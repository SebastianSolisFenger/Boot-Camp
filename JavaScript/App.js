const hamburgerBtn = document.querySelector(".hamb-toggle");
const mainMenu = document.querySelector(".menu-box");
const ulList = document.querySelector(".list");

hamburgerBtn.addEventListener("click", () => {
  mainMenu.classList.toggle("active");
  hamburgerBtn.classList.toggle("active");
  ulList.classList.toggle("activeV");
});
