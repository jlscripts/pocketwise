"use strict";

const btnLogIn = document.querySelector(".login-btn");
const btnClose = document.querySelector(".close-btn");
const btnLeft = document.querySelector(".button-left");
const btnRight = document.querySelector(".button-right");
const btnCarousel = document.querySelectorAll(".buttons-carousel");
const modal = document.querySelector(".modal-container");
const overlay = document.querySelector(".overlay");
const notice = document.querySelector(".notice-container");
const comingSoon = document.querySelectorAll(".coming-soon");
const reviews = document.querySelectorAll(".review");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

btnLogIn.addEventListener("click", openModal);

const removeHidden = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const closeModal = function (e) {
  e.preventDefault;
  removeHidden();
};

btnClose.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape")
    if (
      !modal.classList.contains("hidden") &&
      !overlay.classList.contains("hidden")
    )
      removeHidden();
});

const hideNotice = function () {
  notice.classList.add("hidden");
  if (modal.classList.contains("hidden")) overlay.classList.add("hidden");
};

const showNotice = function (e) {
  e.preventDefault();
  notice.classList.remove("hidden");
  overlay.classList.remove("hidden");

  setTimeout(hideNotice, 2000);
};

comingSoon.forEach(function (element) {
  element.addEventListener("click", showNotice);
});

reviews.forEach(function (slide, index) {
  slide.style.transform = `translateX(${100 * index}%)`;
});

let curSlide = 0;

const moveCarousel = function () {
  btnCarousel.forEach((element) => {
    element.classList.remove("button-carousel-active");
  });
  btnCarousel[curSlide].classList.add("button-carousel-active");
};

const moveSlide = function () {
  reviews.forEach(function (slide, index) {
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
    slide.classList.add("hidden");
  });
  reviews[curSlide].classList.remove("hidden");
};

btnRight.addEventListener("click", function () {
  if (curSlide === 2) curSlide = -1;
  curSlide++;
  moveSlide();
  moveCarousel();
});

btnLeft.addEventListener("click", function () {
  if (curSlide === 0) curSlide = 3;
  curSlide--;
  moveSlide();
  moveCarousel();
});
