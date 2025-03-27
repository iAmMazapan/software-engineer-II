class Empleado {
    nombre: string;
    puesto: string;
    salario: number;
    constructor(nombre: string, puesto: string, salario: number) {
    this.nombre = nombre;
    this.puesto = puesto;
    this.salario = salario;
    }
    mostrarDetalles() {
    console.log(`${this.nombre} ${this.puesto}, salario: ${this.salario}`);
    }
}
let empleado1 = new Empleado("Piero", "jefecito", 2020);
empleado1.mostrarDetalles();