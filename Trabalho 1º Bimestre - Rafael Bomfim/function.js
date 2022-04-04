let alunos = [] //variável global
//Cadastrar alunos
function cadastrarAluno(alunos){ //função da primeira opção
    let quantidade = Number(prompt('Insira a quantidade de alunos que deseja cadastrar agora:')) //variável que será utilizada no for

    for(let i = 0; i < quantidade; i++){ //vai percorrer x vezes, onde x é a quantidade de alunos que o usuário deseja cadastrar
        let objeto = { //criação do objeto
            nome: prompt(`Digite o nome do Aluno:`).toUpperCase(),
            ra: Number(prompt(`Digite o RA do Aluno:`)),
            idade: Number(prompt(`Digite a idade do Aluno:`)),
            sexo: prompt(`Digite o sexo do Aluno: (M - para masculino) e (F - para feminino)`).toUpperCase(),
            media: Number(prompt(`Digite a média do Aluno:`)),
            resultado: prompt(`Digite o resultado do Aluno: (A - para aprovado) e (R - para reprovado)`).toUpperCase()
        }
        alunos[i] = objeto //adiciona o objeto ao vetor
    }
    alert(`Alunos cadastrados com sucesso!!!`) //mensagem de sucesso
    for(let i = 0; i < alunos.length; i++){ //percorre o vetor e exibe o resultado
        alert(`Nome: ${alunos[i].nome} \nRa: ${alunos[i].ra} \nIdade: ${alunos[i].idade} \nSexo: ${alunos[i].sexo} \nMédia: ${alunos[i].media} \nResultado: ${alunos[i].resultado}`
        )
    }
}
//FUNÇÃO PARA CHAMAR A FUNÇÃO DE CADASTRO
function opc1() { //primeiro botão
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
function opc2() { //segundo botão
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
function opc3() { //terceiro botão
    relatRa(alunos, (elem1, elem2) => elem1.ra < elem2.ra) //os parametros são o RA dos alunos; eles são unicos, cada um tem o seu
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
function opc4() { //quarto botão
    let aprovados = [] //criando um vetor para armazenar os alunos aprovados
    let reprovados = []  //criando um vetor para armazenar os alunos reprovados
    for(let i = 0; i < alunos.length; i++){
        if(alunos[i].resultado === "A") { //se o resultado for igual a A, o aluno está aprovado
            aprovados[i] = alunos[i] //armazenando o aluno aprovado
        }
        else {
            reprovados[i] = alunos[i] //armazenando o aluno reprovado
        }
    }
    relatAprovados(aprovados, (ele1, ele2) => ele1.nome > ele2.nome) //os parametros são os nomes dos alunos aprovados
    for(let i = 0; i < aprovados.length; i++){
        alert(`Nome: ${aprovados[i].nome} \nRa: ${aprovados[i].ra} \nIdade: ${aprovados[i].idade} \nSexo: ${aprovados[i].sexo} \nMédia: ${aprovados[i].media} \nResultado: ${aprovados[i].resultado}`
        )
    }
}
//Encerrar o programa
function opc5() { //quinto botão
    alert('O PROGRAMA SERÁ FINALIZADO!!!!!')
}