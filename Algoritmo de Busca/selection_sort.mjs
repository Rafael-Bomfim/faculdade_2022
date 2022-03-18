let pass, comp, troca
function selection_sort(vetor) { 
    pass = 0
    comp = 0
    troca = 0
    for (let posSel = 0; posSel < vetor.length -1; posSel++) {
        pass++
        let posMenor = posSel + 1
        for (let i = posMenor+1; i < vetor.length; i++) { 
            if(vetor[posMenor] > vetor[i])
                posMenor= i
                comp++
        }
        if(vetor[posSel] > vetor[posMenor]){
            [[vetor[posSel], vetor[posMenor]] = [vetor[posMenor], vetor[posSel]]]
            troca++
        }     
    }
}

import {nomes} from './listas/nomes-desord.mjs'

selection_sort(nomes)

console.log(nomes)
