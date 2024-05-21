const scrollUpButton = document.querySelector("#scroll-up-button");
const scrollDownButton = document.querySelector("#scroll-down-button");
const header = document.querySelector("header");
const cards = document.querySelector(".content");

function toggleState() {
  header.classList.toggle("out");
  cards.classList.toggle("out");
  scrollUpButton.classList.toggle("hide");
  scrollDownButton.classList.toggle("hide");
}

scrollUpButton.onclick = toggleState;
scrollDownButton.onclick = toggleState;
