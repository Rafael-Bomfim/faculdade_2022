let pass, comp, troca
function selectionSort(vetor, fnComp) { 
    pass = 0
    comp = 0
    troca = 0
    
    for (let posSel = 0; posSel < vetor.length -1; posSel++) {
        pass++
        let posMenor = posSel + 1
        for (let i = posMenor+1; i < vetor.length; i++) { 
            if(fnComp(vetor[posMenor], vetor[i])){
                posMenor = i
                comp++
            }
        }
        if(fnComp(vetor[posSel], vetor[posMenor])){
            [[vetor[posSel], vetor[posMenor]] = [vetor[posMenor], vetor[posSel]]]
            troca++
        }     
    }
}

import {objMotoristas} from './listas/motoristas-obj-desord.mjs'

selectionSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista)

console.log(objMotoristas)
console.log('Passou', pass, 'vezes')
console.log('Comparou', comp, 'vezes')
console.log('Trocou', troca, 'vezes')