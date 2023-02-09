let numeros = [10 , 15 , 17 , 22 , 9 , 4];
console.log(numeros);

let pares = 0;

for(numero in numeros){
    if(numero % 2 == 0){
        pares ++;
    }   
}
console.log(`Existem ${pares} numeros pares nesse vetor.`);

//------------------------------------------------------------------------------//

let num = [ 5.5 , 6 , 4.3 , 7 , 3.2 , 8.2];
let abxMedia = 0;
let media = 6;

for (numero2 in num){
    if(num[numero2] < media){
        num[numero2]++;
        abxMedia++
    }
}

console.log(num);
console.log(`${abxMedia} notas tiveram ponto extra adicionado.`);
