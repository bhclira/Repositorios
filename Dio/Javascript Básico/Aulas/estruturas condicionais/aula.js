const camisetaRenanAzul = true;
const camisetaLemaoAzul = false;

10 > 5; // true
10 < 5; // false
10 >= 10; // true
10 <= 10; // true
10 == 10; // true


const numero = 2
const numeroPar = (numero % 2) === 0; // igualdade (3xigual)

if (numero === 0) {
    console.log('Numero invalido')
} else if (numeroPar) {
    console.log('O número é par');
} else {
    console.log('O número é ímpar');
}