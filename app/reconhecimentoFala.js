window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;
const elementoChute = document.getElementById("chute")

var recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    chute = e.results[0][0].transcript
    exibeChute(chute)
    verificaChute(chute)
}

function exibeChute(chute){
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())

