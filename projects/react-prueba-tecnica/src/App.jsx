import { useEffect, useState } from "react"
import './App.css'
import { getRandomFact } from "./services/facts"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMG_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`
const CAT_PREFIX_IMG_URL = 'https://cataas.com'


export function App() {
  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState()


  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])


  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0]

    fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImgUrl(url)
      })
  }, [fact])


  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
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