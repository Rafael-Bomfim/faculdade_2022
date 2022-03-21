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
     if (fnComp(vetor[i], vetor[i+1])) { //testa os dois elementos que foram passados como parâmetros
      [[vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]]] //trocando a ordem dos elementos
      troca = true
      trocou++
     }
    }
  }
  while(troca); //se não houver troca, troca = false
}

import {objMotoristas} from './listas/motoristas-obj-desord.mjs'

//bubbleSort2(objMotoristas, (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista) //passagem da função fnComp já definindo seu parâmetros

// console.log(objMotoristas)
// console.log('Passou:', pass, 'vezes')
// console.log('Comparou:', comp, 'vezes')
// console.log('Trocou:', trocou, 'vezes')

bubbleSort2(objMotoristas, (elem1, elem2) => {
  if(elem1.razao_social === elem2.razao_social) { //se houver duas razões sociais iguais na ordenação
    return elem1.nome_motorista > elem2.nome_motorista //o desempate será pelo nome do motorista
  }
  else return elem1.razao_social > elem2.razao_social //se não só retorna as razões sociais
})

console.log(objMotoristas)