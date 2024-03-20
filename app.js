
let listNumerosSorteados = [];
let numeroLimite = 3;
let numeroSecreto = gerarNumeroAleatorio(10, 1);
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function limparCampo(){
    document.querySelector('input').value = '';
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Tente adivinhar o número entre 1 e 10');
}
function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativas = tentativas == 1 ? 'uma tentativa' : tentativas + ' tentativas';
        let mensagem = `Você acertou em ${palavraTentativas}!`;

        exibirTextoNaTela('p', mensagem);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else if (chute > numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é menor.');
        limparCampo();
    } else {
        exibirTextoNaTela('p', 'O número secreto é maior.');
    }
    tentativas++;
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio(10, 1);
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', 'disabled');
}
function gerarNumeroAleatorio(range, min){
    let numeroEscolhido = Math.floor(Math.random() * range) + min;
    while(listNumerosSorteados.includes(numeroEscolhido)){
        numeroEscolhido = Math.floor(Math.random() * range) + min;
    }
    listNumerosSorteados.push(numeroEscolhido);
    if (listNumerosSorteados.length == numeroLimite){
        listNumerosSorteados = [];
    }
    return numeroEscolhido;
}

exibirMensagemInicial();
