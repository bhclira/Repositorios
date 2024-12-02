const precoLitroCombustivel = 5.30;
const kmPorLitro = 12;
const distanciaEmKm = 100;

let gastoTotal = (distanciaEmKm / kmPorLitro) * precoLitroCombustivel;

console.log('Gasto total:', gastoTotal.toFixed(2)); // toFixed recebe decimal, cospe string
