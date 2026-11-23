// Objeto cuentaBancaria
const cuentaBancaria = {

    saldo: 1000,

    // Método to String
    toString() {
        return "Saldo: " + this.saldo + " EUR";
    }
};

console.log(`${cuentaBancaria}`);

