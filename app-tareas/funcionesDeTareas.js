const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function() {
        const tareas = fs.readFileSync('./tareas.json', { encoding: 'utf-8' });
        return JSON.parse(tareas);
    },
    escribirJSON: function( tareas ) {
        const stringTareas = JSON.stringify(tareas) 
        fs.writeFileSync(this.archivo, stringTareas, 'utf-8')
    },
    guardarTarea: function( tarea ) {
        const tareas = this.leerArchivo()
        tareas.push( tarea )
        this.escribirJSON(tareas)
    },
    filtrarPorEstado: function( estado ) {
        const tareas = this.leerArchivo()
        let tareasFiltradas = tareas.filter( tarea => tarea.estado === estado)
        return tareasFiltradas
    }
}

module.exports = archivoTareas;