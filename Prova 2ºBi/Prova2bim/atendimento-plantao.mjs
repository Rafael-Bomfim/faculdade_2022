/*
    1. O Professor Alexandre estava com febre e decidiu ir ao plantão médico.
    Quando ele chegou, havia 7 (sete) pessoas na sua frente:
    João, Maria, Pedro, Joaquim, José, Isabela e Rafael.
    
    2. Para que as pessoas sejam atendidas de forma correta e por ordem de chegada, como uma fila,
    o primeiro passo é importar a classe apropriada e depois criar o nosso "objeto" atendimento.
*/


import Queue from "./lib/Queue.mjs";


/*
    3. Faça com que a fila esteja na sequência a seguir para que o atendimento do plantão possa começar:
    
    1. João
    2. Maria
    3. Pedro
    4. Joaquim
    5. José
    6. Isabela
    7. Rafael
    8. Alexandre
    
*/

let fila = new Queue()
fila.enqueue('João')
fila.enqueue('Maria')
fila.enqueue('Pedro')
fila.enqueue('Joaquim')
fila.enqueue('José')
fila.enqueue('Isabela')
fila.enqueue('Rafael')
fila.enqueue('Alexandre')





/*
    4. Imprima a fila na ordem correta.
*/

console.log(fila.print())



/*
    5. O médico pediu ao atendente que chamasse a pessoa que estava na frente da fila.
    Logo ela foi removido da fila.
*/

let primeiro = fila.peek()
fila.dequeue()



/*
    6. Mostre a pessoa que foi atendida e logo em seguida Imprima como ficou a fila depois do atendimento.
*/

console.log(primeiro)
console.log(fila.print())



/*
    7. Equanto todos aguardavam o atendimento, chegaram mais 2 (duas) pessoas na seguinte sequência:
    - Otávio
    - Luís
    Adicione eles na ordem da fila
*/


fila.enqueue('Otávio')
fila.enqueue('Luís')


/*
    8. Imprima a fila na ordem correta depois das alterações.
*/


console.log(fila.print())

/*
    9. O médico pediu ao atendente qual o nome da próxima pessoa a ser atendida:
    Mostre qual o nome da próxima pessoa que será atendida.
*/


console.log(fila.peek())


/*
    10. O médico pediu ao atendente que chamasse essa pessoa que estava na frente da fila.
    Logo ela foi removido da fila.
*/


fila.dequeue()


/*
    11. Imprima a fila na ordem correta depois de todas as alterações.
*/


console.log(fila.print())