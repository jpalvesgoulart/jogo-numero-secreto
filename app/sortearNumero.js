const menorValor = 1
const maiorValor = 1000
const numeroSecreto = geraNumero(0, 101)

function geraNumero() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(numeroSecreto)

const elementoMenorValor = document.getElementById("menor-valor")
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById("maior-valor")
elementoMaiorValor.innerHTML = maiorValor
