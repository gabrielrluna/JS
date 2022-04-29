let formulario = document.querySelector('form');
let numEsc = parseInt(Math.random()*11);

formulario.addEventListener('submit', function(event){
    event.preventDefault();


    console.log(numEsc);

    let resultado = document.getElementById('resultado');
    
    if (palpite == numEsc){
        resultado.innerHTML = 'Você acertou o número. Parabéns!';
    } else if (palpite < 0 || palpite > 10) {
        resultado.innerHTML = 'Digite um número entre 0 e 10!';
    } else {
        resultado.innerHTML = "Erroooooooooooooooooooooooooooooou!";
    }
})