//let contador 
// function bubbleSort(itens) { 
//     contador = 0 
//     for (let i = 0; i < itens.length; i++) {
//         for (let j = 0; j < (itens.length - i - 1); j++) { 
//             //contador++
//             if(itens[j] > itens[j+1]) {
//                 [[itens[j], itens[j+1]] = [itens[j+1], itens[j]]] 
//             }
//         }        
//     }
// }

// let vetor = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]; 

// bubbleSort(vetor)
// console.log('Números ordenados:', vetor);
//console.log(contador)

//let itens = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11];
/*
    BUBBLE SORT
    Percorre o conjunto de dados, comparando o elemento atual com o seu
    sucessor e promovendo a troca entre eles caso o primeiro seja maior
    que o segundo.
    Faz isso em várias passadas, até, que, na última delas, nenhuma troca
    tenha sido registrada.
*/
let trocou, pass, comp

function bubbleSort2(vetor) {
    let troca //variável para verificar se houve troca de posição
    trocou = 0
    pass = 0
    comp = 0
  do{ 
    troca = false; //iniciar a variável como false para ela ser o ponto de saída
    pass++
    for(let i = 0; i < vetor.length -1; i++) { //percorre as posições do vetor
      comp++
      if(vetor[i] > vetor[i+1]) { //se a posição for maior que a da frente
        [vetor[i], vetor[i+1]] = [vetor[i + 1], vetor[i]] //troca a ordem
        troca = true; //trocou
        trocou++
      }
    }
  }
  while(troca); //se não houver troca, troca = false
}
// Pior caso
// let nums = [ 99, 88, 77, 66, 55, 44, 33, 22, 11, 0 ]

// Melhor caso
//let nums = [ 0, 11, 22, 33, 44, 55, 66, 77, 88, 99 ]
// bubbleSort2(itens)

// console.log('Números ordenados:', itens);
// console.log('Passou:', pass, 'vezes')
// console.log('Comparou:', comp, 'vezes')
// console.log('Trocou:', trocou, 'vezes')

import {nomes} from './listas/nomes-desord.mjs'

bubbleSort2(nomes)

console.log(nomes)
console.log('Passou:', pass, 'vezes')
console.log('Comparou:', comp, 'vezes')
console.log('Trocou:', trocou, 'vezes')