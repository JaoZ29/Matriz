/*
4- Altere o código dois(2) desse conteúdo para funcionar
com números, faça o teste se o laço de repetição
referente a linha da matriz chega criar a quarta linha, salve
dessa forma e anexe a atividade o arquivo .ts e um print
da tela do cmd(prompt command) com o resultado do
teste.
ALUNO:João Gabriel Sabino de Araujo
*/
console.clear();
var teclado = require("Prompt-sync")();
var matrizDois = new Array(3);
for (var i = 0; i < 3; i++) {
    matrizDois[i] = new Array(3);
    for (var j = 0; j < 4; j++) {
        var nome = parseFloat(teclado("Digite o nome que vai estar no endere\u00E7o [" + i + ", " + j + "] da matriz: "));
        matrizDois[i][j] = nome;
    }
}
console.log("matrizDois");
