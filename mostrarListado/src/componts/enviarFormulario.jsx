const EnviarFormulario = () => {
  const listaTareas = ["Tarea 1", "Tarea 2", "Tarea 3"];
  const enviarFormulario = (e) => {
    e.preventDefault();
    console.log("Enviando formulario");
  };
  //Función al escribir sobre el input del formulario
  const capturaInput = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div>
        <form onSubmit={enviarFormulario}>
          <input name="nombreTarea" onChange={capturaInput} />
          <button> Agregar Tarea </button>
        </form>
        <ul>
          {listaTareas.map((tarea) => (
            <li key={tarea}> {tarea} </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default EnviarFormulario;
