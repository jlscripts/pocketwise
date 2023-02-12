"use strict";

const btnLogIn = document.querySelector(".login-btn");
const btnDemo = document.querySelector(".demo-btn");
const btnClose = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-container");
const overlay = document.querySelector(".overlay");
const notice = document.querySelector(".notice-container");
const btnGoogleplay = document.querySelector(".googleplay-btn");
const btnApple = document.querySelector(".apple-btn");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

btnLogIn.addEventListener("click", openModal);

const closeModal = function (e) {
  e.preventDefault;
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnClose.addEventListener("click", closeModal);

const hideNotice = function () {
  notice.classList.add("hidden");
  overlay.classList.add("hidden");
};

const showNotice = function (e) {
  e.preventDefault();
  notice.classList.remove("hidden");
  overlay.classList.remove("hidden");

  setTimeout(hideNotice, 2000);
};

btnDemo.addEventListener("click", showNotice);
btnGoogleplay.addEventListener("click", showNotice);
btnApple.addEventListener("click", showNotice);
