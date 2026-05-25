// Cuando haces clic en "6 colores" llama generate(6)
// Cuando haces clic en "8 colores" llama generate(8)
// Cuando haces clic en "9 colores" llama generate(9)
let coloresActuales = [];

let formatoActivo = "hex";


function generate(cantidad) {
    
    coloresActuales = [];

    for(let i = 0; i < cantidad; i++) {
        let color;

        if(formatoActivo === "hex") {
            color = colorAleatorio();
        } else {
            color = colorHSL();
        }

        coloresActuales.push(color);
    }

    renderizar();
}    


function renderizar(){

    const contenedor = document.querySelector(".paleta");


    contenedor.innerHTML = "";

    coloresActuales.forEach(color => {
        const div = document.createElement("div");
        div.className = "color";
        div.style.background = color;

        const codigo = document.createElement("span");
        codigo.className = "codigo";
        codigo.textContent = color;

        div.appendChild(codigo);

        // Copiar color al portapapeles al hacer clic
        div.addEventListener('click', () => {
            navigator.clipboard.writeText(color);
            alert('Color copiado: ' + color);
        });

        contenedor.appendChild(div);
    });

}   



        // Genera un color hex aleatorio
function colorAleatorio() {
    const hex = Math.floor(Math.random() * 0xFFFFFF).toString(16);
    return '#' + hex.padStart(6, '0'); // asegura 6 dígitos
}

function colorHSL() {
    const h = Math.round(Math.random() * 359); // matiz: cualquier color del espectro
    const s = Math.round(50 + Math.random() * 40); // saturación: entre 50% y 90% (siempre vivo)
    const l = Math.round(35 + Math.random() * 30); // luminosidad: entre 35% y 65% (ni muy oscuro ni muy claro)
    
    return `hsl(${h}, ${s}%, ${l}%)`;
}

// ✅ Recibe el botón como 'boton'
function cambiarFormato(formato, boton) {
    // Actualiza la variable global
    formatoActivo = formato;

    // Quita .activo de todos los botones de formato
    document.querySelectorAll('.formatos button').forEach(btn => {
        btn.classList.remove('activo');
    });

    // Agrega .activo solo al que fue clickeado
    boton.classList.add('activo');

    // Redibuja si ya hay colores
    if (coloresActuales.length > 0) {
        generate(coloresActuales.length);
    }
}

