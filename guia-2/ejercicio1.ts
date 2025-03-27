function maximoNumero(arreglo: number[]): number {
    let maximo: number = arreglo[0]; 

    for (let i = 1; i < arreglo.length; i++) {
        maximo = Math.max(maximo, arreglo[i]);
    }
    return maximo;
}

// Leer datos desde el usuario
import * as readlineSync from "readline-sync";

let n: number = parseInt(readlineSync.question("Ingrese el tamaño de la lista: "));

let a: number[] = [];

for (let i = 0; i < n; i++) {
    let num = parseFloat(readlineSync.question(`Ingrese el número ${i + 1}: `));
    a.push(num);
}

console.log("El número máximo es:", maximoNumero(a));
