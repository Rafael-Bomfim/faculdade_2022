function exe1() {
    let num1 
    let num2
    calculadora(num1, num2)
}

function calculadora(num1, num2) {
    let calculo
    let resultado

    for(let i = 0; i < 1; i++) {
        num1 = Number(prompt(`Informe o valor do primeiro número: `))
        num2 = Number(prompt(`Informe o valor do segundo número: `))
    }

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


