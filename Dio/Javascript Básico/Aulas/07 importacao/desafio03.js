/*
Faça um programa que calcule e imprima um salario a ser transferido para um funcionário.

o programa deve receber o valor bruto do salario e os benefícios do funcionário.

o salario a ser transferido é calculado da seguinte maneira: valor bruto do salario - percentual de imposto mediante a faixa salarial + beneficios.

Para calcular o percentual de imposto seguem as alícotas:

    de 0 a 1100 = 5%
    de 1100 a 2500 = 10%
    maior que 2500 = 15%


    entrada: 2000 250

    saida: 2050.00
*/

const {gets, print} = require('./funcoes_auxiliares.js');

const salarioBruto = gets();
const valorBeneficios = gets();

function calcularImposto(salario, percentual) {
    return salario * (percentual / 100);
   
}

function pegarAliquota(salario) {
    if (salario > 0 && salario <= 1100) {
        return 5;
    }
    else if (salario > 1100 && salario <= 2500) {
        return 10;
    }
    else {
        return 15;
    }
}

//
const aliquotaImposto = pegarAliquota(salarioBruto)

const valorImposto = calcularImposto(salarioBruto, aliquotaImposto)

const valorSalarioFinal = salarioBruto -  valorImposto + valorBeneficios;

print(valorSalarioFinal.toFixed(2));