function convertirAMayusculas(arreglo: string[]): string[] {
    return arreglo.map(cadena => cadena.toUpperCase());
}

// Ejemplo de uso:
const palabras: string[] = ["hola", "mundo", "typescript"];
const palabrasMayusculas = convertirAMayusculas(palabras);

console.log(palabrasMayusculas); // ["HOLA", "MUNDO", "TYPESCRIPT"]
