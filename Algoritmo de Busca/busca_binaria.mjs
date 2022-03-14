//let num = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99]

function buscaBinaria(vetor, valorBusca) {
    let ini = 0
    let fim = vetor.length -1

    while(fim >= ini) {
        let meio = Math.floor((ini + fim) / 2) //resultado da divisão sempre será um número inteiro

        if(valorBusca === vetor[meio]) {
            return meio
        }
        else if(valorBusca > vetor[meio]) {
            ini = meio +1
        }
        else {
            fim = meio -1
        }
    }
    return -1
}
//console.log('Posição de 22:', buscaBinaria(num, 88))

import {nomes} from './listas/vetor-nomes.mjs'

console.log('Posição de ALEXANDRE: ', buscaBinaria(nomes, 'ALEXANDRE'))