function quickSort(vetor, ini = 0, fim = vetor.length - 1) { //inicio e fim do vetor
    if (fim <= ini) { //se o vetor tiver somente um elemento
        return vetor
    }
    if (ini < fim) {
        let pivo = vetor[fim];
        let i = ini - 1;
        for (let j = ini; j < fim; j++) {
            if (vetor[j] <= pivo) {
                i++;
                [vetor[i], vetor[j]] = [vetor[j], vetor[i]];
            }
        }
        [vetor[i + 1], vetor[fim]] = [vetor[fim], vetor[i + 1]];
        quickSort(vetor, ini, i);
        quickSort(vetor, i + 2, fim);
    }
    return vetor;
}

// let nums = [2,5,7,1,6,3,4]
// quickSort(nums)
// console.log(nums)

import {nomes} from './listas/nomes-desord.mjs'
quickSort(nomes)
console.log(nomes)