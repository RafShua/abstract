const burger = document.querySelector(".toggle__menu");
const headernav = document.querySelector(".header__nav");
burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    headernav.classList.toggle("open");
});