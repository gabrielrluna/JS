//Comentário de uma linha - Atalho "CTRL+;"
/*Bloco de 
comentário - atalho SHIFT ALT A*/


// comando de saida para o console
console.log("Olá,mundo!");

/*Variáveis
Palavras chave: var. let. const.
var -> variável de escopo global
let -> variável de escopo de bloco
const -> const de escopo de bloco*/

const nome ="Binzão da Massa"; //constante
let ano = 2022; //variável de escopo local
var curso = "Técnico em Informática para Internê"; //variável global


// curso = "Toalha";
// nome = "Inacinho";

//recuperando valores
console.log(nome);
console.log(ano);
console.log(curso);

//concatenação
//Eu sou o(a) XXXXXXXX, e em ANO estou estudando no curso CURSO.
console.log("Eu sou o " +nome+", e em "+ano+ " estou estudando no curso"+curso);

//String literal
console.log(`Eu sou o ${nome}, e em ${ano} estou fazendo o curso ${curso}`);

/*Operadores Matemáticos
+Adição
-Subtração
/Divisão
*Multiplicação*/

let produto = "TV Led";
let preco = 6500;
let quantidade = 3;
let total = preco*quantidade;


//Mensagem: Temos atualmente no estoque o produto TV Led na quantidade de 3 unidades, ao custo de 6500 (cada) e valor total de XXXXX.
console.log(`Temos atualmente no estoque o produto ${produto} na quantidade de ${quantidade} unidades, ao custo de R$${preco} cada e valor total de R$${total}`)
