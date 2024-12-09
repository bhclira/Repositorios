/*

3) Elabore algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista em débito, recebe 10% de desconto;
2 - À vista em dinheiro ou pix, recebe 15% de desconto;
3 - Em 2x no cartão, preço normal de etiqueta sem juros;
4 - Acima de 2x no cartão, preço normal de etiqueta mais 10% de juros.

*/

const preco = 100;
const formaPagamento = '3x no cartão';

if (formaPagamento === 'debito') {
    console.log(`Preço final: R$ ${(preco - (preco * 0.1)).toFixed(2)}`);
}
else if (formaPagamento === 'dinheiro' || formaPagamento === 'pix') {
    console.log(`Preço final: R$ ${(preco - (preco * 0.15)).toFixed(2)}`);
}
else if (formaPagamento === 'cartao') {
    console.log(`Preço final: R$ ${preco.toFixed(2)}`);
}
else if (formaPagamento === '2x no cartão') {
    console.log(`Preço final: R$ ${preco.toFixed(2)}`);
}
else {
    console.log(`Preço final: R$ ${(preco + (preco * 0.1)).toFixed(2)}`);
}