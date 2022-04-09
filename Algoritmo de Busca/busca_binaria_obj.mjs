function buscaBinaria(vetor, fnComp) {
    let ini = 0
    let fim = vetor.length -1

    while(fim >= ini) {
        let meio = Math.floor((ini + fim) / 2) //resultado da divisão sempre será um número inteiro
        switch(fnComp(vetor[meio])) {
            case 0: // Encontrado o valor de busca
                return meio //se o valor de busca estiver no meio
            case 1: // Valor busca > valor do meio do vetor
                ini = meio +1 
                break 
            default:
                fim = meio -1 // -1, valor de busca < valor do meio do vetor
        }
    }
    // Se chegamos até aqui, significa que fim < ini e, portanto,
    // o valor de busca não existe no vetor. Para indicar isso,
    // retornamos o valor convencional -1
    return -1
}
/*
    Na busca binária, a comparação entre o valor de busca e o valor
    que está no meio do vetor tem três possibilidades:
    1ª -> ambos os valores são IGUAIS
    2ª -> o valor de busca é MAIOR que o valor do meio do vetor
    3ª -> o valor de busca é MENOR que o valor do meio do vetor

    Para usar a busca binária em um VETOR DE OBJETOS, precisamos
    transferir a comparação para uma função externa que retorne um
    dos três valores:
    0 -> caso ambos os valores sejam IGUAIS
    1 -> caso o valor de busca seja MAIOR que o valor do meio do vetor
    -1 -> caso o valor de busca seja MENOR que o valor do meio do vetor
*/

/*function comparar(valorMeio) {
    if('FAUSTO' === valorMeio.first_name) return 0
    else if('FAUSTO' > valorMeio.first_name) return 1
    else return -1
}*/
function comparar(valorMeio, valorBusca = 'ALEXANDRE') { //parametro já com o valor definido
    if(valorBusca === valorMeio.first_name) return 0 //se o valor da busca estiver no meio do vetor retorna 0
    else if(valorBusca > valorMeio.first_name) return 1 //se o valor da busca estiver para a direita do meio do vetor retorna 1
    else return -1 //se o valor da busca estiver para a esquerda do meio do vetor retorna -1
}

import {objNomes} from './listas/vetor-obj-nomes.mjs'

console.log('Posição de first_name === ALEXANDRE: ', buscaBinaria(objNomes, comparar))