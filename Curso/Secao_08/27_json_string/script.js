let pessoa = {
    "nome": "Luan",
    "idade": 32,
    "profissao": "Programador",
    "hobbies": ["Game", "Caminhar", "Ouvir Música"]
};
let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);
console.log(pessoaJSON.hobbies[0]);