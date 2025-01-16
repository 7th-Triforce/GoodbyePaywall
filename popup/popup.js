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

// Referencia al toggle de modo oscuro
const darkModeToggle = document.getElementById("darkModeToggle");

// Cargar preferencia guardada
chrome.storage.sync.get("darkMode", (data) => {
    if (data.darkMode) {
        document.body.classList.add("dark-mode");
        darkModeToggle.checked = true;
    }
});

// Guardar preferencia cuando el usuario cambie el switch
darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        document.body.classList.add("dark-mode");
        chrome.storage.sync.set({ darkMode: true });
    } else {
        document.body.classList.remove("dark-mode");
        chrome.storage.sync.set({ darkMode: false });
    }
});