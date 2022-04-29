// Estruturas de Controle de Repetição

/*While (enquanto)
do/while (faça/enquanto)
for (para uma determinada quantidade de vezes)*/

//Exemplo 1: While
let i = 1;
while (i < 2){
    console.log(`O valor de i é : ${i}`)
    i++;
}

//Exemplo 2: Do/While
let j=1;
do {
    console.log(`J é ${j}`)
    j++;
} while (j<5);


//Exemplo 3: For

for (let k = 1 ; k <= 5; k++){
    console.log (`K vale: ${k}`)
}

console.log('_-_-_-_-_-_-_-_-_-_-_')


// Exemplo 4 - Loop iterando sobre os dados da Array
let alunos =[
    "Chiquinha","Chaves", "Madruga", "Kiko", "Nhonho "
    ];

//Cache do tamanho array
let tamanho = alunos.length;

for (let i = 0; i < tamanho ; i++){
    console.log(alunos[i]);
}

console.log('_-_-_-_-_-_-_-_-_-_-_')
