/*
CODIGO 2
ALUNO:João Gabriel Sabino de Araujo
*/
console.clear();
var teclado = require("Prompt-sync")();
var matrizDois = new Array(3);
for (var x = 0; x < 3; x++) {
    matrizDois[x] = new Array(3);
    for (var y = 0; y < 4; y++) {
        var nome = teclado("Digite o nome que vai estar no endere\u00E7o [" + x + ", " + y + "] da matriz: ");
        matrizDois[x][y] = nome;
    }
}
console.log(matrizDois);
