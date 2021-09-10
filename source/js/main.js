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

// Slider

let position = 0;
const slidesToShow = 4;
const slidesToScroll = 1;

const slider = document.querySelector(".slider");
const container = slider.querySelector(".slider__container");
const track = slider.querySelector(".slider__track");
const items = slider.querySelectorAll(".slider__item");
const buttonLeft = slider.querySelector(".slider__button--left");
const buttonRight = slider.querySelector(".slider__button--right");

const itemsCount = items.length;
const itemWidth = items[0].clientWidth;
const marginRight = Number(
  getComputedStyle(items[0]).marginRight.replace("px", "")
);
const movePosition = slidesToScroll * (itemWidth + marginRight);

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
  track.style.transition = `transform 1s ease-out`;
};

buttonRight.addEventListener("click", () => {
  const itemLeft =
    itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
  setPosition();
});

buttonLeft.addEventListener("click", () => {
  const itemLeft = Math.abs(position) / itemWidth;

  position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
  setPosition();
});
