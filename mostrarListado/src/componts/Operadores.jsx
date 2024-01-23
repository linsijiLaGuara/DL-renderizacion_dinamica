


const Operadores = () => {
    const multiplicar = [1, 2, 3, 4, 5, 6, 8, 9, 10];

    return <ul>
        {multiplicar.map(numeros => <li key={numeros}>2 X {numeros} = {numeros * 2} </li>)}

    </ul>
}

export default Operadores 