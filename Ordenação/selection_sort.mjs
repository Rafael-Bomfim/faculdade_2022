let pass, comp, troca
/*
    SELECTION SORT

    Trata-se de uma otimização do bubble sort, diminuindo drasticamente
    o número de trocas necessárias para fazer a ordenação.

    Isola um dos valores do vetor e procura pelo menor valor entre os
    restantes, promovendo a troca caso o primeiro valor seja maior que
    o segundo.

*/
function selection_sort(vetor) { 
    pass = 0
    comp = 0
    troca = 0
    // Loop posSel vai até a PENÚLTIMA posição do vetor
    for (let posSel = 0; posSel < vetor.length -1; posSel++) { //selecionar a primeira posição
        pass++
        let posMenor = posSel + 1 //a primeira posição depois da posição selecionada (posição menor)
        // Loop para procurar o menor valor no restante do vetor
        for (let i = posMenor+1; i < vetor.length; i++) {  //a primeira posição depois da posição menor
            if(vetor[posMenor] > vetor[i]) //testar se a posição menor é maior do que a posição a sua frente
                posMenor = i //se for verdadeira, a posição menor passa a ser a posição da frente
                comp++
        }
        // Se o valor em posMenor for menor que o valor em posSel,
        // efetua a troca
        if(vetor[posSel] > vetor[posMenor]){ //testa se a posição selecionada é maior que a posição menor
            [[vetor[posSel], vetor[posMenor]] = [vetor[posMenor], vetor[posSel]]] //se verdadeira, inverte as posições
            troca++
        }     
    }
}

import {nomes} from './listas/nomes-desord.mjs'

selection_sort(nomes)

console.log(nomes)
console.log('Passou', pass, 'vezes')
console.log('Comparou', comp, 'vezes')
console.log('Trocou', troca, 'vezes')
