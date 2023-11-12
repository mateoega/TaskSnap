const archivoTareas = require('./funcionesDeTareas')
let tareas = archivoTareas.leerArchivo()

let accion = process.argv[2]

switch(accion){
    case 'listar':
        console.log('Lista de tareas✔: ')
        console.log('---------------------------------------')
        tareas.forEach((tareas,i) => {
            console.log((i + 1) + '. ' + tareas.titulo + ' - ' + tareas.estado)})
        console.log('---------------------------------------')
        break

    case undefined:
        console.log('---------------------------------------')
        console.log('Atención - Tienes que pasar una acción.🤦‍♂️')
        console.log('Las acciones displonibles son: "listar"👍')
        console.log('---------------------------------------')
        break

    case 'crear':
        let titulo = process.argv[3]
        let tareaNueva = {titulo: titulo,estado: 'pendiente'}
        archivoTareas.guardarTarea(tareaNueva)
        console.log('Nueva tarea creada')
        break
        
    case 'filtrar':
        let estado = process.argv[3]
        let tareasPorEstado = archivoTareas.filtrarPorEstado( estado )
        let tareasFiltradas = tareasPorEstado.forEach(() => console.log(tareasPorEstado))
        console.log( tareasFiltradas )
        break

    default:
        console.log('---------------------------------------')
        console.log('No entiendo qué quieres hacer.🤷‍♂️')
        console.log('Las acciones displonibles son: "listar"👍')
        console.log('---------------------------------------')
}