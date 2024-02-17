function toggleModal(e) {
  const modal = document.querySelector("#resume-modal");

  modal.classList.toggle("hidden");
}

document.querySelectorAll("#resume-modal-toggle").forEach((toggle) => {
  toggle.onclick = toggleModal;
});
