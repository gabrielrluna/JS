//Solução 3

let formulario = document.querySelector('form');
formulario.addEventListener('submit', function(event){

    event.preventDefault();

    let cotacao = parseFloat(document.getElementById('cotacao').value);
    let valor = parseFloat(document.getElementById('valor').value);
    let converter = valor*cotacao;

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O valor convertido é de R$ ${converter}`;

});
 

/*  Solução 1

function convertDolar(){
    let valorDolar = document.getElementById("valor").value;
    let convertReal = valorDolar * 4.97;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O valor convertido é de R$ ${convertReal}`;
}*/
    
/*  Solução 2
function convertDolar(){
    let cotacaoDolar = document.getElementById('cotacaoDolar').value;
    let valorDolar = document.getElementById("valor").value;
    let convertReal = valorDolar * cotacaoDolar;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O valor convertido é de R$ ${convertReal}`;
}

*/