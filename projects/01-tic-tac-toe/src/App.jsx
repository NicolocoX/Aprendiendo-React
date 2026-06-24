import { useState } from 'react'
import { Square } from './components/Square.jsx'
import { TURNO } from './constants.js'

export function App() {
  const [turno, setTurno] = useState(TURNO.x)
  const [casillas, setCasillas] = useState(["", "", "", "", "", "", "", "", ""])

  function finPartida(index, casillasActuales) {
    const posicion = (index) % 3
    const fila = Math.floor(index / 3)
    console.log(fila)
    console.log(casillasActuales[fila * 3], casillasActuales[((fila * 3) + 1)], casillasActuales[((fila * 3) + 2)])
    // if (casillasActuales[(index - 1) % 3] === casillasActuales[index] &&
    //   casillasActuales[(index + 1) % 3] === casillasActuales[index]) {
    //   console.log("ganador")
    // }
  }

  function jugada(index) {
    const casillasAux = [...casillas]
    casillasAux[index] = turno
    setCasillas(casillasAux)

    finPartida(index, casillasAux)

    if (turno === "X") {
      setTurno(TURNO.o)
    } else {
      setTurno(TURNO.x)
    }
  }

  function reiniciar() {
    setCasillas(["", "", "", "", "", "", "", "", ""])
  }

  return (
    <main className='board'>
      <h1 translate='no'>Tic Tac Toe</h1>
      <section className='game'>
        {casillas.map((elemento, index) => {
          return (
            <Square key={index} index={index} isSelected={false} onClick={jugada}>{elemento}</Square>
          )
        })}
      </section>
      <span>Es el turno de {turno}</span>
      <button onClick={reiniciar}>Reiniciar</button>
    </main>
  )
}