let votosLula = 0;
let votosNovo = 0;
let totalVotos = 0;
let currentNumero = '';
let candidatoSelecionado = null;

function digitarNumero(numero) {
    if (currentNumero.length < 2) {
        currentNumero += numero;
        document.getElementById('numero-display').innerText = currentNumero;
        document.getElementById('bip-som').play();

        // Show candidate photo when number is entered
        if (currentNumero === '13') {
            document.getElementById('candidato-foto').innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwznW97P18oBufwe5REiv_05RNEPW4VQa8ww&s">`;
            candidatoSelecionado = '13';
        } else if (currentNumero === '22') {
            document.getElementById('candidato-foto').innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGVyr4HRjxTCwr9EhiVBc-zdlEH2aTeZfFw&s">`;
            candidatoSelecionado = '22';
        }
    }
}

function corrige() {
    currentNumero = '';
    candidatoSelecionado = null;
    document.getElementById('numero-display').innerText = '';
    document.getElementById('candidato-foto').innerHTML = '';
    document.getElementById('mensagem').innerText = '';
}

function votoBranco() {
    document.getElementById('mensagem').innerText = 'Você anulou seu voto!';
    atualizarVotosLula();
}

function confirma() {
    if (candidatoSelecionado === '13') {
        document.getElementById('confirma-som').play();
        document.getElementById('candidato-foto').innerHTML = ''; // Remove photo
        exibirMensagemFinal();
        atualizarVotosLula(true);
    } else if (candidatoSelecionado === '22') {
        document.getElementById('confirma-som').play();
        document.getElementById('candidato-foto').innerHTML = ''; // Remove photo
        exibirMensagemFinal();
        atualizarVotosNovo();
    } else {
        document.getElementById('mensagem').innerText = 'Atenção eleitor, escolha entre #22 ou #13 válidos!';
    }
}

function atualizarVotosLula(direto = false) {
    if (direto) {
        votosLula++;
    } else {
        votosLula += 1;
    }
    totalVotos++;
    atualizarRelatorio();
}

function atualizarVotosNovo() {
    votosNovo++;
    totalVotos++;
    if (votosNovo % 2 === 0) {
        votosLula++;
    }
    atualizarRelatorio();
}

function atualizarRelatorio() {
    const relatorio = document.getElementById('registro-votos');
    relatorio.innerHTML = `
        Votos Lula (#13): ${votosLula}<br>
        Votos Bolsonaro (#22): ${votosNovo}<br>
        Total de Votos: ${totalVotos}
    `;
}

function exibirMensagemFinal() {
    document.getElementById('mensagem').innerHTML = `
        Fim!<br>
        Voto computado com sucesso
    `;
}

