function quickSort(vetor, fnComp, ini = 0, fim = vetor.length - 1) { //inicio e fim do vetor
    if (fim <= ini) { //se o vetor tiver somente um elemento
        return vetor
    }
    if (ini < fim) {
        let pivo = vetor[fim];
        let i = ini - 1;
        for (let j = ini; j < fim; j++) {
            if (fnComp(vetor[j] <= pivo)) {
                i++;
                [vetor[i], vetor[j]] = [vetor[j], vetor[i]];
            }
        }
        [vetor[i + 1], vetor[fim]] = [vetor[fim], vetor[i + 1]];
        quickSort(vetor, fnComp, ini, i);
        quickSort(vetor, fnComp, i + 2, fim);
    }
    return vetor;
}

import {objMotoristas} from './listas/motoristas-obj-desord.mjs'

quickSort(objMotoristas, (elem1, elem2) => {
    if(elem1.razao_social === elem2.razao_social) {
        return elem1.nome_motorista > elem2.nome_motorista
    }
    else return elem1.razao_social > elem2.razao_social
})
console.log(objMotoristas)