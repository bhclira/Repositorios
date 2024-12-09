
// objeto é uma coleção dinâmica de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos).

// Exemplo de objeto
const pessoa = {
    nome: "Vitor J Guerra",
    idade: 25,
    
    descrever: function () {
        console.log("Meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
    }
};



//imprima chave valor

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

//incrementar objeto
pessoa.altura = 1.69;
console.log(pessoa);

// deletar objeto
delete pessoa.nome;

console.log(pessoa);

pessoa.descrever();

pessoa.nome = 'Renan';
pessoa.idade = 30;

pessoa.descrever();