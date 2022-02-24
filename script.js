const mobileMenu = document.querySelector(".menu-container");
const menuIcon = document.querySelector(".menu-icons");
const menuBurger = document.querySelector(".menu-burger");
const menuCross = document.querySelector(".menu-cross");

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuCross.classList.toggle("hidden");
  menuBurger.classList.toggle("hidden");
});
