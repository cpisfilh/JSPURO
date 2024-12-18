const cardsValues = ["E", "C", "C", "D", "E", "A", "B", "B", "D", "A"];
let valorSeleccionado1 = "";
let ordenSeleccionado1 = "";
let valorSeleccionado2 = "";
let ordenSeleccionado2 = "";
let score = document.querySelector(".score").textContent;
const resetBtn = document.querySelector(".resetBtn");

function agregarTarjetas() {
  const container = document.querySelector(".container");
  cardsValues.forEach((el, index) => {
    const card = document.createElement("button");
    card.classList.add("card");
    card.setAttribute("data-secret", el);
    card.setAttribute("data-orden", index);
    card.textContent = "?";
    card.addEventListener("click", (e) => seleccionarTarjeta(e.target));
    container.append(card);
  });
}

function seleccionarTarjeta(elemento) {
  if (valorSeleccionado1 == "") {
    valorSeleccionado1 = elemento.getAttribute("data-secret");
    ordenSeleccionado1 = elemento.getAttribute("data-orden");
    console.log(valorSeleccionado1, valorSeleccionado2);
    elemento.textContent = valorSeleccionado1;
  } else {
    valorSeleccionado2 = elemento.getAttribute("data-secret");
    ordenSeleccionado2 = elemento.getAttribute("data-orden");
    console.log(valorSeleccionado1, valorSeleccionado2);
    elemento.textContent = valorSeleccionado2;
    setTimeout(() => {
      if (
        valorSeleccionado1 == valorSeleccionado2 &&
        ordenSeleccionado1 != ordenSeleccionado2
      ) {
        console.log("son iguales");
        const elemento1 = document.querySelector(
            `[data-secret="${valorSeleccionado1}"][data-orden="${ordenSeleccionado1}"]`
          );
          const elemento2 = document.querySelector(
            `[data-secret="${valorSeleccionado2}"][data-orden="${ordenSeleccionado2}"]`
          );
        elemento1.setAttribute("disabled", true);
        elemento1.classList.add("disabled");
        elemento2.setAttribute("disabled", true);
        elemento2.classList.add("disabled");
        valorSeleccionado1 = "";
        valorSeleccionado2 = "";
        score++;
        const scoreContainer = document.querySelector(".score");
        scoreContainer.textContent=score
        if(score==(cardsValues.length/2)){
            alert("GANASTE")
            window.location.reload()
        }
      } else {
        console.log("no son iguales");
        //encontrar ambos elementos
        const elemento1 = document.querySelector(
          `[data-secret="${valorSeleccionado1}"][data-orden="${ordenSeleccionado1}"]`
        );
        const elemento2 = document.querySelector(
          `[data-secret="${valorSeleccionado2}"][data-orden="${ordenSeleccionado2}"]`
        );
        elemento1.textContent = "?";
        elemento2.textContent = "?";
        valorSeleccionado1 = "";
        valorSeleccionado2 = "";
      }
    }, 500);
  }
  
}

agregarTarjetas();
resetBtn.addEventListener("click", () => {
    window.location.reload()
})
