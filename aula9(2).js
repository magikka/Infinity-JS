//função
let pessoa = {
    nome: "Ana",
    profissao: "Estudante de Computação",
    idade: 19,
    sexo: "F",
};

//adicionando à função
pessoa.site = "https://magikka.carrd.co";

//deletando
delete pessoa.sexo;

//mostra tudo
console.log(pessoa);

//mostrando especificamente
console.log("Meu nome é "+pessoa.nome+"!!!");