/*
Faça um programa que receba N (quantidade de numeros) e seus respectivos valores. Imprima o maior numero par e o menor numero impar.

Entrada:
    5
    3
    4
    1
    10
    8

    Saída:
    Maior número par: 10
    Menor número ímpar: 1
*/

const { gets, print } = require('./funcoes_auxiliares.js');

const quantidadeDeNumeros = gets();

let maiorNumeroPar = 0;
let menorNumeroImpar = 10000;

for (let i = 0; i < quantidadeDeNumeros; i++) {
    const numero = gets();
    if (numero % 2 === 0 ) {
        if (numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }        
    }
    else {
        if (numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        };
    }
}
print('Maior número par: ' + maiorNumeroPar);
print('Menor número ímpar: ' + menorNumeroImpar);