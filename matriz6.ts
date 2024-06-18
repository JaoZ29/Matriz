/*6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,
exiba a matriz na tela.
ALUNO:João Gabriel Sabino de Araujo
*/
console.clear();
let teclado = require(`Prompt-sync`)();
let matriz: number [][] = [];


for(let l = 0; l < 2; l++){
    matriz[l] = [];

    for(let c = 0; c < 2; c++){

        let numero: number = parseFloat(teclado(`Digite um némero de 0 a 9`));

        if(numero >= 0 && numero <= 9){

            matriz[l][c] = numero;
        }
        else{
            console.log(`O número inserido deve ser de 0 a 9 
            para ser armazenado no índice, insira outro número`);
            c--;
        }
    }
}
console.log(matriz);