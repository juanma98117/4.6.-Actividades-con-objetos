class Vehicle { // clase Vehicle
    constructor(nombre) { // Constructor
        this.nombre = nombre; // Guarda el valor recibido en la instancia
    } 

    move() { // método de instancia move
        console.log(this.nombre + " se está moviendo"); 
    } 
} 

class Car extends Vehicle { // Clase hija Car que hereda propiedades y métodos de Vehicle
    constructor(name, model) { // Constructor de Car
        super(name); // Llama al constructor de Vehicle
        this.model = model; 
    } 

    move() { // Sobrescribe el método move() heredado de Vehicle
        console.log(this.nombre + " is Rolling out!"); 
    } 

    info() { //  método de instancia llamado info
        console.log("Name: " + this.nombre + ", Model: " + this.model); 
    } 
} 

const mycar = new Car("Toyota", "BZ4X"); // Instancia de Car 
mycar.move(); 
mycar.info();