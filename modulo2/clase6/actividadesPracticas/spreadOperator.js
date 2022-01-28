//puede unir 2 array y trasnformarlos en uno solo:

let frutas1 = ['manzana', 'banana', 'peras']
let frutas2 = ['ciruela', 'sandia', 'melon']

let todas = [...frutas1, ...frutas2]

console.log (todas);

//funciona también para objetos literales:

let curso = {
    materia: 'Matematica', 
    dia: 'Lunes', 
    horario: '19 hs'
}
let alumno1 = {
    nombre: 'Bea',
    apellido:'Hambeck', 
    ...curso
}

console.log(alumno1);

//y tambiên puede usarse en funciones, por ej si no sabemos la cantidad de parámetros.
//Lo que devuelve en este ejemplo es en formato array

function peliculasVistas (...params){
    console.log (params)
}
peliculasVistas ('End Game', 'Matilda')

//como el formato ya sabemos que es de Array, podemos hacer lo siguiente:

function peliculasVistas2 (...params){
    for (let i = 0; i < params.length; i++) {
        console.log('Este usuario ya vio '+params[i])
        
    }
}
peliculasVistas2 ('End Game', 'Matilda')
peliculasVistas2 ('End Game', 'Matilda', 'Iron Man', 'Iron Man 2')

//parametro rest, cuando lo agrego como ultimo parametro al definir una funcion
function sumar(numero1,...numeros) {
    // Sabiendo que números es ahora un array utilizamos
    // el método reduce para obtener la sumatoria
    console.log( numeros.reduce((acum, num) => acum += num))
 }
 
 sumar(2, 4, 1); // devuelve 5
 sumar(13, 6, 8, 12, 2, 3); //devuelve 31 o sea, suma todos menos el 1o
