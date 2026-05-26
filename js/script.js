
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

            let color = formatoActivo === 'hex'
                ? colorAleatorio()
                : colorHSL();

            nuevosColores.push({

                valor: color,

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

        div.style.background = colorObjeto.valor;

        const codigo = document.createElement("span");

        codigo.className = "codigo";

        codigo.textContent = colorObjeto.valor;

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

});
        
        div.addEventListener('click', () => {
            navigator.clipboard.writeText(colorObjeto.valor);
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

    let guardadas = JSON.parse(

        localStorage.getItem('paletas')

    ) || [];

    if(guardadas.length >= 3){

        mostrarToast('⚠️ Máximo 3 paletas');

        return;

    }

    guardadas.push(coloresActuales);

    localStorage.setItem(

        'paletas',

        JSON.stringify(guardadas)

    );

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

        const fila = document.createElement('div');

        fila.className = 'mini-paleta';

        paleta.forEach(color => {

            const mini = document.createElement('div');

            mini.className = 'mini-color';

            mini.style.background = color.valor;

            fila.appendChild(mini);

        });

        const borrar = document.createElement('button');

        borrar.textContent = '🗑️';

        borrar.addEventListener('click', () => {

        eliminarPaleta(index);

});

        lista.appendChild(fila);

        lista.appendChild(borrar);

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