let vetorObj = []
//Cadastrar alunos
function opc1() {
//PASSO 1: ENTRADA DE DADOS
    let objeto = {
        nome: prompt(`Digite o nome do Aluno:`),
        ra: Number(prompt(`Digite o RA do Aluno:`)),
        idade: Number(prompt(`Digite a idade do Aluno:`)),
        sexo: prompt(`Digite o sexo do Aluno:`),
        media: Number(prompt(`Digite a média do Aluno:`)),
        resultado: prompt(`Digite o resultado do Aluno:`)
    }
    vetorObj.push(objeto)
    alert(`Aluno cadastrado com sucesso ${vetor}`)
}
//Relatório de Alunos em ordem crescente por Nome
function opc2(vetor, fnComp) {
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

opc2(vetorObj, (elem1, elem2) => {
  if(elem1.nome === elem2.nome) { //se houver duas razões sociais iguais na ordenação
    return elem1.ra > elem2.ra //o desempate será pelo nome do motorista
  }
  else return elem1.nome > elem2.nome //se não só retorna as razões sociais
})
alert(opc2)

//Relatório de Alunos em ordem decrescente por RA
function opc3(vetor) {
    
}
//Relatório de Alunos em ordem crescente por Nome, apenas dos Aprovados
function opc4(vetor) {
    
}

//Encerrar o programa
function opc5() {
    alert('O PROGRAMA SERÁ FINALIZADO!!!!!')
}
