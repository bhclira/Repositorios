const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

let soma = 0;

for (let i = 0; i < notas.length - 1; i++) {
    soma = soma + notas[i];
}

console.log('Sua média = ' + (soma / notas.length).toFixed(2)); // Sua média = 5.40