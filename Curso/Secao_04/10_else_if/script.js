let nome = 'Luan';
let idade = 32;

if (nome !== undefined && nome === 'Joaquim') {
    console.log('Nome está definido');
} else if (nome === 'Luan' && nome.length > 3 && idade === 50) {
    console.log('O nome é Luan');
} else {
    console.log('Não é Luan');
}

if (1 > 2) {
    console.log('Teste');
} else if (1 === 1) {
    console.log('Testando');
}