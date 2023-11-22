'use strict'

// オープン
const modalImages = document.querySelectorAll('.modal-btn')

function openModal() {
  const next = this.nextElementSibling;
  next.classList.toggle("show-modal");
}

for (let i = 0; i < modalImages.length; i++) {
  modalImages[i].addEventListener("click", openModal);
}

//クローズ
const closeImages = document.querySelectorAll('.close-btn')

function closeModal() {
  const parent = this.parentElement;
  parent.classList.toggle("show-modal");
}

for (let i = 0; i < closeImages.length; i++) {
  closeImages[i].addEventListener("click", closeModal);
}
