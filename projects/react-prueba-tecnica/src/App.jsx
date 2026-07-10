import './App.css'
import { useCatImg } from "./hooks/useCatImg"
import { useCatFact } from "./hooks/useCatFact"


export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imgUrl } = useCatImg({ fact })


  const handleClick = async () => {
    refreshFact()
  }


  return (
    <main>
      <h1>App de gatos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imgUrl && <img src={imgUrl} alt={`Image extracted using de first word from "${fact}"`} />}
      </section>
      <button onClick={handleClick}>Get new fact</button>
    </main>
  )
}