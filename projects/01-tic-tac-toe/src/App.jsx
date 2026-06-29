import { useState } from 'react'
import { Square } from './components/Square.jsx'
import { TURNO } from './constants.js'
import { FinJuego } from './components/FinJuego.jsx'
import confetti from "canvas-confetti"

export function App() {
  const [turno, setTurno] = useState(() => {
    const turnoGuardado = window.localStorage.getItem("turno")
    return turnoGuardado ?? TURNO.x
  })
  const [casillas, setCasillas] = useState(() => {
    const casillasGuardadas = window.localStorage.getItem("casillas")
    return casillasGuardadas ? JSON.parse(casillasGuardadas) : Array(9).fill(null)
  })
  const [ganador, setGanador] = useState(null)

  function finPartida(index, casillasActuales) {
    const fila = Math.floor(index / 3)
    const columna = index % 3

    if (casillasActuales[fila * 3] === casillasActuales[((fila * 3) + 1)] &&
      casillasActuales[fila * 3] === casillasActuales[((fila * 3) + 2)]) {
      setGanador(turno)
      confetti()
    } else if (casillasActuales[columna] === casillasActuales[columna + 3] &&
      casillasActuales[columna] === casillasActuales[columna + 6]) {
      setGanador(turno)
      confetti()
    } else if (fila === columna || Math.abs(fila - columna) === 2) {
      if (casillasActuales[0] &&
        casillasActuales[0] === casillasActuales[4] &&
        casillasActuales[0] === casillasActuales[8]) {
        setGanador(turno)
        confetti()
      } else if (casillasActuales[2] &&
        casillasActuales[2] === casillasActuales[4] &&
        casillasActuales[2] === casillasActuales[6]) {
        setGanador(turno)
        confetti()
      }
    } else {
      //Detecta si hay empate
      for (let i = 0; i < casillasActuales.length; i++) {
        if (!casillasActuales[i]) {
          return
        }
      }
      setGanador("")
    }
  }

  function jugada(index) {
    const nuevoCasillas = [...casillas]

    if (nuevoCasillas[index]) return

    nuevoCasillas[index] = turno
    setCasillas(nuevoCasillas)

    finPartida(index, nuevoCasillas)

    const nuevoTurno = turno === TURNO.x ? TURNO.o : TURNO.x
    setTurno(nuevoTurno)

    window.localStorage.setItem("casillas", JSON.stringify(nuevoCasillas))
    console.log(nuevoTurno)
    window.localStorage.setItem("turno", nuevoTurno)
  }

  function reiniciar() {
    setCasillas(Array(9).fill(null))
    setTurno(TURNO.x)
    setGanador(null)

    window.localStorage.removeItem("casillas")
    window.localStorage.removeItem("turno")
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
          <FinJuego ganador={ganador} funReinicio={reiniciar}></FinJuego>
        )
      }
    </main>
  )
}