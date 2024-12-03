/*
Faça um prog para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1- Preço do etanol;
2- Preço da gasolina;
3- O tipo de combustível que está no seu carro;
4- Gasto médio de combustível do carro por km;
5- Distância em Km da viagem;

Imprima no console o valor que será gasto para realizar essa viagem.
*/

const precoEtanol = 4.49;
const precoGasolina = 5.49;

const tipoCombustivel = 'etanol';

const gastoMedioGasolina = 12;
const gastoMedioEtanol = 9;
const distanciaEmKm = 100;

if (tipoCombustivel === 'etanol') {
    valorGasto = (distanciaEmKm / gastoMedioEtanol) * precoEtanol;
} else {
    valorGasto = (distanciaEmKm / gastoMedioGasolina) * precoGasolina;
}

console.log('O valor gasto será de R$' + valorGasto.toFixed(2));