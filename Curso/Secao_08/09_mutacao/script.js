let pessoa = {
    nome: 'Luan'
};

let pessoa2 = pessoa;

let pessoa3 = {
    nome: 'Luan'
};

console.log(pessoa === pessoa2);
console.log(pessoa3 === pessoa);
console.log(pessoa3 === pessoa2);

pessoa2.nome = 'Johnny';
console.log(pessoa.nome);

pessoa.nome = 'Emma';
console.log(pessoa2.nome);