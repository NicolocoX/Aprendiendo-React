import "./../index.css"
import { Square } from "./Square"

export const FinJuego = ({ ganador, funReinicio }) => {

  return (
    <section className="winner">
      <div className="text">
        <h2>
          {ganador ? "El ganador es:" : "Empate"}
        </h2>
        {
          ganador && (<Square>{ganador}</Square>)
        }
        <button onClick={funReinicio}>Volver a empezar</button>
      </div>
    </section>
  )
}