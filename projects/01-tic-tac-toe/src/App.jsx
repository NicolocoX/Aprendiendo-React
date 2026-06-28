import { useState } from 'react'
import { Square } from './components/Square.jsx'
import { TURNO } from './constants.js'
import { FinJuego } from './components/FinJuego.jsx'

export function App() {
  const [turno, setTurno] = useState(TURNO.x)
  const [casillas, setCasillas] = useState(["", "", "", "", "", "", "", "", ""])
  const [ganador, setGanador] = useState(null)

  function finPartida(index, casillasActuales) {
    const fila = Math.floor(index / 3)
    const columna = index % 3

    if (casillasActuales[fila * 3] === casillasActuales[((fila * 3) + 1)] &&
      casillasActuales[fila * 3] === casillasActuales[((fila * 3) + 2)]) {
      setGanador(turno)
    } else if (casillasActuales[columna] === casillasActuales[columna + 3] &&
      casillasActuales[columna] === casillasActuales[columna + 6]) {
      setGanador(turno)
    } else if (fila === columna || Math.abs(fila - columna) === 2) {
      if (casillasActuales[0] &&
        casillasActuales[0] === casillasActuales[4] &&
        casillasActuales[0] === casillasActuales[8]) {
        setGanador(turno)
      } else if (casillasActuales[2] &&
        casillasActuales[2] === casillasActuales[4] &&
        casillasActuales[2] === casillasActuales[6]) {
        setGanador(turno)
      }
    }

    for (let i = 0; i < casillasActuales.length; i++) {
      if (!casillasActuales[i]) {
        return
      }
    }
    setGanador("")
  }

  function jugada(index) {
    const casillasAux = [...casillas]

    if (casillasAux[index]) {
      return
    }

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

      {
        ganador !== null && (
          <FinJuego ganador={ganador}></FinJuego>
        )
      }
    </main>
  )
}