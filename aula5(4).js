<hr><br>
<meta charset = "UTF-8">
<script>

let par = [];
let impar = [];
let numero = [];

function parOuImpar (x){
    if(x % 2 == 0){
        par.push(x)
    }else{
        impar.push(x);
    }
}

for(i = 0 ; i < 10 ; i++){
    let valor = parseInt(prompt());
    numero.push(valor)
    parOuImpar(numero[i]);
}

console.log(par);
console.log(impar);

</script>
