
const array = [1, 2, 3];

// FOREACH
/* 
Array.foreach: Percorre um array sequencialmente, atribuindo cada item a uma variável de
interação. Em alguns casos, seu uso é mais simples que os laços for ou while.
 */
array.forEach(element => console.log(element));


//MAP
/* 
Array.map: Percorre um array executando uma função de substituição em cada item deste.
*/
const newArray = array.map(element => element * 2);
console.log(newArray); 
// [2, 4, 6]


//FILTER
/*
Array.filter: remove elementos de um array baseado em uma função de filtro
*/
const filteredArray = array.filter(element => element > 1);
console.log(filteredArray); 
// [2, 3]


//REDUCE
/*
Array.reduce: Executa sumarização de dados de um array, como somatório por exemplo
*/
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); 
// 6
