function maximoNumero(arreglo: number[]): number {
    let maximo: number = arreglo[0]; 

    for (let i = 1; i < arreglo.length; i++) {
        maximo = Math.max(maximo, arreglo[i]);
    }
    return maximo;
}

console.log(maximoNumero([2, 3, 1, 0, 3,-1]));
