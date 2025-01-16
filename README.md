# GoodbyePaywall

## Descripción
**GoodbyePaywall** es una extensión de navegador (**Chrome**) que te permite interactuar con los elementos de una página web. Con esta herramienta, puedes saltarte los _Paywall_ de las páginas web.

---

## Características
- Seleccionar elementos en la página mediante un clic.
- Identifica el elemento padre inmediato o más grande dentro del DOM.
- Elimina dicho elemento y resetea el estado del `overflow`.
- Para deshacer el cambio es tan sencillo como recargar la página.

---

## Instalación
1. Clona este repositorio o descarga el archivo comprimido del proyecto.
2. Abre tu navegador Chrome y navega a `chrome://extensions/` o ábrelo desde opciones.
3. Activa el **Modo de desarrollador** en la esquina superior derecha.
4. Haz clic en el botón **Cargar descomprimida** y selecciona la carpeta del proyecto.
5. La extensión aparecerá en la lista de extensiones activas.

---

## Uso
1. Haz clic en el icono de la extensión en la barra de herramientas del navegador para abrir el popup.
2. Presiona el botón **Seleccionar Elemento**.
3. Al pasar por encima de cualquier elemento en la página activa este se rodeará con un borde discontinuo.
3. Al hacer clic en cualquier elemento:
   - Se identificará su elemento padre más cercano o el contenedor más grande después del `<body>`.
   - Modificará el `overflow` del `<body>` a `unset`.

---

## Estructura del Proyecto
```
GoodbyePaywall/
├── manifest.json          # Configuración principal de la extensión
├── icon.png     # Icono de la extensión
├── popup/
│   ├── popup.html         # Interfaz del popup
│   ├── popup.js           # Lógica del popup
│   └── GoodbyePaywall.js         # Scripts inyectados en las páginas web
```
---

## Notas Adicionales
- Esta extensión está diseñada para uso personal.
- Usa la extensión bajo tu propia responsabilidad. Asegúrate de cumplir con las políticas de uso de los sitios web en los que la utilices.

---