
const alunos = [10, 5, 50, 10, 98, 23, 33, 44, 99, 7];
let i = 0;

function gets () {
    const valor = alunos[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto)
}

module.exports = { gets: gets, print: print };