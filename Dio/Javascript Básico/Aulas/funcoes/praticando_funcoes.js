function escreverMeuNome (nome) {
    return 'Meu nome é ' + nome;
}

function verMaioridade(idade) {
    if (idade >= 18) {
        console.log(escreverMeuNome('Breno') + ' e eu sou maior de idade');
    } else {
        console.log(escreverMeuNome('Henrique') + ' e eu sou menor de idade');
    }
}

verMaioridade(15);