let funcionesDeTareas = require('./funcionesDeTareas');

//PARTE 2 DEL EJERCICIO
//COMO OBTENGOUN ARGUMENTO DESDE LA TERMINAL:
//console.log (process.argv)

//en la segunda posicion esta app.js. Entonces lo guardo en una variable
let argumento = process.argv[2];

switch (argumento) {
    case 'listar':
        let tareas = funcionesDeTareas.obtenerTareas();
        for (let i = 0; i < tareas.length; i++) {
           console.log('La tarea ' + tareas[i].titulo+ ' se encuentra ' + tareas[i].estado) ;
        }
        break;

    case undefined:
        console.log('Tienes que escribir una acción');
        break;

    default:
        console.log('No entiendo que quieres hacer');
        
}

