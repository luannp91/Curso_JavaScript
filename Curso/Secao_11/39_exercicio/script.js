class Carro {
    constructor(marca, cor, gasolinaRestante, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;
    }

    dirigir(km) {
        let litrosConsumidos = km / this.consumo;
        this.gasolinaRestante -= litrosConsumidos;
    }

    abastecer(l) {
        this.gasolinaRestante += l;
    }
}

let carro = new Carro('VW', 'Cinza', 45, 14)
console.log(carro);

carro.dirigir(500);
console.log(carro);

carro.abastecer(10);
console.log(carro);