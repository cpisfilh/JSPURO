document.addEventListener("DOMContentLoaded", () => {
  const $ = (el) => document.querySelector(el);
  const dropdownButton = $(".dropdown");
  const itemsDropdown = $(".items-dropdown");
  const dropdownText = $("#dropdown-text");

  //Inicializar valor del texto de dropdown
  let textoActual = dropdownText.textContent;

  // Función para alternar visibilidad del dropdown
  function ocultarMostrar() {
    itemsDropdown.classList.toggle("show");
  }

  //Mostrar o ocultar lista
  dropdownButton.addEventListener("click", ocultarMostrar);

  //Recorrer los hijos del dropdown para asignarles el evento click
  Array.from(itemsDropdown.children).map((elemento) => {
    elemento.addEventListener("click", function () {
      const textoNuevo = elemento.textContent;
      const value = elemento.getAttribute("data-value");
      console.log("Valor de la opción elegida: " + value);
      textoActual = textoNuevo;
      dropdownText.textContent = textoNuevo;
      ocultarMostrar();
    });
  });

  // Cerrar el dropdown si se hace clic fuera de él
  document.addEventListener("click", (event) => {
    if (
      !dropdownButton.contains(event.target) &&
      !itemsDropdown.contains(event.target)
    ) {
      itemsDropdown.classList.remove("show");
    }
  });
});
