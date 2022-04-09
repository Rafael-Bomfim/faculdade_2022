//let num = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99]
/***************************
 * BUSCA BINÁRIA
 * 
 * Requer um conjunto de dados ORDENADO.
 * Atua dividindo o vetor sucessivamente em metades aproximadas,
 * até que o valor de busca seja localizado, ou que o ponteiro
 * de fim acabe antes do ponteiro de início. Essa última situação
 * indica que o valor de busca não existe no conjunto.
*/
function buscaBinaria(vetor, valorBusca) {
    let ini = 0
    let fim = vetor.length -1

    while(fim >= ini) {
        // Math.floor() retira as casas decimais de um número
        let meio = Math.floor((ini + fim) / 2) 
        // Se o valor de busca for igual ao valor do vetor
        // na posição do meio, encontramos o que procuramos
        // e retornamos a posição onde encontramos
        if(valorBusca === vetor[meio]) { //se o valor da busca estiver no meio do vetor
            return meio 
        }
        // Senão, se o valor de busca for maior que o valor
        // do meio do vetor, descartamos a metade esquerda
        // do vetor trazendo o ponteiro ini para meio + 1
        else if(valorBusca > vetor[meio]) { //se o valor da busca estiver para a direita do meio do vetor
            ini = meio +1
        }
        // Por fim, caso o valor de busca seja menor que o
        // valor do meio do vetor, descartamos a metade direita
        // do vetor trazendo o ponteiro fim para meio - 1
        else { //se o valor da busca estiver para a esquerda do meio do vetor
            fim = meio -1
        }
    }
    // Se chegamos até aqui, significa que fim < ini e, portanto,
    // o valor de busca não existe no vetor. Para indicar isso,
    // retornamos o valor convencional -1
    return -1
}
//console.log('Posição de 22:', buscaBinaria(num, 88))

import {nomes} from './listas/vetor-nomes.mjs'

console.log('Posição de ALEXANDRE: ', buscaBinaria(nomes, 'ALEXANDRE'))