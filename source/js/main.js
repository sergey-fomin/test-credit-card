// Burger Menu
const header = document.querySelector(".header");
const burgerButton = document.querySelector(".header__burger-button");

const burgerHandler = () => {
  header.classList.toggle("header--menu-opened");
};

document.addEventListener("DOMContentLoaded", () => {
  header.classList.remove("header--no-js");
});

burgerButton.addEventListener("click", burgerHandler);
