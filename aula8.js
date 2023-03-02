

var cidade = {
    nome: "Salvador",
    PIB: 63804000000,
    populacao: 3500000,
    ppc: function()
    {return this.PIB / this.populacao }
};

console.log (cidade['nome']);
console.log (cidade['PIB']);
console.log (cidade['ppc']().toFixed(2));

//------------------------------

var pessoa = {
    nome: "Cascão",
    endereco: {
        rua: "Limoeiro"
        },
    amigos : ["Cebolinha", "Mônica", "Magali"]
}

console.log(pessoa['endereco']['rua']);
console.log(pessoa['amigos'][0]);

//----------------------------------

var personagens = [
    {nome : "Goku", serie : "Dragon Ball"},
    {nome : "Tanjiro", serie : "Demon Slayer"},
    {nome : "Seiya", serie : "Cavaleiros do Zodíaco"},
]

console.log(personagens[1]);

console.log(personagens[2]['nome']);
console.log(personagens[2]['serie']);