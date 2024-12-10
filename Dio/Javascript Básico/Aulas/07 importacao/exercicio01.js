/* 
1) Faça um programa que receba a média de um aluno. Se a média for maior ou igual a 7, imprima "Aprovado". Se a média for menor que 7 e maior ou igual a 5, imprima "Recuperação". Se a média for menor que 5, imprima "Reprovado".

Exemplo:
    Entrada: 
        5.5;
    Saída: 
        Recuperação;

*/

const { gets, print } = require('./funcoes_auxiliares.js');

const media = gets();

if (media >= 7 && media <= 10) {
    print('Aprovado');
}
else if (media >= 5 && media < 7) {
    print('Recuperação');
}
else if (media >= 0 && media < 5) {
    print('Reprovado');
}
else {
    print('Nota inválida');
}