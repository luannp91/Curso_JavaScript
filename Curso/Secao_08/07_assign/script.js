let carro = {
    portas: 4,
    portaMalas: '250l',
    motor: '1.0'    
};

let adicionais = {
    tetoSolar: false,
    arcondicionado: true
};

console.log(carro);
Object.assign(carro, adicionais);
console.log(carro);