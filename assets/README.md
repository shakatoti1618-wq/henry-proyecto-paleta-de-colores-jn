
Palette Generator 🎨

Aplicación web interactiva para generar, personalizar y guardar paletas de colores modernas.
El proyecto fue desarrollado utilizando HTML, CSS y JavaScript Vanilla, implementando persistencia local, renderizado dinámico y exportación de imágenes en alta calidad.


📌 Descripción del proyecto

Palette Generator es una aplicación web que permite a los usuarios:

Generar paletas aleatorias
Elegir cantidad de colores
Visualizar códigos HEX y HSL
Bloquear colores específicos
Guardar paletas favoritas
Reutilizar paletas guardadas
Descargar paletas en PNG HD

La aplicación está orientada a diseñadores, desarrolladores frontend y usuarios que necesiten inspiración visual para combinaciones de color.


📚 Manual de usuario — Instrucciones de uso


1️⃣ Generar una paleta


Seleccionar la cantidad de colores:
6
8
9
La aplicacion genera la cantidad de colores que el usuario eliga.

![Paso 1](/assets/screenshots/img1.jpg)

2️⃣
Presionar el botón:
Generar Paleta

La aplicación creará automáticamente una nueva combinación de colores.

![Paso 2](/assets/screenshots/img2.jpg)


3️⃣ Cambiar formato de color

El usuario puede alternar entre:

HEX
HSL

Utilizando los botones de formato.

![Paso 3](/assets/screenshots/img3.jpg)

4️⃣ Bloquear colores

Cada tarjeta de color contiene un botón:

🔒 / 🔓

Esto permite mantener un color fijo mientras se generan nuevos colores.

![Paso 4](/assets/screenshots/img4.jpg)

5️⃣ Copiar código de color

Al hacer click sobre cualquier color:

✅ El código se copia automáticamente al portapapeles.

La aplicación muestra un micro feedback:

🎨 Color copiado

![Paso 5](/assets/screenshots/img5.jpg)

6️⃣ Guardar una paleta
Escribir un nombre en el input
Presionar:
❤️ Guardar Paleta

La paleta aparecerá en la sección inferior de la aplicación.

![Paso 6](/assets/screenshots/img6.jpg)

7️⃣ Cargar una paleta guardada

Cada paleta guardada tiene un botón:

🎨

Este botón permite volver a cargar la paleta en el generador principal.

![Paso 7](/assets/screenshots/img7.jpg)

8️⃣ Eliminar una paleta

Cada paleta guardada contiene:

🗑️

Permite eliminar únicamente esa paleta.

![Paso 8](/assets/screenshots/img8.jpg)

9️⃣ Resetear todas las paletas

El botón:

♻️ Resetear

Elimina todas las paletas almacenadas en LocalStorage.

![Paso 9](/assets/screenshots/img9.jpg)

🔟 Descargar paleta en PNG

El botón:

📸 Descargar PNG

Exporta la paleta actual en alta calidad.

![Paso 10](/assets/screenshots/img10.jpg)

🚀 Demo del proyecto
GitHub Pages

Después de desplegar el proyecto podrás acceder desde:

https://shakatoti1618-wq.github.io/henrym1-paleta-jonathan-heredia/


🖥️ MVP — Producto Mínimo Viable

El MVP implementa las funcionalidades principales necesarias para que el usuario pueda:

✅ Generar paletas
✅ Seleccionar cantidad de colores
✅ Visualizar códigos de color HSL y HEX
✅ Guardar paletas
✅ Descargar paletas
✅ Reutilizar paletas guardadas

⚙️ Manual técnico — Decisiones técnicas
Arquitectura

La aplicación fue desarrollada utilizando JavaScript Vanilla sin frameworks externos.

Esto permitió:

Comprender el DOM profundamente
Practicar manipulación dinámica
Controlar completamente el renderizado
Gestión del estado

Se utiliza un arreglo principal:

let coloresActuales = [];

Cada color se almacena como objeto:

{
   hex: "#AABBCC",
   hsl: "hsl(120, 50%, 40%)",
   bloqueado: false
}
Render dinámico

La interfaz se renderiza dinámicamente mediante:

renderizar()

Esto evita HTML repetitivo y mejora la escalabilidad.

Persistencia local

Las paletas se almacenan usando:

localStorage

Ventajas:

Persistencia entre sesiones
No requiere backend
Simplicidad para MVP
Exportación PNG

Se implementó la librería:

html2canvas

Para convertir elementos HTML en imágenes descargables.

Responsive Design

El proyecto utiliza:

CSS Grid

y media queries para adaptarse a:

Desktop
Tablet
Mobile
Microinteracciones UX

Se implementaron:

Toast notifications
Hover animations
Escalado dinámico
Feedback visual
Tooltips

Esto mejora significativamente la experiencia del usuario.

🛠️ Tecnologías utilizadas:

HTML5
CSS3
JavaScript Vanilla
LocalStorage API
html2canvas

📂 Estructura del proyecto:

palette-generator/
│
├── index.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
├── img/
│   └── logo.svg
│
└── README.md

▶️ Pasos para ejecutar la aplicación en local:


1️⃣ Clonar el repositorio

git clone https://github.com/shakatoti1618-wq/henrym1-paleta-jonathan-heredia

2️⃣ Entrar al proyecto

cd palette-generator

3️⃣ Abrir la aplicación

Abrir:

index.html

directamente en el navegador.

🌐 Pasos para desplegar en GitHub Pages:

1️⃣ Subir proyecto a GitHub

Inicializar git:

git init

Agregar archivos:

git add .

Crear commit:

git commit -m "feat: deploy palette generator"

Conectar repositorio:

git remote add origin https://github.com/shakatoti1618-wq/henrym1-paleta-jonathan-heredia

Subir cambios:

git push -u origin main

2️⃣ Activar GitHub Pages

Ir al repositorio en GitHub:

Settings → Pages

Seleccionar:

Branch: main
Folder: /root

Guardar cambios.

3️⃣ Acceder a la demo

GitHub generará una URL similar a:

https://shakatoti1618-wq.github.io/henrym1-paleta-jonathan-heredia/


Funcionalidades implementadas:

✅ Generador dinámico
✅ Selector de cantidad
✅ Formato HEX/HSL
✅ Bloqueo de colores
✅ Copiar colores
✅ Guardar paletas
✅ Reset de paletas
✅ Descargar PNG HD
✅ Render responsive
✅ Micro feedback UX
✅ Reutilizar paletas guardadas

🔮 Mejoras futuras:
🌙 Modo oscuro/claro
🔗 Compartir paletas
🎯 Drag & Drop
❤️ Sistema de favoritos
📜 Historial avanzado
🎨 Gradientes automáticos
☁️ Backend y sincronización
👨‍💻 Autor

Desarrollado por Jonathan Heredia 🚀

Proyecto enfocado en práctica avanzada de:

Frontend Development
DOM Manipulation
UX/UI
Responsive Design
LocalStorage
JavaScript Vanilla

