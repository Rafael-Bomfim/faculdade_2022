//Cadastrar alunos
function cadastrarAluno(alunos){
    let objeto = {
        nome: prompt(`Digite o nome do Aluno:`).toUpperCase(),
        ra: Number(prompt(`Digite o RA do Aluno:`)),
        idade: Number(prompt(`Digite a idade do Aluno:`)),
        sexo: prompt(`Digite o sexo do Aluno: (M - para masculino) e (F - para feminino)`).toUpperCase(),
        media: Number(prompt(`Digite a média do Aluno:`)),
        resultado: prompt(`Digite o resultado do Aluno: (A - para aprovado) e (R - para reprovado)`).toUpperCase()
    }
    alunos.push(objeto)
    alert(`Aluno cadastrado com sucesso ${alunos}`)
}
//FUNÇÃO PARA CHAMAR A FUNÇÃO DE CADASTRO
function opc1() {
    let alunos = []
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
    alert(alunos)
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
    alert(alunos)
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
function opc4(alunos) {
    let aprovados = []
    if(alunos.resultado === "A") {
        aprovados.push(alunos)
    }
    relatAprovados(aprovados, (elem1, elem2) => elem1.nome > elem2.nome)
    alert(aprovados)
}
//Encerrar o programa
function opc5() {
    alert('O PROGRAMA SERÁ FINALIZADO!!!!!')
}