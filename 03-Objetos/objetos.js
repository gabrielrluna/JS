//exemplo 1. Objeto básico

let livro = {
    //propriedade: valor
    titulo: 'Senhor dos Anéis',
    ano: 1954,
    volumes: 3,
    autor: 'J.R.R. Tolkien'
};

console.log(livro.ano);



//Meu livro preferido é o Senhor dos Anéis
console.log(`Meu livro preferido é o ${livro.titulo}, que foi lançado em ${livro.ano}, possui ${livro.volumes} volumes e foi escrito por ${livro.autor}.`)


//Exemplo 2: objeto contendo array e outro objeto
let pessoa = {
    //propriedades
    nome: 'Certo Alguém',
    idade: 39,
    sexo: "masculino",
    telefones: ['2222-3333','5555-6666'],
    cidade: 'São Paulo',
    medidas: {
        peso: 90,
        altura: 1.80
    }
};

console.log(pessoa.telefones[1])
console.log(pessoa.medidas.peso);

console.log(`${pessoa.nome} é uma pessoa incrível. Contacte através do telefone ${pessoa.telefones[1]}`);

//exemplo3: Array de Objeto
let livros = [
    {
        titulo: 'Senhor dos Anéis',
        autor: 'J.R.R. Tolkien'
    },
    {
        titulo: 'Ghost Rider',
        autor: 'Neil Peart'
    },
    {
        titulo: 'Game of Thrones',
        autor: 'George R.R. Martin'
    },

];

console.log(livros[1].titulo);
console.log(`Meu livro favorito é ${livros[2].titulo}, do autor ${livros[2].autor}.`)