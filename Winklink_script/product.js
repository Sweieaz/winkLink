"use strict";

const modal = document.querySelector(".modal");
const btnInfoOpen = document.querySelector(".btn--show-modal");
const btnInfoClose = document.querySelector(".btn--close-modal");
const overlay = document.querySelector(".overlay");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnInfoOpen.addEventListener("click", openModal);

btnInfoClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// btnInfoOpen.forEach((btn) => btn.addEventListener("click", openModal));
