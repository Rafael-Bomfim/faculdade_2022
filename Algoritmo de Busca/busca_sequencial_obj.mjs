/*
    Quando um algoritmo de busca precisa atuar sobre um vetor
    de objetos, a comparação não deve ser feita dentro da função
    que implementa o algoritmo. Em vez disso, recebemos uma outra
    função (externa) como parâmetro que resolverá a comparação.

    Essa função externa será chamada passando o objeto atual do vetor
    e esperará um retorno true, caso a função externa determine que
    o objeto atual contém o valor de busca, ou false, caso contrário.
*/
function buscaSequencial(vetor, fnComp) {
    // Percurso do vetor com for tradicional
    for(let i=0; i < vetor.length; i++) {
        // A comparação será feita pela função externa fnComp()
        //console.log('Primeiro elemento do vetor:', vetor[i])
        if(fnComp(vetor[i])) return i 
    }
    return -1 // valorBusca não existe em vetor
}

function comparaNome(obj) {
    //console.log('Objeto recebido pela função externa:', obj)
    return obj.first_name === "ALEXANDRE" //retorna o nome que procuramos
}

import {objNomes} from './listas/vetor-obj-nomes.mjs'

console.log('Posição de ALEXANDRE: ', buscaSequencial(objNomes, comparaNome))