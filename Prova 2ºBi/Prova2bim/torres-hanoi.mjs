/*
    1. Veja, na imagem "torres-hanoi.png", como funciona o jogo das Torres de Hanoi.

    2. Cada uma das torres do jogo se comporta como uma pilha. Importe a classe
        apropriada e crie três pilhas, representando as três torres.
*/


import Stack from "./lib/Stack.mjs";

let A = new Stack();
let B = new Stack();
let C = new Stack();


/*
    3. Use os valores 1, 2 e 3 para representar os discos. Empilhe-os na primeira
        torre.
*/


A.push(3);
A.push(2);
A.push(1);


/*
    4. Desempilhe um dos discos da primeira torre e empilhe-o na terceira.
*/


A.pop(1);
C.push(1);


/*
    5. Desempilhe o disco remanescente da primeira torre e coloque-o na segunda.
*/


A.pop(2);
B.push(2);


/*
    6. Desempilhe o disco da terceira torre e coloque-o sobre o disco da segunda torre.
*/

C.pop(1);
B.push(1);


/*
    7. Desempilhe o disco da primeira torre e coloque-o na terceira torre.
*/


A.pop(3);
C.push(3);


/*
    8. Desempilhe um dos discos da segunda torre e coloque-o na primeira torre.
*/


B.pop(1);
A.push(1);


/*
    9. Desempilhe o disco da segunda torre e coloque-o sobre o disco da terceira torre.
*/


B.pop(2);
C.push(2);


/*
    10.Finalmente, desempilhe o disco da primeira torre e coloque-o na terceira torre.
*/


A.pop(1);
C.push(1);


/*
    11.Use o método print() para exibir as três pilhas. As duas primeiras devem estar
        vazias e a terceira deve conter os três discos, na ordem (3 na base, 1 no topo).      
*/

console.log(A.print());
console.log(B.print());
console.log(C.print());