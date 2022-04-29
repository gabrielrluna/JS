// Criando uma array (ou vetor)
let alunos = ["Inacinho", "Verônica","Antônico"];

//exibindo a estrutura de dados do array
console.log(alunos);

//Acessando os dados do array através do índice
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

//O aluno NOME é, sem sombra de dúvidas, o melhor desta sala.
console.log(`O aluno ${alunos[0]} é, sem sombra de dúvidas, o melhor desta sala.`);

// Array como matriz (array bidimensional)
let tecnologias = [

    //0        1      2
    ['HTML', 'CSS', 'JS'],//0
  
    //0       1          2       3        4
    ['PHP', 'MySQL', 'NodeJS', 'Java', 'Python']
];

//Exibir nodejs no console

console.log(tecnologias[1][2]);
