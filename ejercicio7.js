class CajaFuerte { // clase CajaFuerte
    #codigo; // campo privado #codigo

    constructor(propietario, codigoInicial) { // Constructor l
        this.propietario = propietario;
        this.#codigo = codigoInicial;
    }

    verCodigo() {
        return this.#codigo;
    }

    cambiarCodigo(nuevoCodigo) { // Método para actualizar el código si cumple las condiciones
        const texto = String(nuevoCodigo);
        if (texto.length === 4 && Number.isInteger(Number(texto)) && Number(texto) >= 0) {
            this.#codigo = texto;
            return true;
        }

        return false;
    }
}

const miCaja = new CajaFuerte("Ana", 1234); // instancia de CajaFuerte

console.log(miCaja.verCodigo());
console.log(miCaja.cambiarCodigo(5678));
console.log(miCaja.verCodigo());

console.log(miCaja.#codigo); 