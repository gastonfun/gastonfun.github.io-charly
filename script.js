// Función para mostrar/ocultar el menú hamburguesa
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('oculto');
}


// Contador regresivo
const fechaCumple = new Date("2025-04-01T22:00:00").getTime();

const cuentaRegresiva = setInterval(() => {
    const ahora = new Date().getTime();
    const distancia = fechaCumple - ahora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;

    if (distancia < 0) {
        clearInterval(cuentaRegresiva);
        document.getElementById("contador").innerText = "¡El cumple ha comenzado!";
    }
}, 1000);

// Confirmación de asistencia
