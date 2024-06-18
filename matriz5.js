/* 5- Crie uma matriz 3x3 com entrada manual de
números. Em seguida, exiba a matriz na tela.
ALUNO:João Gabriel Sabino de Araujo
*/
console.clear();
var teclado = require("Prompt-sync")();
var matrizDois = [];
for (var x = 0; x < 3; x++) {
    matrizDois[x] = [];
    for (var y = 0; y < 3; y++) {
        var nome = parseFloat(teclado("Digite o nome que vai estar no endere\u00E7o [" + x + ", " + y + "] da matriz: "));
        matrizDois[x][y] = nome;
    }
}
console.log(matrizDois);
