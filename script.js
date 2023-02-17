"use strict";

const btnLogIn = document.querySelector(".login-btn");
const btnDemo = document.querySelector(".demo-btn");
const btnClose = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-container");
const overlay = document.querySelector(".overlay");
const notice = document.querySelector(".notice-container");
const btnGoogleplay = document.querySelector(".googleplay-btn");
const btnApple = document.querySelector(".apple-btn");
const comingSoon = document.querySelectorAll(".coming-soon");

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
