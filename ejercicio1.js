const persona = {
    nombre: "Ana",
    edad:28,
    trabajo: "ingeniera"

}

console.log (persona.nombre)
console.log (persona.edad)

persona.pais = "España"


console.log(persona.pais)

delete persona.trabajo;

console.log (persona);

console.log (persona["edad"])

let nombre = true;
let apellido= false;

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

Object.entries(persona)
    .forEach(([clave, valor]) => {
        console.log(`${clave}: ${valor}`);
    });