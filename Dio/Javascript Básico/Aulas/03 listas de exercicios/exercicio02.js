/*
2) IMC = peso / altura²

Classificação:
- Abaixo de 18,5: Abaixo do peso;
- Entre 18,5 e 24,9: Peso normal;
- Entre 25 e 29,9: Sobrepeso;
- Entre 30 e 34,9: Obesidade grau 1;
- Entre 35 e 39,9: Obesidade grau 2;
- Acima de 40: Obesidade grau 3.
*/

const nome = 'Breno';
const peso = 70;
const altura = 1.75;

const imc = peso / (altura ** 2);

if (imc < 18.5) {
  console.log(`${nome}, você está abaixo do peso! IMC: ${imc.toFixed(2)}`);
}
else if (imc >= 18.5 && imc <= 24.9) {
    console.log(`${nome}, você está com o peso normal! IMC: ${imc.toFixed(2)}`);
}
else if (imc >= 25 && imc <= 29.9) {
    console.log(`${nome} , você está com sobrepeso! IMC: ${imc.toFixed(2)}`);
}

// o uso do acento grave (`) e do cifrão ($) é uma forma de interpolação de strings, você pode usar o sinal ${} para inserir variáveis dentro de strings