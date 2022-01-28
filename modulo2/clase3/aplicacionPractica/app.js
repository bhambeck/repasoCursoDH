let fs = require ('fs');
let moment= require('moment')
let heroes = require ('./superheroes')

let datos = fs.readFileSync(__dirname + '/prueba.txt', 'utf-8')

console.log (datos)
console.log (moment().format('Do MMM YYYY'))
console.log (heroes[0].nombre)
