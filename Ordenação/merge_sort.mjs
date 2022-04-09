/*
    MERGE SORT

    No processo de ordenação, esse algoritmo "desmonta" o vetor original
    contendo N elementos até obter N vetores de apenas um elemento cada um.
    Em seguida, usando a técnica de mesclagem (merge), "remonta" o vetor,
    dessa vez com os elementos já em ordem.
*/
function mergeSort(vetor) {
    // Para ser dividido, um vetor precisa ter pelo menos 2 elementos
    if (vetor.length < 2) {
        return vetor  // Sai da função sem fazer nada
    }
    let meio = Math.floor(vetor.length / 2) // Acha o meio (aproximado) do vetor
    // slice() divide um vetor da primeira posição informada (inclusive)
    // até a última posição informada (exclusive)
    let esquerda = vetor.slice(0, meio)
    // Quando o segundo parâmetro de slice() é omitido, a fatia vai
    // da posição informada até o final do vetor
    let direita = vetor.slice(meio)
    //console.log({vetEsq, vetDir})

    // Chamadas recursivas ao mergeSort
    esquerda = mergeSort(esquerda)
    direita = mergeSort(direita)

    // Mesclagem ordenada de vetEsq com vetDir
    let resultado = []
    let posEsq = 0
    let posDir = 0

    while (posEsq < esquerda.length && posDir < direita.length) {
        // O menor elemento é o do vetor esquerdo
        if (esquerda[posEsq] < direita[posDir]) {
            resultado.push(esquerda[posEsq])
            posEsq++
        } else {
            // O menor elemento é o do vetor direito
            resultado.push(direita[posDir])
            posDir++
        }
    }
    // Determinar qual dos vetores tem sobra
    let sobra
    // Sobra à esquerda
    if (posEsq < posDir) {
        // Copia para a sobra todos os elementos a partir de posEsq
        // até o fim de vetEsq
        sobra = esquerda.slice(posEsq)
        // Sobra à direita
    } else { 
        // Copia para a sobra todos os elementos a partir de posDir
        // até o fim de vetDir
        sobra = direita.slice(posDir) 
    }
    // O vetor final ordenado será a concatenação de vetRes + sobra
    return [...resultado, ...sobra]
}

//let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]

import {nomes} from './listas/nomes-desord.mjs'

//let nomesOrd = mergeSort(nomes)

//let numsOrd = mergeSort(nums)
//console.log({numsOrd})
//console.log({nomesOrd})
/********************************************************** */

// Quando temos algoritmos de ordenação recursivos, as variáveis
// de estatística não podem ser reiniciadas dentro da própria
// função do algoritmo. Portanto, devemos zerá-las antes de fazer
// uma nova chamada à função

console.time('Tempo de ordenação')
let nomesOrd = mergeSort(nomes)
let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Tempo de ordenação')

console.log(nomesOrd)
console.log({comps, divisoes, juncoes, memoriaMB})