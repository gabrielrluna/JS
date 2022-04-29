// Métodos e funções de acesso e seleção
// getElementById() -> Seleciona um elemento pelo ID
// querySelector() -> Seleciona UM elemento de acordo com um seletor
// querySelector() -> seleciona UM elemento de acordo com um seletor
// querySelectorAll() -> Seleciona vários elementos de acordo com um seletor


//Selecionando pelo ID

const titulo=document.getElementById('titulo-principal');
console.log(titulo);

//Selecionando pela TAG
const pagina=document.querySelector('body');
console.log(pagina);

//Selecionando todas as tags H2
const subtitulo = document.querySelectorAll('h2');
console.log(subtitulo)

console.log('_-_-_-_-_-_-_-_-_-_')
console.log(document.querySelector('h3'))

//Modificando elementos

titulo.textContent
// /\ é igual a \/
document.getElementById('titulo-principal').textContent.content

titulo.textContent = "Olá Mundo";
//Aqui o elemento é substituído
subtitulo[1].textContent = "Full Stack";

const legenda = document.querySelector('figcaption');
legenda.innerHTML = "<b>Ilustração do DOM</b>"


//CSS via JS

titulo.style.textAlign = "center"
titulo.style.backgroundImage = 'linear-gradient(lightyellow, lightblue)' 
titulo.style.color = "blue"

const listaEditores = document.querySelector ('#lista-editores');
const ultimo = listaEditores.querySelector('li:last-child');
const primeiro = listaEditores.querySelector('li:first-child');
const meio = listaEditores.querySelector('li:nth-child(2)');

primeiro.classList.add('destaque-item');

const links = document.querySelectorAll ('ul li a');
console.log (links)
// links[0].style.color = "red";

for (let i = 0; i <= links.length; i++){
    links[i].setAttribute('target','_blank');
}