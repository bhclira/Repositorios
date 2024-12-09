const pessoa = {
    nome: "Vitor J Guerra",
    idade: 25,
    
    descrever: function () {
        console.log("Meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
    }
};

const atributo = 'idade';

console.log(pessoa[atributo]);
console.log(pessoa['nome']);