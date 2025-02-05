const modal = document.getElementById("modal");
const btnOpen = document.getElementById("saveBtn");
const btnClose = document.querySelector(".close");
const btnBack = document.querySelector(".btn-back");
const btnCampaigns = document.querySelector(".btn-campaigns");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

// Event Listeners
btnOpen.onclick = openModal;

// All elements use the same close function
[btnClose, btnBack, btnCampaigns].forEach((element) => {
  element.onclick = closeModal;
});

// Close model clicking outsite it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};
