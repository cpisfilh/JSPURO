document.addEventListener('DOMContentLoaded', () => {
    const $ = el => document.querySelector(el)

    const $input = $('.inp');
    const $button = $('.btn');
    const $rButton = $('.resetBtn');
    const $msj = $('.mensaje');

    $rButton.disabled = true;

    let valor = "";

    //generar número
    const num = Math.floor(Math.random() * (100 + 1)).toString()
    console.log(num)

    //guardar valor de input al cambiar
    $input.addEventListener('change', (e) => {
        valor = e.target.value
    })

    //comprobar número
    const checkNumber = (e) => {
        console.log(valor)
        if (valor === num) {
            $msj.textContent = "Lo lograste!"
            $button.disabled = true
            $rButton.disabled=false
        } else if (valor < num) {
            $msj.textContent = "es mas!"
        } else {
            $msj.textContent = "es menos"
        }
    }

    //resetear juego
    const resetGame = ()=>{
        $button.disabled = false
        $input.value = ""
        $msj.textContent = ""
        $rButton.disabled=true
    }

    //accion de botón
    $button.addEventListener('click', checkNumber)
    $rButton.addEventListener('click', resetGame)


})