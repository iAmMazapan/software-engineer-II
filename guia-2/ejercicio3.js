function convertirAMayusculas(arreglo) {
    return arreglo.map(function (cadena) { return cadena.toUpperCase(); });
}
// Ejemplo de uso:
var palabras = ["hola", "mundo", "typescript"];
var palabrasMayusculas = convertirAMayusculas(palabras);
console.log(palabrasMayusculas); // ["HOLA", "MUNDO", "TYPESCRIPT"]
