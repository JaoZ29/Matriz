console.clear();
var teclado = require("Prompt-sync")();
var matriz = [];
for (var x = 0; x < 3; x++) {
    matriz[x] = [];
    for (var y = 0; y < 3; y++) {
        var numero = Math.floor(Math.random() * 10);
        if (numero >= 0 && numero <= 9) {
            matriz[x][y] = numero;
        }
        else {
            console.log("O n\u00FAmero inserido deve ser de 0 a 9 \n            para ser armazenado no \u00EDndice, insira outro n\u00FAmero");
            y--;
        }
    }
}
console.log(matriz);
