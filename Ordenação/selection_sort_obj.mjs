let pass, comp, troca
function selectionSort(vetor, fnComp) { 
    pass = 0
    comp = 0
    troca = 0
    // Loop posSel vai até a PENÚLTIMA posição do vetor
    for (let posSel = 0; posSel < vetor.length -1; posSel++) {
        pass++
        let posMenor = posSel + 1
        // Loop para procurar o menor valor no restante do vetor
        for (let i = posMenor+1; i < vetor.length; i++) { 
            // if(vetor[posMenor] > vetor[i]) posMenor = i
            if(fnComp(vetor[posMenor], vetor[i])){
                posMenor = i
                comp++
            }
            // Se o valor em posMenor for menor que o valor em posSel,
        // efetua a troca
        }
        // if(vetor[posSel] > vetor[posMenor]) {
        if(fnComp(vetor[posSel], vetor[posMenor])){
            [[vetor[posSel], vetor[posMenor]] = [vetor[posMenor], vetor[posSel]]]
            troca++
        }     
    }
}
// Ordenando por nome_motorista
//selectionSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista)

// Ordenando por nome_motorista em ordem DECRESCENTE
// selectionSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista < elem2.nome_motorista)

// Ordenando por nome_motorista em ordem DECRESCENTE ignorando acentos
// selectionSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista.localeCompare(elem2.nome_motorista, 'pt-br') <= 0)  // LEEEEENTO

// Ordenação em dois níveis: primeiro por razao_social e depois por nome_motorista

import {objMotoristas} from './listas/motoristas-obj-desord.mjs'

selectionSort(objMotoristas, (elem1, elem2) => {
    if(elem1.razao_social === elem2.razao_social) { //se houver duas razões sociais iguais na ordenação
      return elem1.nome_motorista > elem2.nome_motorista //o desempate será pelo nome do motorista
    }
    else return elem1.razao_social > elem2.razao_social //se não só retorna as razões sociais
})

console.log(objMotoristas)
console.log('Passou', pass, 'vezes')
console.log('Comparou', comp, 'vezes')
console.log('Trocou', troca, 'vezes')