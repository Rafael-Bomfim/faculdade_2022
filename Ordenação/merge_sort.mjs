function mergeSort(vetor) {
    if (vetor.length < 2) {
        return vetor
    }
    let meio = Math.floor(vetor.length / 2)
    let esquerda = vetor.slice(0, meio)
    let direita = vetor.slice(meio)

    esquerda = mergeSort(esquerda)
    direita = mergeSort(direita)


    let resultado = []
    let posEsq = 0
    let posDir = 0

    while (posEsq < esquerda.length && posDir < direita.length) {
        if (esquerda[posEsq] < direita[posDir]) {
            resultado.push(esquerda[posEsq])
            posEsq++
        } else {
            resultado.push(direita[posDir])
            posDir++
        }
    }
    let sobra
    if (posEsq < esquerda.length) {
        sobra = esquerda.slice(posEsq)
    } else { 
        sobra = direita.slice(posDir) 
    }

    return [...resultado, ...sobra]
}

let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]

let numsOrd = mergeSort(nums)
console.log({numsOrd})