// varias pessoas iguais = nao repetir codigo

class Pessoa {
    // constructor é o que acontece quando uma pessoa é instanciada
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
    descrever() {
        console.log("Meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
    }
}

const pessoa1 = new Pessoa('Breno', 44);
const pessoa2 = new Pessoa('Thais', 39);

console.log(pessoa1);
console.log(pessoa2);
pessoa1.descrever();
pessoa2.descrever();