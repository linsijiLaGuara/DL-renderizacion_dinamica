
const enviarFormulario = () => {

    const listaTareaFormulario = ["Tarea 1", "Tarea 2", "Tarea 3"]



    const enviarFormularioEvento = (e) => {
        e.preventDefault()
        console.log('Enviado formularios')
    }


    const capturarInput = (e) => {
        console.log(e.target.value)
    }
    return (
        <>
            <div>
                <form onSubmit={enviarFormularioEvento}>
                    <input name="nombreTarea" onChange={capturarInput} />
                    <button>Agregar tarea</button>
                </form>
                <ul>
                    {listaTareaFormulario.map(tarea => <li key={tarea} >{tarea}</li>)}
                </ul>
            </div>
        </>
    )


}

export default enviarFormulario