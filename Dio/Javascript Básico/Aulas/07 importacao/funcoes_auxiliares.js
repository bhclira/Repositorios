
const alunos = [4];
let i = 0;

function gets () {
    const valor = alunos[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto)
}

module.exports = { 
    gets: gets,
    print: print
};