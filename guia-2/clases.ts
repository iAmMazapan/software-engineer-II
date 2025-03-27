class Coche {
    marca: string;
    modelo: string;
    año: number;
    constructor(marca: string, modelo: string, año: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    }
    mostrarDetalles() {
    console.log(`${this.marca} ${this.modelo}, Año: ${this.año}`);
    }
}
let coche1 = new Coche("Toyota", "Corolla", 2020);
coche1.mostrarDetalles();