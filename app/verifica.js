function verificaChute(chute){
    const numero = +chute

    if(naoNumero(numero)){
        if(chute.toUpperCase() === 'GAME OVER'){
            document.body.innerHTML = `
                <h2>Game Over</h2>
                <h3>Jogo Encerrado</h3>
        
                <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            `
            document.body.style.backgroundColor = "#FF4949"
            document.body.style.transition = "2s"
        } else {
            elementoChute.innerHTML += "<div>Valor inválido: o valor deve ser um número.</div>"
        }
        
    }

    if(numeroMaiorMenor(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: o número secreto está entre ${menorValor} e ${maiorValor}.</div>`
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você Acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>Você Errou! O Número Secreto é menor <i class="fa-sharp fa-solid fa-angle-down"></i></span>.</div>`
    } else if(numero < numeroSecreto){
        elementoChute.innerHTML += `<div>Você Errou! O Número Secreto é maior <i class="fa-sharp fa-solid fa-angle-up"></i></span>.</div>`
    }
}

function naoNumero(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})