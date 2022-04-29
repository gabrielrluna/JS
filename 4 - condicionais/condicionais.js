// Estruturas de controle condicional


let nome = "Klaibert";
let idade = 14;                                                                                                                                                                                                                                                                                                                                                                                9;

//Verificar a didade da pessoa

// Condicional Encadeada
let mensagem;

if (idade > 60){
    mensagem = 'É véio';
} else if (idade >= 18){
    mensagem =  'É adulto, mas não é véio';
} else {
    // mensagem = 'É CRIAMSA!!'
    if(idade >= 12 && idade < 18){
        mensagem = "É ABORRECENTE!";
        } else {
            mensagem = "É CRIAMSA!"
        }
}

console.log(mensagem);
document.write(`${nome} tem ${idade} anos e ${mensagem}.`)


let nota1 = 5;
let nota2 = 8;
let media = (nota1 + nota2)/2;
let resultado;

if (media >= 7){
    resultado = "aprovado"
} else {
    if (media >= 4 && media < 7){
        resultado = "em recuperação"
    } else {
        resultado = "reprovado"
    }
}

console.log(media)
console.log(resultado)




// if/else (shorthand if/else - operador ternário ?:)
media >= 7 ? resultado = 'aprovado' : resultado = 'reprovado';

// ou

resultado = media >= 7 ? 'aprovado' : 'reprovado'; 


// Switch/Case/Default/break
/*Opções do chatbot:
1. Informações
2. Reclamação
3. Dúvidas
X. Opção desconhecida*/

let opcao = 2;
let textoOpcao;

switch(opcao){
    case 1:
        textoOpcao = 'Legal, o que deseja saber?';
        break;

    case 2:
        textoOpcao = 'Que pena, o que houve?';
        break;

    case 3:
        textoOpcao = 'Certo, qual a sua dúvida?';
        break;

    default:
        textoOpcao = 'Hmmmm... Não entendi. Vou te transferir!'
        break
    }

    console.log(`Você escolheu a opção ${opcao}`)
    console.log(textoOpcao)


// Operadores de Comparação
let a = 10;
let b = "10";
console.log('___________________')
console.log (a===b); //true or false