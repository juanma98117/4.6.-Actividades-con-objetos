// Objeto persona
const persona = {
    nombre: "Ana",
    edad:28,
    trabajo: "ingeniera"

}

console.log (persona.nombre)
console.log (persona.edad)

//Crear una propiedad nueva
persona.pais = "España"


console.log(persona.pais)

// Borrar la propiedad trabajo
delete persona.trabajo;

console.log (persona);

console.log (persona["edad"])

let nombre = true;
let apellido= false;

// // Comprobar si existen nombre y apellido con forEach
Object.keys(persona).forEach((existe) => {
    if (existe === "nombre") {
        nombre = true;
    }
    if (existe === "apellido") {
        apellido = true;
    }
});

console.log("¿Existe el 'nombre'?", nombre);    
console.log("¿Existe el'apellido'?", apellido);

// Recorrer todas las propiedades con forEach
Object.entries(persona)
    .forEach(([clave, valor]) => {
        console.log(`${clave}: ${valor}`);
    });