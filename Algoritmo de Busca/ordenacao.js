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
let contador 
function bubbleSort2(vetor) {
    let dedo
    contador = 0
  do{
    dedo = false;
    
    for(let i = 0; i < vetor.length; i++) {
        
      if(vetor[i] > vetor[i+1]) {
        [vetor[i], vetor[i+1]] = [vetor[i + 1], vetor[i]]
        dedo = true;
        contador++
      }
    }
  }
  while(dedo);
}

let itens = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11];
bubbleSort2(itens)
console.log('Números ordenados:', itens);
console.log(contador)