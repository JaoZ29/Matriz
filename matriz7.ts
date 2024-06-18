/*7-Crie uma matriz 3x3 com números aleatórios de 0 a 9.
Em seguida, exiba a matriz na tela.
ALUNO:João Gabriel Sabino de Araujo
*/
console.clear();
let teclado = require(`Prompt-sync`)();
let matriz: number [][] = [];


for(let x = 0; x < 3; x++){
    matriz[x] = [];

    for(let y = 0; y < 3; y++){

        let numero: number = Math.floor(Math.random() * 10);
        
        if(numero >= 0 && numero <= 9){
            matriz[x][y] = numero 
        }
        else{
            console.log(`O número inserido deve ser de 0 a 9 
            para ser armazenado no índice, insira outro número`)
            y--
        }
    }
}
console.log(matriz);