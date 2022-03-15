let trocou, pass, comp

function bubbleSort2(vetor, fnComp) {
    let troca //variável para verificar se houve troca de posição
    trocou = 0
    pass = 0
    comp = 0
  do{ 
    troca = false; //iniciar a variável como false para ela ser o ponto de saída
    pass++
    for(let i = 0; i < vetor.length -1; i++) { //percorre as posições do vetor
      comp++
     if (fnComp(vetor[i], vetor[i+1])) {
      [[vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]]]
      troca = true
      trocou++
     }
    }
  }
  while(troca); //se não houver troca, troca = false
}

import {objMotoristas} from './listas/motoristas-obj-desord.mjs'

bubbleSort2(objMotoristas, (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista)

console.log(objMotoristas)
console.log('Passou:', pass, 'vezes')
console.log('Comparou:', comp, 'vezes')
console.log('Trocou:', trocou, 'vezes')