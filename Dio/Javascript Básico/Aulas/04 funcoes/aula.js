// funções são blocos de código que podem ser
// chamados e executados em qualquer parte do código
// para realizar uma tarefa específica

function sayMyName(name) {
    console.log('Your name is ' + name);
}

function quadrado(valor) {
    return valor * valor;
}

function incrementarJuros(valor, percentualJuros) {
    return valor + (valor * percentualJuros / 100);
}

// chamada de função

sayMyName('Breno');
sayMyName('Henrique');

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(250, 50));