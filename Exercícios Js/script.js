function exe1() {
    let num1 
    let num2
    calculadora(num1, num2)
}

function calculadora(num1, num2) {
    let calculo
    let resultado
    
    num1 = Number(prompt(`Informe o valor do primeiro número: `))
    num2 = Number(prompt(`Informe o valor do segundo número: `))

    do { 
        calculo = Number(prompt(`
        Digite 1. Somar.
        Digite 2. Subtrair.
        Digite 3. Multiplicar.
        Digite 4. Dividir.
        Digite 5. Finalizar.`))

        switch(calculo) {
            case 1:
                resultado = num1 + num2
                alert(`A soma dos valores é ${resultado}`)
            break
            case 2: 
                resultado = num1 - num2
                alert(`A subtração dos valores é ${resultado}`)
             break
            case 3: resultado = num1 * num2
                alert(`A multiplicação dos valores é ${resultado}`)
            break
            case 4:
                resultado = num1 / num2
                alert(`A divisão dos valores é ${resultado}`)
            break
            case 5:
                alert(`O programa será encerrado!!`)
            break
            default: alert(`Opção inválida!!`)
        }
    }
    while (calculo != 5)
}

function exe2() {
    let lado1
    let lado2
    let lado3
    triangulos(lado1, lado2, lado3)
}

function triangulos(lado1, lado2, lado3) {
    lado1 = Number(prompt(`Informe o tamanho do primeiro lado do trinângulo em centímetros: `))
    lado2 = Number(prompt(`Informe o tamanho do segundo lado do trinângulo em centímetros: `))
    lado3 = Number(prompt(`Informe o tamanho do terceiro lado do trinângulo em centímetros: `))

    if ((lado1 == lado2) && (lado2 == lado3)) {
        alert(`O triângulo é EQUILÁTERO, todos os seus lados medem ${lado1}cm.`)
    }
    else if ((lado1 == lado2) || (lado1 == lado3) || (lado2 == lado3)) {
        alert(`O triângulo é ISÓSCELES, com dois lados iguais!`)
    }
    else {
        alert(`O triângulo é ESCALENO com todos os lados diferentes, sendo eles: ${lado1}cm, ${lado2}cm e ${lado3}cm.`)
    }
}

function exe3() {
    let base 
    let expoente
    potenciacao(base, expoente)
}

function potenciacao(base, expoente) {
    let resultado
    base = Number(prompt(`Informe o valor da base:`))
    expoente = Number(prompt(`Informe o valor do expoente:`))

    resultado = Math.pow(base, expoente) //potenciação** 
    alert(`O resultado da potenciação de base ${base} e expoente ${expoente} é igual á: ${resultado}.`)
}

function exe4() {
    let dividendo
    let divisor
    divisao(dividendo, divisor)
}

function divisao(dividendo, divisor) {
    let resultado
    let resto
    dividendo = Number(prompt(`Informe o valor do dividendo:`))
    divisor = Number(prompt(`Informe o valor do divisor:`))

    resultado = dividendo / divisor
    resto = dividendo % divisor

    alert(`O resultado da divisão é ${resultado} e o resto é ${resto}`)
}

function exe5() {
    let valor
    converter(valor)
}

function converter(valor) {
    let resultado
    valor = Number(prompt(`Informe o valor que deseja converter em reais:`))
    resultado = valor.toFixed(2).toString().replace(".",",")
    //fixa duas casas após a vírgula. converte a variável em string. troca o ponto por vírgula
    alert(`O valor convertido em dinheiro ficará R$${resultado}`)
}

function exe6() {
    let capitalInicial
    let taxa 
    let tempo 
    capitalInicial = Number(prompt(`Qual o capital incial?`))
    taxa = Number(prompt(`Qual a taxa de juros?`))
    tempo = Number(prompt(`Qual o tempo de aplicação?`))
    jurossimples(capitalInicial, taxa, tempo)
    juroscomposto(capitalInicial, taxa, tempo)
}

function jurossimples(capitalInicial, taxa, tempo) {
    let montante
    montante = capitalInicial * (1 + taxa) * tempo

    alert(`O montante da aplicação com o juros simples é R$${montante}`)
}

function juroscomposto(capitalInicial, taxa, tempo) {
    let montante
    montante = capitalInicial * (1 + taxa) ** tempo
    alert(`O montante da aplicação com o juros composto é R$${montante}`)
}

function exe7() {
    let ax2
    let bx 
    let c 
    baskara(ax2, bx, c)
}

function baskara(ax2, bx, c) {
    let resultado = []
    let delta = ((bx ** 2) - (4 * ax2 * c)) 
    ax2 = Number(prompt(`Informe o valor de a: `))
    bx  = Number(prompt(`Informe o valor de b: `))
    c   = Number(prompt(`Informe o valor de c: `))

    if (delta < 0) {
        alert(`Delta é negativo!!`)
    }
    let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2) //raiz quadrada de um número
    let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)

    resultado.push(x1)
    resultado.push(x2)

    alert(`O x1 é = ${x1} e o x2 é = ${x2}`)
}

function exe8() {
    let pontuacoes
    basquete(pontuacoes)
}

function basquete(pontuacoes) { 
    pontuacoes = "10 20 20 8 25 3 0 30 1"
    let vetor
    vetor = pontuacoes.split(" ")

    let recordes = 0
    let piorJogo = 1
    let maiorPontuacao = vetor[0] //primeira posição
    let menorPontuacao = vetor[0] //primeira posição

    for(let i = 1; i < vetor.length; i++) {
        let pontuacao = parseInt(vetor[i]) //transforma o número em inteiro 
        if (pontuacao > maiorPontuacao) {
            maiorPontuacao = pontuacao
            recordes++
        }
        else if (pontuacao < menorPontuacao) {
            menorPontuacao = pontuacao
            piorJogo = i + 1
        }
    }
    alert(`O recorde de pontos foi batido ${recordes} vezes e a pior pontuação foi no jogo ${piorJogo}!`)
}