function buscaBinaria(vetor, fnComp) {
    let ini = 0
    let fim = vetor.length -1

    while(fim >= ini) {
        let meio = Math.floor((ini + fim) / 2) //resultado da divisão sempre será um número inteiro
        switch(fnComp(vetor[meio])) {
            case 0:
                return meio //se o valor de busca estiver no meio
            case 1:
                ini = meio +1 //se o valor de busca estiver para a direita do meio
                break 
            default:
                fim = meio -1 //se o valor de busca estiver para
        }
    }
    return -1
}

function comparar(valorMeio, valorBusca = 'ALEXANDRE') { //parametro já com o valor definido
    if(valorBusca === valorMeio.first_name) return 0 //se o valor da busca estiver no meio do vetor retorna 0
    else if(valorBusca > valorMeio.first_name) return 1 //se o valor da busca estiver para a direita do meio do vetor retorna 1
    else return -1 //se o valor da busca estiver para a esquerda do meio do vetor retorna -1
}

import {objNomes} from './listas/vetor-obj-nomes.mjs'

console.log('Posição de first_name === ALEXANDRE: ', buscaBinaria(objNomes, comparar))