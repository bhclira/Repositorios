/*
1. Crie uma classe para representar carros. Os carros possuem uma Marca e o Consumo de combustível (medido em km/l). Crie um método que dada a quantidade de quilômetros percorridos e o preço do combustível nos dê o valor gasto em reais para realizar a viagem.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = this.gastoMedioPorKm;

    }

    calcularGastoDePercurso (distancia, precoCombustivel) {
        return distancia * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'prata', 0.083);
console.log(uno.calcularGastoDePercurso(70, 5));