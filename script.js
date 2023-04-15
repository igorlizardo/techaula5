// Construindo Funcionalidades

const textoEL = document.querySelector('#texto');
const contadorEL = document.querySelector('#contador');

function contarCaracteres() {
    const texto = textoEL.value;
    const contador = texto.length;
    contadorEL.innerText = contador;
}

textoEL.addEventListener('input', contarCaracteres);