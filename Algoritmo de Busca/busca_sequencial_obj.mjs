function buscaSequencial(vetor, fnComp) {
    for(let i=0; i < vetor.length; i++) {
        if(fnComp(vetor[i])) return i // achar o nome que procuramos dentro do vetor e retorná-lo
    }
    return -1
}

function comparaNome(obj) {
    return obj.first_name === "ALEXANDRE" //retorna o nome que procuramos
}

import {objNomes} from './listas/vetor-obj-nomes.mjs'

console.log('Posição de ALEXANDRE: ', buscaSequencial(objNomes, comparaNome))