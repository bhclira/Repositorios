/*
Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100. Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior numero sorteado.

Dados de entrada:
5
50
10
98
23

Saida:
98
*/

// Importa as funções gets e print do arquivo funcoes_auxiliares.js
const { gets, print } = require('./funcoes_auxiliares.js');

// Recebe a quantidade de alunos (números sorteados) através da função gets
const quantidadeDeAlunos = gets();

// Inicializa a variável maiorValorEncontrado com 0
let maiorValorEncontrado = 0;

// Loop para iterar sobre a quantidade de alunos
for (let i = 0; i < quantidadeDeAlunos; i++) {
    // Recebe o número sorteado para o aluno atual
    const numeroSorteado = gets();
    
    // Verifica se o número sorteado é maior que o maior valor encontrado até agora
    if (numeroSorteado > maiorValorEncontrado) {
        // Atualiza o maior valor encontrado
        maiorValorEncontrado = numeroSorteado;
    }
}

// Imprime o maior valor encontrado
print(maiorValorEncontrado);