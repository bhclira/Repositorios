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


function calcularIMC(peso, altura) {
    return peso / (altura ** 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'você está abaixo do peso!';
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        return 'você está com o peso normal!';
    }
    else if (imc >= 25 && imc <= 29.9) {
        return 'você está com sobrepeso!';
    }
    else if (imc >= 30 && imc <= 34.9) {
        return 'você está com obesidade grau 1!';
    }
    else if (imc >= 35 && imc <= 39.9) {
        return 'você está com obesidade grau 2!';
    }
    else {
        return 'você está com obesidade grau 3!';
    }
}

// Main - Função Invocada Imediatamente
(function () {
    const nome = 'Breno';
    const peso = 70;
    const altura = 1.75;

    const imc = calcularIMC(peso, altura);
    console.log(classificarImc(imc));
})();