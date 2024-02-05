function verificarUsuario() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var loader = document.getElementById('loader');
    loader.style.display = 'block';

    // Inicia a animação da barra de progresso
    loader.innerHTML = '<div class="loader-line"></div>';
    
    if (username === "" && password === "") {
        exibirMensagem("Entrada liberada!");
        carregarBarra();
        setTimeout(function(){
            redirecionarParaHome();
        }, 2000);
    } else {
        exibirMensagem("Usuário não autorizado.");
    }
}

function carregarBarra() {
    var loaderLine = document.querySelector('.loader-line');
    var startTimestamp;
    var duration = 2000; // Tempo de espera em milissegundos

    function animateBarra(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;

        var progress = (timestamp - startTimestamp) / duration;

        // Garante que a largura não ultrapasse 100%
        loaderLine.style.width = Math.min(progress * 100, 100) + '%';

        if (progress < 1) {
            requestAnimationFrame(animateBarra);
        }
    }

    requestAnimationFrame(animateBarra);
}

function exibirMensagem(mensagem) {
    var mensagemDiv = document.getElementById('mensagem');
    mensagemDiv.textContent = mensagem;
}

//function redirecionarParaHome() {
//    document.body.style.display = 'block';
//    window.location.href = 'home.html';
//}
