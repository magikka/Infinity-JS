//substitui funções, mas servempara funções mais diretas e simples.
const parOuImpar = (n) => {
    return n % 2;
}

console.log(parOuImpar(3));

//------------------------------------------------//

//simplificada(para 1 variavel) em uma só linha

const raizQuadrada = x => x*x
console.log(raizQuadrada(2));

//------------------------------------------------//

//MÉTODOS: push e pop

let numeros = [1 , 5 , 10];
numeros.push(15 , 20 , 30);

console.log(numeros);

//remove da ponta
let pessoas =  ["Mateus", "Jõao", "Bia"]
let pessoaRemovida = pessoas.pop();

console.log(pessoas);
console.log(pessoaRemovida);

//remove do começo
let fruta =  ["Melão", "Banana", "Maçã"]
let frutaRemovida = fruta.shift();

console.log(fruta);
console.log(frutaRemovida);

//adc um ou mais do começo (unshift)

