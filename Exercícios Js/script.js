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
