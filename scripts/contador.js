let cuenta = 0;
const valorParada = 50; 

let intervalo = setInterval(incrementar, 50);

function incrementar() {
    if (cuenta < valorParada) {
        cuenta++;
        document.getElementById('contador').innerText = cuenta;
        animarContador();
    } else {
        clearInterval(intervalo); // Detiene el incremento cuando se alcanza el valor de parada
    }
}

function animarContador() {
    let contador = document.getElementById('contador');
    contador.style.transform = 'scale(1.5)';
    setTimeout(() => {
        contador.style.transform = 'scale(1)';
    }, 500);
}

