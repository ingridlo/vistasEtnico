const valoresParada = [50, 75, 100, 125]; // Valores de finalización para cada contador

function incrementar(contadorId, valorParada) {
    let contador = document.getElementById(contadorId).querySelector('.numero');
    let cuenta = parseInt(contador.innerText);

    if (cuenta < valorParada) {
        cuenta++;
        contador.innerText = cuenta;
        animarContador(contador);
    }
}

function animarContador(contador) {
    contador.style.transform = 'scale(1)';
    setTimeout(() => {
        contador.style.transform = 'scale(1)';
    }, 500);
}

// Iniciar contadores
valoresParada.forEach((valor, index) => {
    setInterval(() => incrementar(`contador${index + 1}`, valor), 100);
});
