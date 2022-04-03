let alunos = []
//Cadastrar alunos
function cadastrarAluno(alunos){
    let quantidade = Number(prompt('Insira a quantidade de alunos que deseja cadastrar agora:'))

    for(let i = 0; i < quantidade; i++){
        let objeto = {
            nome: prompt(`Digite o nome do Aluno:`).toUpperCase(),
            ra: Number(prompt(`Digite o RA do Aluno:`)),
            idade: Number(prompt(`Digite a idade do Aluno:`)),
            sexo: prompt(`Digite o sexo do Aluno: (M - para masculino) e (F - para feminino)`).toUpperCase(),
            media: Number(prompt(`Digite a média do Aluno:`)),
            resultado: prompt(`Digite o resultado do Aluno: (A - para aprovado) e (R - para reprovado)`).toUpperCase()
        }
        alunos[i] = objeto
    }
    alert(`Alunos cadastrados com sucesso!!!`)
    for(let i = 0; i < alunos.length; i++){
        alert(`Nome: ${alunos[i].nome} \nRa: ${alunos[i].ra} \nIdade: ${alunos[i].idade} \nSexo: ${alunos[i].sexo} \nMédia: ${alunos[i].media} \nResultado: ${alunos[i].resultado}`
        )
    }
}
//FUNÇÃO PARA CHAMAR A FUNÇÃO DE CADASTRO
function opc1() {
    cadastrarAluno(alunos)
}
//Relatório de Alunos em ordem crescente por Nome
function relatNome(vetor, fnComp) {
    let troca //variável para verificar se houve troca de posição
    do{ 
        troca = false; //iniciar a variável como false para ela ser o ponto de saída
        for(let i = 0; i < vetor.length -1; i++) { //percorre as posições do vetor
            if (fnComp(vetor[i], vetor[i+1])) { //testa os dois elementos que foram passados como parâmetros
            [[vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]]] //trocando a ordem dos elementos
            troca = true
            }
        }
    }
    while(troca); //se não houver troca, troca = false
}
//FUNÇÃO PARA CHAMAR A FUNÇÃO DE RELATÓRIO DE ALUNOS ORDENADOS POR NOME
function opc2() {
    relatNome(alunos, (elem1, elem2) => {
        if(elem1.nome === elem2.nome) { //se houver dois nomes iguais na ordenação
          return elem1.ra > elem2.ra //o desempate será pelo ra
        }
        else return elem1.nome > elem2.nome //se não só retorna as razões sociais
    })
    for(let i = 0; i < alunos.length; i++){
        alert(`Nome: ${alunos[i].nome} \nRa: ${alunos[i].ra} \nIdade: ${alunos[i].idade} \nSexo: ${alunos[i].sexo} \nMédia: ${alunos[i].media} \nResultado: ${alunos[i].resultado}`
        )
    }
}
//Relatório de Alunos em ordem decrescente por RA
function relatRa(vetor, fnComp) {
    let troca1 //variável para verificar se houve troca de posição
    do{ 
        troca1 = false; //iniciar a variável como false para ela ser o ponto de saída
        for(let i = 0; i < vetor.length -1; i++) { //percorre as posições do vetor
            if (fnComp(vetor[i], vetor[i+1])) { //testa os dois elementos que foram passados como parâmetros
            [[vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]]] //trocando a ordem dos elementos
            troca1 = true
            }
        }
    }
    while(troca1); //se não houver troca, troca = false
}
//FUNÇÃO PARA CHAMAR A FUNÇÃO DE RELATÓRIO DE ALUNOS ORDENADO POR RA
function opc3() {
    relatRa(alunos, (elem1, elem2) => elem1.ra < elem2.ra)
    for(let i = 0; i < alunos.length; i++){
        alert(`Nome: ${alunos[i].nome} \nRa: ${alunos[i].ra} \nIdade: ${alunos[i].idade} \nSexo: ${alunos[i].sexo} \nMédia: ${alunos[i].media} \nResultado: ${alunos[i].resultado}`
        )
    }
}
//Relatório de Alunos em ordem crescente por Nome, apenas dos Aprovados
function relatAprovados(vetor, fnComp) {
    let troca2 //variável para verificar se houve troca de posição
    do{ 
        troca2 = false; //iniciar a variável como false para ela ser o ponto de saída
        for(let i = 0; i < vetor.length -1; i++) { //percorre as posições do vetor
            if (fnComp(vetor[i], vetor[i+1])) { //testa os dois elementos que foram passados como parâmetros
            [[vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]]] //trocando a ordem dos elementos
            troca2 = true
            }
        }
    }
    while(troca2); //se não houver troca, troca = false
}
//CHAMAR A FUNÇÃO RELATÓRIO DOS APROVADOS
function opc4() {
    let aprovados = []
    let reprovados = []  
    for(let i = 0; i < alunos.length; i++){
        if(alunos[i].resultado === "A") {
            aprovados[i] = alunos[i]
        }
        else {
            reprovados[i] = alunos[i]
        }
    }
    relatAprovados(aprovados, (ele1, ele2) => ele1.nome > ele2.nome)
    for(let i = 0; i < aprovados.length; i++){
        alert(`Nome: ${aprovados[i].nome} \nRa: ${aprovados[i].ra} \nIdade: ${aprovados[i].idade} \nSexo: ${aprovados[i].sexo} \nMédia: ${aprovados[i].media} \nResultado: ${aprovados[i].resultado}`
        )
    }
}
//Encerrar o programa
function opc5() {
    alert('O PROGRAMA SERÁ FINALIZADO!!!!!')
}