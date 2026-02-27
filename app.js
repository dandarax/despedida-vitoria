const dataInicio = new Date(2024, 5, 12); // Ano, Mês-1, Dia

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicio;
    const timerElemento = document.getElementById('timer');

    if (timerElemento) {
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferenca / 1000 / 60) % 60);
        const segundos = Math.floor((diferenca / 1000) % 60);

        timerElemento.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }
}

setInterval(atualizarContador, 1000);
atualizarContador();