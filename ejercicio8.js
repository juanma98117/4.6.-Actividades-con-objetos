const Nombre = document.getElementById("nombre"); // Busca y guarda la referencia al input con id="nombre"
const Saludar = document.getElementById("saludar"); // Busca y guarda la referencia al botón con id="saludar"
const Mensajes = document.getElementById("mensajes"); // Busca y guarda la referencia al contenedor <div id="mensajes">

Saludar.addEventListener("click", () => { // Escucha el evento "click" en el botón Saludar y ejecuta esta función cada vez que se pulsa
    const nombre = Nombre.value; // Obtiene el texto actual escrito dentro del campo de entrada
    const mensaje = "¡Hola " + nombre + "! Bienvenido/a."; // Construye el texto de bienvenida concatenando el nombre

    const nuevoMensaje = document.createElement("p"); // Crea un nuevo elemento de párrafo <p> en memoria
    nuevoMensaje.textContent = mensaje; // Asigna el texto del saludo dentro del nuevo párrafo
    Mensajes.appendChild(nuevoMensaje); // Añade el párrafo al final de #mensajes sin borrar los anteriores

    alert(mensaje); // Muestra una ventana de alerta del navegador

    const ventana = window.open(""); // Abre una nueva ventana o pestaña en el navegador y guarda su referencia
    ventana.document.write("<p>" + mensaje + "</p>"); // Escribe un párrafo con el saludo dentro de la ventana recién abierta

    setTimeout(() => { // Programa una tarea para que se ejecute después de un tiempo determinado
        nuevoMensaje.remove(); // Elimina este párrafo concreto del DOM
    }, 5000); // Tiempo de espera: 5000 milisegundos (5 segundos)
}); 