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
let teclado =require (`Prompt-sync`)();

let matrizDois: number[][] = new Array(3);

for (let x = 0; x < 3; x++) {
   
    matrizDois[x]= new Array(3);
    
    for (let y = 0; y < 4; y++) {
      
     let nome: number = parseFloat(teclado (`Digite o nome que vai estar no endereço [${x}, ${y}] da matriz: `));
    
        matrizDois[x][y] = nome;
    }  
} 
    console.log(matrizDois);