/* 
Crie uma classe para representar pessoas. Para cada pessoa teremos os atributos nome, peso, altura.Crie um método que calcule o IMC da pessoa (peso / altura^2). Instancie a pessoa José que tenha 70kg e 1,75 de altura e peça ao josé para dizer o valor do seu IMC.
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC () {
        return this.peso / (this.altura ** 2);
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log('Seu IMC é ' + jose.calcularIMC().toFixed(2));