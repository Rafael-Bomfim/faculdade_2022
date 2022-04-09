let trocou, pass, comp
/*
    fnComp() passará à função externa os dois elementos adjacentes do vetor
    e retornará:
    - true: se o primeiro elemento for maior que o segundo
    - false: caso contrário
*/
function bubbleSort2(vetor, fnComp) {
    let troca //variável para verificar se houve troca de posição
    trocou = 0
    pass = 0
    comp = 0
  do{ 
    troca = false; //iniciar a variável como false para ela ser o ponto de saída
    pass++
    // Percurso for tradicional até a PENÚLTIMA posição do vetor
    for(let i = 0; i < vetor.length -1; i++) { //percorre as posições do vetor
      comp++
      // Efetua a troca entre os elementos por desestruturação
     if (fnComp(vetor[i], vetor[i+1])) { 
      [[vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]]] 
      troca = true
      trocou++
     }
    }
  }
  while(troca); //se não houver troca, troca = false
}
// Ordenando por nome_motorista em ordem DECRESCENTE
// bubbleSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista < elem2.nome_motorista)

// Ordenando por nome_motorista em ordem DECRESCENTE ignorando acentos
// bubbleSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista.localeCompare(elem2.nome_motorista, 'pt-br') <= 0)  // LEEEEENTO

// Ordenação em dois níveis: primeiro por razao_social e depois por nome_motorista
// bubbleSort(objMotoristas, (elem1, elem2) => {
//     if(elem1.razao_social === elem2.razao_social) {     // Mesma empresa
//         // Desempate é feito pelo nome do motorista
//         return elem1.nome_motorista > elem2.nome_motorista
//     }
//     // Empresas diferentes, comparação direta de razao_social
//     else return elem1.razao_social > elem2.razao_social
// })


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