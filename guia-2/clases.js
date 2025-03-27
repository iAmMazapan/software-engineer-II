var Coche = /** @class */ (function () {
    function Coche(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    Coche.prototype.mostrarDetalles = function () {
        console.log("".concat(this.marca, " ").concat(this.modelo, ", A\u00F1o: ").concat(this.año));
    };
    return Coche;
}());
var coche1 = new Coche("Toyota", "Corolla", 2020);
coche1.mostrarDetalles();
