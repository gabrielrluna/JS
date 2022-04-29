/*Sintaxe 1 - Tradicional
Função literal/anônima*/
let exemplo1 = function(){
    console.log("Função anônima/literal");
    };


exemplo1(); // Chamando a função


/*Sintaxe 2 - Tradicional
Função nomeada*/
function exemplo2 () {
    console.log("Função nomeada");
};

exemplo2();


/*Sintaxe 3 - Moderna
Função Seta/Flecha (arrow Function)*/
let exemplo3 = () => {
    console.log('Arrow Function');
};

exemplo3(); //chamando a função

let exemplo3b = () => console.log("Arrow Funcion B");
exemplo3b();

// Exemplos 

function dobra(valor){
    return valor*2;
}

console.log (dobra(-3))

console.log("-_-_-_-_-_-_-_-_-_-")
//Usando arrow Function

let dobraB = (valor) =>{
    return valor*3;
}

console.log(dobraB(6))

console.log("-_-_-_-_-_-_-_-_-_-")

let dobraC = valor =>  valor*2;
console.log(dobraC(20));


let preco = 1250;
let desconto = 77.88;
let precoFinal = preco - desconto;

function formataMoeda (valor) {
    return valor.toLocaleString ('en',{
        style: 'currency',
        currency: 'USD'
    });

}

console.log( formataMoeda(preco));