const btnOpen = document.getElementById("btn-open");
const modal = document.getElementById("modal");
const btnClose = document.getElementById("btn-close");
const modalForm = document.getElementById("form");
const sendBtn = document.getElementById("submit");
const confirmText = document.getElementById("confirm-text");

const modalName = document.getElementById("modal-name");
const modalSurname = document.getElementById("modal-surname");
const modalPhoneNumber = document.getElementById("modal-phone-number");
const modalEmail = document.getElementById("modal-email");
const modalQuestion = document.getElementById("modal-question");

const menuBtn = document.getElementById("nav-btn");
const menu = document.getElementById("menu");

function getActionsWithModal() {
  btnOpen.addEventListener("click", () => {
    sendBtn.classList.remove("close");
    confirmText.classList.remove("open");
    modal.classList.add("open");

    modalName.value = "";
    modalSurname.value = "";
    modalPhoneNumber.value = "";
    modalEmail.value = "";
    modalQuestion.value = "";
  })

  btnClose.addEventListener("click", () => {
    modal.classList.remove("open");
  })

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.remove("open");
    }
  })

  modalForm.addEventListener("submit", (e) => {
    e.preventDefault();
  })

  sendBtn.addEventListener("click", () => {
    if (document.querySelectorAll(".modal__input") !== "" && modalEmail.value.includes("@")) {
      sendBtn.classList.add("close");
      confirmText.classList.add("open");
    }
  })
}

function getActionsWithMenu() {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("opened");
    menuBtn.classList.toggle("modified");
  })
}

getActionsWithModal();
getActionsWithMenu();