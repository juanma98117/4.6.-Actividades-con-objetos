// Crea un símbolo único con la descripción "id"
const id = Symbol("id");
// Objeto empleado

const empleado = {
    nombre: "Juanma",
    [id]: 12345
}

// Recorre las claves de empleado y value coge el nombre de cada clave ignorando el id

for (const value in empleado) {
    console.log(value + ": " + empleado[value]);
}