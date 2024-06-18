/*8- Crie uma matriz 4x4 com números aleatórios entre 0 e 20.
Em seguida, exiba a matriz na tela e encontre o maior
elemento da matriz e a posição em que ele se encontra.
ALUNO:João Gabriel Sabino de Araujo
*/
let matriz: number [][] = [];
let linha = 0;
let coluna = 0;
let maior = 0;

for(let l = 0; l < 3; l++){
    matriz[l] = [];

    for(let c = 0; c < 3; c++){

        let numero: number = Math.floor(Math.random() * 21);

        matriz[l][c] = numero;

        if(matriz[l][c] >= maior){
            maior = matriz[l][c];
            coluna = c;
            linha = l;
        }
    }
}
console.log(matriz)
console.log(`O maior número armazenado é ${maior}, no índice [${linha}, ${coluna}]`)