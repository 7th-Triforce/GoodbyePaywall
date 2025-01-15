document.getElementById("startSelector").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["popup/GoodbyePaywall.js"] // Ruta corregida
    });
  });

  // Cerrar el popup después de hacer click al botón
  window.close();
});

// Botón para "eliminar" el script
document.getElementById("cancelSelector").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => {
        if (window.removeGoodbyePaywallListeners) {
          window.removeGoodbyePaywallListeners(); // Llamamos a la función para eliminar los listeners
        }
      }
    });
  });

  window.close();
});