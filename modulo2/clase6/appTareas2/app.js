const { guardarTarea, leerPorEstado } = require('./tareas');
let funcionesDeTareas = require('./tareas');

//PARTE 2 DEL EJERCICIO
//COMO OBTENGOUN ARGUMENTO DESDE LA TERMINAL:
//console.log (process.argv)

//en la segunda posicion esta app.js. Entonces lo guardo en una variable
let argumento = process.argv[2];

switch (argumento) {
    case 'listar':
        let tareas = funcionesDeTareas.leerJson();
        tareas.forEach((tarea, indice) => {
            console.log(indice+1 + '. La tarea ' + tarea.titulo+ ' se encuentra ' + tarea.estado) ;
         });
        break;
    case 'crear':
         let nuevaTarea = {
             titulo: process.argv[3],
             estado: 'pendiente'
         }
         funcionesDeTareas.guardarTarea(nuevaTarea)
         ;
        break;
    case 'filtrar':
        let estado = process.argv[3]
        let tareasFiltradas =funcionesDeTareas.leerPorEstado(estado)
        console.log('---Tareas filtradas por estado: '+estado+'--- ');
        tareasFiltradas.forEach((unaTarea, indice) => {
            console.log(indice+1+':' +unaTarea.titulo)
        });

        break;

    case undefined:
        console.log('Tienes que escribir una acción');
        break;

    default:
        console.log('No entiendo que quieres hacer');
        
}

