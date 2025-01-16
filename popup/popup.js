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
const themeIcon = document.getElementById("themeIcon");

// Cargar la preferencia guardada
chrome.storage.sync.get("darkMode", (data) => {
    if (data.darkMode) {
        document.body.classList.add("dark-mode");
        themeIcon.src = "../images/moon.svg";
    }
});

// Evento para cambiar el tema
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");
    themeIcon.src = isDarkMode ? "../images/moon.svg" : "../images/sun.svg";

    // Guardar la preferencia en Chrome Storage
    chrome.storage.sync.set({ darkMode: isDarkMode });
});
