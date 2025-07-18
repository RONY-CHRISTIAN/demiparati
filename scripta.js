// Texto que se escribe poco a poco con salto de línea automático
const mensaje = [
"Desde el primer momento en que nuestras palabras se encontraron, sentí una conexión única y especial. Cada conversación que hemos compartido ha revelado lo extraordinaria que eres. Mi corazón siente como si te conociera de toda la vida. Te amo mucho Kely. <3"
];

let index = 0;
let subIndex = 0;
let lineaActual = 0;
const velocidadEscritura = 100;

function escribirTexto() {
    if (lineaActual < mensaje.length) {
        if (subIndex < mensaje[lineaActual].length) {
            document.getElementById("mensaje").innerHTML += mensaje[lineaActual].charAt(subIndex);
            subIndex++;
            setTimeout(escribirTexto, velocidadEscritura);
        } else {
            document.getElementById("mensaje").innerHTML += "<br>";
            lineaActual++;
            subIndex = 0;
            setTimeout(escribirTexto, velocidadEscritura);
        }
    }
}

window.onload = function() {
    escribirTexto();
    generarEmoticones();
};

// Generar emoticones flotantes
function generarEmoticones() {
    const contenedor = document.querySelector(".emoticones");
    //const emojis = ["❤️", "💖", "💘", "💌", "💕", "😍", "🥰"];
    const emojis = ["❤️", "💖", "💘", "💝", "💌", "💕", "💓", "💗", "😘", "😚", "😙", "🥰", "💞", "💕", "💓"];

    for (let i = 0; i < 50; i++) {
        let emoji = document.createElement("span");
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = "absolute";
        emoji.style.fontSize = `${Math.random() * 20 + 20}px`;
        emoji.style.top = `${Math.random() * 100}%`;
        emoji.style.left = `${Math.random() * 100}%`;
        emoji.style.opacity = "0";
        emoji.style.animation = `flotar ${Math.random() * 5 + 5}s infinite`;
        contenedor.appendChild(emoji);
    }
}

// Animación de flotación de emoticones
const style = document.createElement("style");
style.innerHTML = `
@keyframes flotar {
    0% { transform: translateY(0px); opacity: 1; }
    50% { opacity: 0.5; }
    100% { transform: translateY(-100px); opacity: 0; }
}`;
document.head.appendChild(style);
