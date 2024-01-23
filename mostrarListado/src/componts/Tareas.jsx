


const Tareas = () => {
    const listaTarea = ["Tarea 1", "Tarea 2", "Tarea 3"]

    return <ul>
        {listaTarea.map(tarea => <li key={tarea}>{tarea}</li>)}
    </ul>
}

export default Tareas