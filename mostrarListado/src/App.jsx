import { useState } from 'react'

import './App.css';
import EnviarFormulario from './componts/enviarFormulario';
import Operadores from './componts/Operadores'
import Tareas from './componts/Tareas'
function App() {


  return (
    <>

      <EnviarFormulario />
      <Operadores/>
      <Tareas></Tareas>


 


    </>
  )
}

export default App
