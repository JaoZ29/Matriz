var matriz = [];
var linha = 0;
var coluna = 0;
var maior = 0;
for (var x = 0; x < 4; x++) {
    matriz[x] = [];
    for (var y = 0; y < 4; y++) {
        var numero = Math.floor(Math.random() * 21);
        matriz[x][y] = numero;
        if (matriz[x][y] >= maior) {
            maior = matriz[x][y];
            coluna = y;
            linha = x;
        }
    }
}
console.log(matriz);
console.log("O maior n\u00FAmero armazenado \u00E9 " + maior + ", no \u00EDndice [" + linha + ", " + coluna + "]");
