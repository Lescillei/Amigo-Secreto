//Nomes dos amigos no select
function carregarNomes() {
    const sorteio = JSON.parse(localStorage.getItem("sorteio"));
    const selecionarNome = document.getElementById("selecionarNome");

    for (let nome in sorteio) {
        const option = document.createElement("option");
        option.value = nome;
        option.textContent = nome;
        selecionarNome.appendChild(option);
    }
}

//Mostrar quem a pessoa tirou
function mostrarResultado() {
    const selecionarNome = document.getElementById("selecionarNome");
    const resultado = document.getElementById("resultado");
    const nome = selecionarNome.value;

    if (nome) {
        const sorteio = JSON.parse(localStorage.getItem("sorteio")); //Pega do localStorage
        resultado.textContent = `Não conta para ninguém ainda, você tirou ${sorteio[nome]}!`;
    } else {
        resultado.textContent = "";
    }
}

//Ocultar resultado para o próximo ver quem tirou
function ocultarResultado() {
    const limparsorteado = document.getElementById("resultado");
    limparsorteado.textContent = "";
}

//Usuário aceita a mensagem
const botaoAceitaMensagem = document.getElementById("botao-aceita-mensagem");
botaoAceitaMensagem.addEventListener("click", aceitarMensagem);

//Sumir ao clicar no botão
function aceitarMensagem() {
    const divMensagemUsuario = document.getElementById("mensagem-usuario");
    divMensagemUsuario.classList.add("oculto");
    //Salvando no localStorage
    localStorage.setItem("aceitouCookie", "1");
}

if(localStorage.getItem("aceitouCookie") == "1") {
    const divMensagemUsuario = document.getElementById("mensagem-usuario");
    divMensagemUsuario.classList.add("oculto");
}

// Carrega os nomes ao iniciar a página
window.onload = carregarNomes;
