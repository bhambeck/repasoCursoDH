const fs = require ('fs');
let funcionesDeTareas = {
    leerJson: function (params) {
        //me traigo el archivo Json y lo leo desde el archivo.js, aún conserva el formato Json
        let tareasJSON = fs.readFileSync('tareas.json', 'utf-8');
        //convierto el archivo a  formato js 
        let tareas = JSON.parse(tareasJSON);
        return tareas;
    },
    escribirJson: function (unaTarea) {
       let arrayJson = JSON.stringify(unaTarea)
       fs.writeFileSync('tareas.json',arrayJson, 'utf-8')
    },
    guardarTarea: function (unaTarea){
        //recupero todas las tareas
        let misTareas = this.leerJson();
        //guardo la nueva
        misTareas.push(unaTarea);
        //escribo el archivo json
        this.escribirJson(misTareas);

    }, 
    leerPorEstado: function (estado){
      //recupero todas las tareas
      let todasLasTareas = this.leerJson();
      let tareasFiltradas = todasLasTareas.filter(unaTarea=>{
          return unaTarea.estado === estado
      })  
      return tareasFiltradas

    }
}

module.exports = funcionesDeTareas;


