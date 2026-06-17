import "./App.css"
import { TwitterFollowCard } from "./FollowCard"

const usuarios = [
  {
    key: '0',
    nombre: 'NicolocoX',
    usuario: 'namsnicolas',
    initialIsFolowing: true
  },
  {
    key: '1',
    nombre: 'Miguel Ángel Durán',
    usuario: 'midudev',
    initialIsFolowing: false
  }
]



export function App() {
  return (
    <section className="App">
      {
        usuarios.map(({ key, nombre, usuario, initialIsFolowing }) => (
          <TwitterFollowCard key={key} usuario={usuario} initialIsFollowing={initialIsFolowing}>
            {nombre}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}