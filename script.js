
// Esperamos a que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos el elemento de audio y el botón de Play/Pause
    const audio = document.querySelector('audio');
    const playButton = document.querySelector('.play-button');

    // Función para reproducir o pausar el audio
    function toggleAudio() {
        if (audio.paused) {
            audio.play(); // Reproducir
            playButton.textContent = 'Pause'; // Cambiar texto del botón
        } else {
            audio.pause(); // Pausar
            playButton.textContent = 'Play'; // Cambiar texto del botón
        }
    }

    // Asignamos el evento de click al botón de Play/Pause
    playButton.addEventListener('click', toggleAudio);

    // Opcional: Cuando el audio termine, cambiamos el botón a "Play"
    audio.addEventListener('ended', function() {
        playButton.textContent = 'Play';
    });
});

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
