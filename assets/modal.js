const modal = document.getElementById("modal");
const btnOpen = document.getElementById("saveBtn");
const btnClose = document.querySelector(".close");
const btnBack = document.querySelector(".btn-back");
const btnCampaigns = document.querySelector(".btn-campaigns");

// Función para abrir el modal
function openModal() {
  modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
  modal.style.display = "none";
  // Aquí puedes agregar lógica adicional después de cerrar
  console.log("Modal cerrado - Mostrando interfaz principal");
}

// Event Listeners
btnOpen.onclick = openModal;

// Todos los elementos de cierre usan la misma función
[btnClose, btnBack, btnCampaigns].forEach((element) => {
  element.onclick = closeModal;
});

// Cerrar al hacer clic fuera del modal
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

// Cerrar con la tecla ESC
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modal.style.display === "block") {
    closeModal();
  }
});
