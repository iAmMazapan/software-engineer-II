var Empleado = /** @class */ (function () {
    function Empleado(nombre, puesto, salario) {
        this.nombre = nombre;
        this.puesto = puesto;
        this.salario = salario;
    }
    Empleado.prototype.mostrarDetalles = function () {
        console.log("".concat(this.nombre, " ").concat(this.puesto, ", salario: ").concat(this.salario));
    };
    return Empleado;
}());
var empleado1 = new Empleado("Piero", "jefecito", 2020);
empleado1.mostrarDetalles();
