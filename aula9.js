//função
let onibus = {
    rodas: 8,
    passageiros: 40,
    portas :2,
};

//adicionando à função
onibus.janelas = 20;

//deletando
delete onibus.passageiros;

//mostra tudo
console.log(onibus);

//mostrando especificamente
console.log("Janelas: "+onibus.janelas);