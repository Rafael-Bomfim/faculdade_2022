function buscaSequencial(vetor, valorBusca) {
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] === valorBusca) 
        return i //encontrou valor
    }
    return -1 //se o valor busca não existir
}
// const frutas = ['laranja', 'maça', 'uva', 'pera', 'jaboticaba', 'limao', 'mamão']

// console.log('Posição de uva: ', buscaSequencial(frutas, 'uva'))
// console.log('Posição de uva: ', buscaSequencial(frutas, 'abacate'))
// console.log('Posição de uva: ', buscaSequencial(frutas, 'limão'))
// console.log('Posição de uva: ', buscaSequencial(frutas, 'limao'))

import { nomes } from './listas/vetor-nomes.mjs'

console.time('COMEÇO....')
console.log('Posição de GUSTAVO: ', buscaSequencial(nomes,'GUSTAVO'))
console.timeEnd('FIM')
