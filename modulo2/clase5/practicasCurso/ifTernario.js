let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaGrande = bicicletaA.rodado > bicicletaB.rodado? bicicletaA:bicicletaB

console.log ("la bicicleta mas grande es la "+ bicicletaGrande.marca)