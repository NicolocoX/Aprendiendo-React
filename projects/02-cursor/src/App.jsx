import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [activado, setActivado] = useState(false)
  const [posicion, setPosicion] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log("efecto")

    const manejarMovimiento = (event) => {
      const { clientX, clientY } = event
      setPosicion({ x: clientX, y: clientY })
    }

    if (activado) {
      window.addEventListener("pointermove", manejarMovimiento)
    }
    return () => {
      window.removeEventListener("pointermove", manejarMovimiento)
    }
  }, [activado])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${posicion.x}px, ${posicion.y}px)`
      }}
      />
      <button onClick={() => setActivado(!activado)}>
        {activado ? "Desactivar" : "Activar"} seguimiento
      </button>
    </main>
  )
}
