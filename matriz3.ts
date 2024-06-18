/*
3- Altere o código um(1) desse conteúdo para funcionar
com números e ter duas colunas.
ALUNO:João Gabriel Sabino de Araujo
*/
console.clear();
let teclado = require(`Prompt-sync`)();
let minhaMatriz: number[][] = [];


for (let x = 0; x < 2; x++) {
    minhaMatriz[x] = [];

    for (let y = 0; y < 4; y++) {
        let numero: number = parseFloat(teclado(`Digite o nome que vai estar no endereço [${x}, ${y}] da matriz: `));
        
        minhaMatriz[x][y] = numero;
    }
}
console.log(minhaMatriz);