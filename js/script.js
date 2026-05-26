
let coloresActuales = [];

let formatoActivo = "hex";


function generate(cantidad) {

    let nuevosColores = [];

    for(let i = 0; i < cantidad; i++){

        if(

            coloresActuales[i] &&

            coloresActuales[i].bloqueado

        ){

            nuevosColores.push(coloresActuales[i]);

        }else{

            const hex = colorAleatorio();

            const hsl = hexAHSL(hex);

            nuevosColores.push({

            hex: hex,

            hsl: hsl,

            bloqueado: false

});

        }

    }

    coloresActuales = nuevosColores;

    renderizar();

}


function renderizar(){

    const contenedor = document.querySelector(".paleta");


    contenedor.innerHTML = "";

    coloresActuales.forEach((colorObjeto, index) => {

        const div = document.createElement("div");

        div.className = "color";

        div.style.background = colorObjeto.hex;

        const codigo = document.createElement("span");

        codigo.className = "codigo";

        codigo.textContent = formatoActivo === 'hex'

        ? colorObjeto.hex

        : colorObjeto.hsl;

        div.appendChild(codigo);

        const lock = document.createElement('button');

        lock.className = 'lock';

        lock.textContent = colorObjeto.bloqueado

    ? '🔒'

    : '🔓';

        div.appendChild(lock);

        lock.addEventListener('click', (event) => {

        event.stopPropagation();

        colorObjeto.bloqueado = !colorObjeto.bloqueado;

        lock.textContent = colorObjeto.bloqueado ? '🔒' : '🔓';

        mostrarToast(
        colorObjeto.bloqueado
        ? '🔒 Color bloqueado'
        : '🔓 Color desbloqueado'
    );

});
        
        div.addEventListener('click', () => {
            navigator.clipboard.writeText(

            formatoActivo === 'hex'

            ? colorObjeto.hex

            : colorObjeto.hsl

);
            mostrarToast('🎨 Color copiado');
        });

        contenedor.appendChild(div);
    });

}   


function colorAleatorio() {
    const hex = Math.floor(Math.random() * 0xFFFFFF).toString(16);
    return '#' + hex.padStart(6, '0');
    
}

function colorHSL() {
    const h = Math.round(Math.random() * 359);
    
    const s = Math.round(50 + Math.random() * 40);

    const l = Math.round(35 + Math.random() * 30);
    
    return `hsl(${h}, ${s}%, ${l}%)`;
}


function cambiarFormato(formato, boton) {

    formatoActivo = formato;

    document.querySelectorAll('.formatos button').forEach(btn => {

        btn.classList.remove('activo');

    });

    boton.classList.add('activo');

    mostrarToast(`🎨 Formato cambiado a ${formato.toUpperCase()}`);

    if (coloresActuales.length > 0) {

        renderizar();

    }

}

function mostrarToast(texto){

    const toast = document.getElementById('toast');

    toast.textContent = texto;

    toast.classList.add('show');

    setTimeout(() => {

        toast.classList.remove('show');

    }, 2000);

}


generate(6);


function guardarPaleta(){

    if(coloresActuales.length === 0){

        mostrarToast('⚠️ Genera una paleta primero');

        return;

    }

    const input = document.getElementById('nombrePaleta');

    const nombre = input.value.trim();

    let guardadas = JSON.parse(

        localStorage.getItem('paletas')

    ) || [];

    const nuevaPaleta = {

        nombre: nombre || 'Sin nombre',

        colores: [...coloresActuales]

    };

    guardadas.push(nuevaPaleta);

    localStorage.setItem(

        'paletas',

        JSON.stringify(guardadas)

    );

    input.value = '';

    mostrarToast('❤️ Paleta guardada');

    mostrarGuardadas();

}


function mostrarGuardadas(){

    const lista = document.getElementById('listaGuardadas');

    lista.innerHTML = '';

    const guardadas = JSON.parse(

        localStorage.getItem('paletas')

    ) || [];

    guardadas.forEach((paleta, index) => {

        const contenedor = document.createElement('div');

        contenedor.className = 'contenedor-paleta';

        const titulo = document.createElement('h3');

        titulo.textContent = paleta.nombre;

        const fila = document.createElement('div');

        fila.className = 'mini-paleta';

        paleta.colores.forEach(color => {

            const mini = document.createElement('div');

            mini.className = 'mini-color';

            mini.style.background = color.hex;

            mini.title = color.hex;

            fila.appendChild(mini);

        });

        const borrar = document.createElement('button');

        borrar.className = 'btn-borrar';

        borrar.textContent = '🗑️';

        borrar.addEventListener('click', () => {

            eliminarPaleta(index);

        });

        contenedor.appendChild(titulo);

        contenedor.appendChild(fila);

        contenedor.appendChild(borrar);

        lista.appendChild(contenedor);

    });

}

mostrarGuardadas();

function eliminarPaleta(index){

    let guardadas = JSON.parse(

        localStorage.getItem('paletas')

    ) || [];

    guardadas.splice(index, 1);

    localStorage.setItem(

        'paletas',

        JSON.stringify(guardadas)

    );

    mostrarToast('🗑️ Paleta eliminada');

    mostrarGuardadas();

}


function generarDesdeSelect() {

    const select = document.getElementById("cantidadColores");

    const cantidad = parseInt(select.value);

    generate(cantidad);

    mostrarToast(`🎨 Paleta de ${cantidad} colores generada`);

}

function resetearPaletas(){

    const confirmar = confirm(
        '¿Seguro que deseas eliminar todas las paletas guardadas?'
    );

    if(!confirmar){

        mostrarToast('❌ Eliminación cancelada');

        return;

    }

    localStorage.removeItem('paletas');

    mostrarGuardadas();

    mostrarToast('♻️ Todas las paletas fueron eliminadas');

}

function descargarPaleta(){

    const paleta = document.querySelector('.paleta');

    html2canvas(paleta, {

        scale: 4, // calidad HD

        useCORS: true,

        backgroundColor: null

    }).then(canvas => {

        const enlace = document.createElement('a');

        enlace.download = 'mi-paleta-hd.png';

        enlace.href = canvas.toDataURL('image/png', 1.0);

        enlace.click();

    });

    mostrarToast('📸 Paleta HD descargada');

}

function hexAHSL(H){

    let r = 0, g = 0, b = 0;

    if (H.length == 4) {

        r = "0x" + H[1] + H[1];

        g = "0x" + H[2] + H[2];

        b = "0x" + H[3] + H[3];

    } else if (H.length == 7) {

        r = "0x" + H[1] + H[2];

        g = "0x" + H[3] + H[4];

        b = "0x" + H[5] + H[6];

    }

    r /= 255;

    g /= 255;

    b /= 255;

    let cmin = Math.min(r,g,b),

        cmax = Math.max(r,g,b),

        delta = cmax - cmin,

        h = 0,

        s = 0,

        l = 0;

    if (delta == 0)

        h = 0;

    else if (cmax == r)

        h = ((g - b) / delta) % 6;

    else if (cmax == g)

        h = (b - r) / delta + 2;

    else

        h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0)

        h += 360;

    l = (cmax + cmin) / 2;

    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    s = +(s * 100).toFixed(1);

    l = +(l * 100).toFixed(1);

    return `hsl(${h}, ${s}%, ${l}%)`;

}