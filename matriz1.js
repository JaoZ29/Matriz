/*
CODIGO 1
ALUNO:João Gabriel Sabino de Araujo
*/
console.clear();
var teclado = require("Prompt-sync")();
var minhaMatriz = [];
var linha = 2;
var coluna = 3; //declarando matriz
// z percorre as linhas
for (var z = 0; z < linha; z++) {
    //Cria um array vazio para preencher a linha correspondente ao z
    minhaMatriz[z] = [];
    for (var x = 0; x < coluna; x++) {
        //Atribuição via entrada de dados manual na variavel nome
        var nome = teclado("Digite o nome que vai estar no endere\u00E7o [" + z + ", " + x + "]\n                                da matriz: ");
        // Atribui nome na minhaMatriz do endereço dado por z e x
        minhaMatriz[z][x] = nome;
    }
}
// imprime a matriz
console.log(minhaMatriz);
