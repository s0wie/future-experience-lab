const mobileMenu = document.querySelector(".menu-container");
const menuIcon = document.querySelector(".menu-icons");
const menuBurger = document.querySelector(".menu-burger");
const menuCross = document.querySelector(".menu-cross");

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuCross.classList.toggle("hidden");
  menuBurger.classList.toggle("hidden");
});

// const firstLab = document.querySelector(".first-lab");
// const secondLab = document.querySelector(".second-lab");
// const thirdLab = document.querySelector(".third-lab");

// window.addEventListener("scroll", function (event) {
//   if (
//     isInViewPort(firstLab) ||
//     isInViewPort(secondLab) ||
//     isInViewPort(thirdLab)
//   ) {
//     firstLab.classList.remove("opacity");
//     secondLab.classList.remove("opacity");
//     thirdLab.classList.remove("opacity");
//   }
// });
