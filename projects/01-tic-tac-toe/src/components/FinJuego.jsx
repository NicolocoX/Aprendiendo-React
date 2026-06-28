import "./../index.css"
import { Square } from "./Square"

export const FinJuego = ({ ganador }) => {
  function reiniciar() {
    console.log("reinicio")
  }

  return (
    <section className="winner">
      <div className="text">
        <h2>
          {ganador ? "El ganador es:" : "Empate"}
        </h2>
        {
          ganador && (<Square>{ganador}</Square>)
        }

        <button onClick={reiniciar}>Volver a empezar</button>
      </div>
    </section>
  )
}