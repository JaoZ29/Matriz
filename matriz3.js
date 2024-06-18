console.clear();
var teclado = require("Prompt-sync")();
var minhaMatriz = [];
for (var x = 0; x < 2; x++) {
    minhaMatriz[x] = [];
    for (var y = 0; y < 4; y++) {
        var numero = parseFloat(teclado("Digite o nome que vai estar no endere\u00E7o [" + x + ", " + y + "] da matriz: "));
        minhaMatriz[x][y] = numero;
    }
}
console.log(minhaMatriz);
