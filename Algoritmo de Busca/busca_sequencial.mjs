/*
    ALGORITMO DE BUSCA SEQUENCIAL

    Percorre o vetor, verificando se cada um dos elementos corresponde
    ao valor de busca. Ao encontrar uma correspondência, retorna a posição
    onde o valor de busca está no vetor.

    Caso o valor de busca não exista no vetor, retorna o valor convencional
    -1.
*/
function buscaSequencial(vetor, valorBusca) {
    // Percurso do vetor com for tradicional
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] === valorBusca) return i //encontrou valor
    }
    return -1 // valorBusca não existe em vetor
}
// const frutas = ['laranja', 'maça', 'uva', 'pera', 'jaboticaba', 'limao', 'mamão']

// Número de comparações em um vetor de n elementos:
// Quando valorBusca é encontrado: pos + 1
// Quando valorBusca não é encontrado: n

// console.log('Posição de uva: ', buscaSequencial(frutas, 'uva'))
// console.log('Posição de uva: ', buscaSequencial(frutas, 'abacate'))
// console.log('Posição de uva: ', buscaSequencial(frutas, 'limão'))
// console.log('Posição de uva: ', buscaSequencial(frutas, 'limao'))

import { nomes } from './listas/vetor-nomes.mjs'

console.time('COMEÇO....')
console.log('Posição de GUSTAVO: ', buscaSequencial(nomes,'GUSTAVO'))
console.timeEnd('FIM')
