/*
1) Faça um algoritmo que dado 3 notas tiradas por um aluno em um semestre calcule e imprima a sua média e sua classificação conforme a tabela abaixo:

Média = (nota1 + nota2 + nota3) / 3;

Classificação:
- Se a média for maior ou igual a 7, o aluno está aprovado;
- Se a média for maior ou igual a 5 e menor que 7, o aluno está de recuperação;
- Se a média for menor que 5, o aluno está reprovado.
*/

const nota1 = 7;
const nota2 = 5;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
  console.log(`Aprovado! Média: ${media.toFixed(2)}`);
}
else if (media >= 5 && media < 7) {
    console.log(`Recuperação! Média: ${media.toFixed(2)}`);
    }
else {  
  console.log(`Reprovado! Média: ${media.toFixed(2)}`);
}