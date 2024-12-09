const aluno = { nome: 'joao', idade: 15, notas: [7, 8, 9, 10] };

const alunos = ['João', 'Maria', 'José'];

console.log(alunos);

console.log(alunos[0]);

// adicionando elementos

alunos.push('Pedro');
alunos[4] = 'Vinicius';

console.log(alunos);

// removendo o último elemento
console.log (alunos.pop());

// primeiro elemento
console.log(alunos.shift());

// adicionando no início
alunos.unshift('Ana');
console.log(alunos);