/* 5- Crie uma matriz 3x3 com entrada manual de
números. Em seguida, exiba a matriz na tela.
ALUNO:João Gabriel Sabino de Araujo
*/
console.clear();
let teclado = require(`Prompt-sync`)();
let matrizDois: number[][] = [];


for (let x = 0; x < 2; x++) {
    matrizDois[x] = [];

    for (let y = 0; y < 2; y++) {
        let numeros: number =parseFloat(teclado(`Digite o nome que vai estar no endereço [${x}, ${y}] da matriz: `));
        
        matrizDois[x][y] = numeros;
    }
}
console.log(matrizDois);