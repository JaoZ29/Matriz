/*
CODIGO 2 
ALUNO:João Gabriel Sabino de Araujo
*/
console.clear();
let teclado =require (`Prompt-sync`)();
let matrizDois: string[][] = new Array(3);


for (let x = 0; x < 3; x++) {
     matrizDois[x]= new Array(3);

    for (let y = 0; y < 4; y++) {
     let nome: string = teclado (`Digite o nome que vai estar no endereço [${x}, ${y}] da matriz: `);
    
      matrizDois[x][y] = nome;
    
      }
    } 
  
    console.log(matrizDois);