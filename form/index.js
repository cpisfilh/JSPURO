const requiredValidate = function (element, valor) {
  const existingMsg = element.nextElementSibling;
  if (existingMsg && existingMsg.classList.contains("form-msgError")) {
    existingMsg.remove();
  }

  if (valor.trim().length === 0) {
    const spanMsg = document.createElement("span");
    spanMsg.textContent = "Este campo es requerido";
    spanMsg.style.color = "red";
    spanMsg.style.fontSize = "12px";
    spanMsg.classList.add("form-msgError");
    element.insertAdjacentElement("afterend", spanMsg);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const $ = (el) => document.querySelector(el);
  const $$ = (el) => document.querySelectorAll(el);

  $("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const inputs = this.querySelectorAll("input");
    inputs.forEach((input) => {
      requiredValidate(input, input.value);
    });

    const isValid = this.querySelectorAll(".form-msgError").length === 0;

    if (isValid) {
      console.log("FORMULARIO ENVIADO");
    } else {
      console.log("ERRORES EN FORMULARIO");
    }
  });
});
