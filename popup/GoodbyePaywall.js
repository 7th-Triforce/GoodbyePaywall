(() => {
  let selectedElement = null;

  // Agregar un overlay para destacar elementos
  document.addEventListener("mouseover", mouseIn);
  function mouseIn(event){
    if (selectedElement) return;
    const element = event.target;
    element.style.outline = "2px dashed blue";
  }

  document.addEventListener("mouseout", mouseOut);
  function mouseOut(event){
    if (selectedElement) return;
    const element = event.target;
    element.style.outline = "";
  }

  // Seleccionar el elemento al hacer clic
  document.addEventListener("click", ejecutarCodigoEnElemento);

  function ejecutarCodigoEnElemento(event) {
    const element = event.target;
    document.body.style.overflow = "unset !important";

    // Encontrar el elemento padre más cercano que sea un <div>
    let padre = element;
    let counter = 0;
    while (padre.parentNode !== document.body && counter <100)
      counter++;
      
      padre = padre.parentNode; // Usar closest para buscar el primer <div> en la jerarquía
      console.log(padre);

    console.log("Nivel padre: " + padre)
    console.log("Nivel superior: " + padre.parentNode)
    padre.remove();

    // Eliminar el listener de clic
    document.removeEventListener("click", ejecutarCodigoEnElemento);
    document.removeEventListener("mouseover", mouseIn);
    document.removeEventListener("mouseout", mouseOut);

    // Quitar el estilo del elemento seleccionado
    element.style.outline = "";
  }
})();
