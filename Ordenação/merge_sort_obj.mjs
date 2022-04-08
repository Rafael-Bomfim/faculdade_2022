function mergeSort(vetor, fnComp) {
    if (vetor.length < 2) {
        return vetor
    }
    let meio = Math.floor(vetor.length / 2)
    let esquerda = vetor.slice(0, meio)
    let direita = vetor.slice(meio)

    esquerda = mergeSort(esquerda, fnComp)
    direita = mergeSort(direita, fnComp)


    let resultado = []
    let posEsq = 0
    let posDir = 0

    while (posEsq < esquerda.length && posDir < direita.length) {
        if (fnComp(esquerda[posEsq], direita[posDir])) {
            resultado.push(esquerda[posEsq])
            posEsq++
        } else {
            resultado.push(direita[posDir])
            posDir++
        }
    }
    let sobra
    if (posEsq < posDir) {
        sobra = esquerda.slice(posEsq)
    } else { 
        sobra = direita.slice(posDir) 
    }

    return [...resultado, ...sobra]
}

import {objMotoristas} from './listas/motoristas-obj-desord.mjs'

let motoristasOrd = mergeSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista.localeCompare(elem2.nome_motorista) <= 0) 

console.log(motoristasOrd)