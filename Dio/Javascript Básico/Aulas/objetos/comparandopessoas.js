class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(p1.nome + ' é mais velho(a) que ' + p2.nome);
    } else if (p1.idade < p2.idade) {
        console.log(p1.nome + ' é mais novo(a) que ' + p2.nome);
    } else {
        console.log(p1.nome + ' tem a mesma idade que ' + p2.nome);
    }
}

const breno = new Pessoa('Breno', 44);
const thais = new Pessoa('Thais', 39);

compararPessoas(breno, thais);