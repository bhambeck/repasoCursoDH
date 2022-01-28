const fs = require ('fs');
let funcionesDeTareas = {
    obtenerTareas: function (params) {
        //me traigo el archivo Json y lo leo desde el archivo.js, aún conserva el formato Json
        let tareasJSON = fs.readFileSync('tareas.json', 'utf-8');
        //convierto el archivo a  formato js 
        let tareas = JSON.parse(tareasJSON);
        return tareas;
    }
}

module.exports = funcionesDeTareas;


