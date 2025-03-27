function maximoNumero(arreglo) {
    var maximo = arreglo[0];
    for (var i = 1; i < arreglo.length; i++) {
        maximo = Math.max(maximo, arreglo[i]);
    }
    return maximo;
}
console.log(maximoNumero([2, 3, 1, 0, 3, -1]));
