let selectionActive = false; // Para controlar si el modo de selección está activo
let selectedElement = null; // Para guardar el elemento seleccionado

// Función para activar el modo de selección
function activateSelector() {
  if (selectionActive) return;

  selectionActive = true; // Activar el modo de selección

  // Agregar eventos para resaltar el elemento bajo el cursor
  const mouseOverHandler = (event) => {
    if (!selectionActive) return;

    const element = event.target;
    element.style.boxShadow = "0 0 10px 5px rgba(0, 0, 255, 0.5)"; // Sombreado azul
    element.style.transition = "box-shadow 0.2s";
  };

  const mouseOutHandler = (event) => {
    if (!selectionActive) return;

    const element = event.target;
    element.style.boxShadow = ""; // Quitar el sombreado
  };

  const clickHandler = (event) => {
    if (!selectionActive) return;

    event.preventDefault();
    event.stopPropagation();

    // Guardar y resaltar el elemento seleccionado
    if (selectedElement) {
      selectedElement.style.boxShadow = ""; // Quitar el sombreado del elemento previo
    }

    selectedElement = event.target;
    selectedElement.style.boxShadow = "0 0 10px 5px rgba(255, 0, 0, 0.8)"; // Sombreado rojo para confirmar selección
    alert(`Elemento seleccionado: ${selectedElement.tagName}`);

    ejecutarCodigoEnElemento(selectedElement);

    // Desactivar el modo de selección
    deactivateSelector();
  };

  // Vincular eventos al documento
  document.addEventListener("mouseover", mouseOverHandler);
  document.addEventListener("mouseout", mouseOutHandler);
  document.addEventListener("click", clickHandler, true);

  // Función para desactivar el modo de selección
  function deactivateSelector() {
    selectionActive = false; // Desactivar el modo de selección

    // Quitar eventos
    document.removeEventListener("mouseover", mouseOverHandler);
    document.removeEventListener("mouseout", mouseOutHandler);
    document.removeEventListener("click", clickHandler, true);
  }
}

// Función para ejecutar un código sobre el elemento seleccionado
function ejecutarCodigoEnElemento(element) {
  console.log("Ejecutando código sobre el elemento:", element);
  // Ejemplo: Cambiar el color de fondo del elemento
  element.style.backgroundColor = "yellow";
}

// Escuchar mensajes desde el popup
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "startSelection") {
    activateSelector();
  }
});
