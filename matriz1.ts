/*
CODIGO 1
ALUNO:João Gabriel Sabino de Araujo
*/
console.clear();
let teclado = require(`Prompt-sync`)();
let minhaMatriz: string[][] = []; 
let linha = 2
let coluna= 3 //declarando matriz
// z percorre as linhas
for(let z = 0; z < linha; z++) {
    //Cria um array vazio para preencher a linha correspondente ao z
minhaMatriz[z] = [];

for (let x = 0; x < coluna; x++) {
    //Atribuição via entrada de dados manual na variavel nome
    let nome:string = teclado(`Digite o nome que vai estar no endereço [${z}, ${x}]
                                da matriz: `);
    // Atribui nome na minhaMatriz do endereço dado por z e x
    minhaMatriz[z][x] = nome
  }
}
// imprime a matriz
console.log(minhaMatriz)
