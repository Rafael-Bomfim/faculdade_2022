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

let itens = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11];
let trocou
let pass
let comp 

function bubbleSort2(vetor) {
    let troca //variável para verificar se houve troca de posição
    trocou = 0
    pass = 0
    comp = 0
  do{ 
    troca = false; //iniar a variável como false para ela ser o ponto de saída
    pass++
    for(let i = 0; i < vetor.length -1; i++) { //percorre as posições do vetor
      comp++
      if(vetor[i] > vetor[i+1]) { //se a posição for maior que a da frente
        [vetor[i], vetor[i+1]] = [vetor[i + 1], vetor[i]] //troca a ordem
        troca = true;
        trocou++
      }
    }
  }
  while(troca); //se não houver troca, troca = false
}


bubbleSort2(itens)

console.log('Números ordenados:', itens);
console.log('Passou:', pass, 'vezes')
console.log('Comparou:', comp, 'vezes')
console.log('Trocou:', trocou, 'vezes')
